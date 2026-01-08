import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import { getPool } from '../services/db';
import { chatWithSikshaAI } from '../services/geminiService';
import crypto from 'crypto';

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const pool = getPool();

// Run a quick test query on startup to validate DB connectivity
pool.query('SELECT 1')
  .then(() => console.log('DB connection OK'))
  .catch(err => console.error('DB connection failed on startup:', err));

async function ensureUsersTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id BIGSERIAL PRIMARY KEY,
      name TEXT,
      email TEXT UNIQUE,
      provider TEXT,
      provider_id TEXT,
      picture TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
      last_login TIMESTAMP WITH TIME ZONE DEFAULT now()
    )
  `);
}

app.post('/api/auth/social', async (req, res) => {
  const { provider, providerId, name, email, picture } = req.body;
  if (!provider || !providerId || !email) {
    return res.status(400).json({ error: 'provider, providerId and email are required' });
  }

  try {
    await ensureUsersTable();

    const insertQuery = `
      INSERT INTO users (name, email, provider, provider_id, picture, last_login)
      VALUES ($1, $2, $3, $4, $5, now())
      ON CONFLICT (email) DO UPDATE SET
        name = EXCLUDED.name,
        provider = EXCLUDED.provider,
        provider_id = EXCLUDED.provider_id,
        picture = EXCLUDED.picture,
        last_login = now()
      RETURNING id, name, email, provider, provider_id, picture, created_at, last_login
    `;

    const { rows } = await pool.query(insertQuery, [name, email, provider, providerId, picture]);
    const user = rows[0];

    // Sign JWT and set as HttpOnly cookie
    const secret = process.env.STACK_SECRET_SERVER_KEY || process.env.POSTGRES_PASSWORD || 'dev_secret';
    const token = jwt.sign({ id: user.id, email: user.email }, secret, { expiresIn: '7d' });

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.json({ user });
  } catch (err) {
    console.error('auth error', err);
    return res.status(500).json({ error: 'internal_error' });
  }
});

// --- OAuth flows for Google and Facebook ---
function makeState() {
  return crypto.randomBytes(16).toString('hex');
}

const FRONTEND = process.env.FRONTEND_URL || 'http://localhost:3000';

app.get('/auth/google', (req, res) => {
  const state = makeState();
  res.cookie('oauth_state', state, { httpOnly: true, sameSite: 'lax' });
  const params = new URLSearchParams({
    client_id: process.env.GOOGLE_CLIENT_ID || '',
    redirect_uri: process.env.GOOGLE_CALLBACK_URL || `http://localhost:8080/auth/google/callback`,
    response_type: 'code',
    scope: 'openid email profile',
    state,
    access_type: 'online',
    prompt: 'select_account'
  });
  const url = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
  return res.redirect(url);
});

app.get('/auth/google/callback', async (req, res) => {
  const { code, state } = req.query as any;
  const saved = req.cookies?.oauth_state;
  if (!code || !state || !saved || state !== saved) {
    return res.status(400).send('Invalid OAuth state');
  }
  try {
    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code: String(code),
        client_id: process.env.GOOGLE_CLIENT_ID || '',
        client_secret: process.env.GOOGLE_CLIENT_SECRET || '',
        redirect_uri: process.env.GOOGLE_CALLBACK_URL || `http://localhost:8080/auth/google/callback`,
        grant_type: 'authorization_code'
      })
    });
    const tokenJson = await tokenRes.json();
    const accessToken = tokenJson.access_token;
    const userRes = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?access_token=${accessToken}`);
    const profile = await userRes.json();

    // Upsert user
    await ensureUsersTable();
    const insertQuery = `
      INSERT INTO users (name, email, provider, provider_id, picture, last_login)
      VALUES ($1, $2, $3, $4, $5, now())
      ON CONFLICT (email) DO UPDATE SET
        name = EXCLUDED.name,
        provider = EXCLUDED.provider,
        provider_id = EXCLUDED.provider_id,
        picture = EXCLUDED.picture,
        last_login = now()
      RETURNING id, name, email
    `;
    const { rows } = await pool.query(insertQuery, [profile.name, profile.email, 'google', profile.id, profile.picture]);
    const user = rows[0];

    const secret = process.env.STACK_SECRET_SERVER_KEY || process.env.POSTGRES_PASSWORD || 'dev_secret';
    const token = jwt.sign({ id: user.id, email: user.email }, secret, { expiresIn: '7d' });
    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax' });
    return res.redirect(FRONTEND + '/?auth=success');
  } catch (err) {
    console.error('google callback error', err);
    return res.redirect(FRONTEND + '/?auth=error');
  }
});

app.get('/auth/facebook', (req, res) => {
  const state = makeState();
  res.cookie('oauth_state', state, { httpOnly: true, sameSite: 'lax' });
  const params = new URLSearchParams({
    client_id: process.env.FACEBOOK_CLIENT_ID || '',
    redirect_uri: process.env.FACEBOOK_CALLBACK_URL || `http://localhost:8080/auth/facebook/callback`,
    state,
    scope: 'email,public_profile',
    response_type: 'code'
  });
  const url = `https://www.facebook.com/v13.0/dialog/oauth?${params.toString()}`;
  return res.redirect(url);
});

app.get('/auth/facebook/callback', async (req, res) => {
  const { code, state } = req.query as any;
  const saved = req.cookies?.oauth_state;
  if (!code || !state || !saved || state !== saved) {
    return res.status(400).send('Invalid OAuth state');
  }
  try {
    const tokenUrl = `https://graph.facebook.com/v13.0/oauth/access_token?client_id=${encodeURIComponent(process.env.FACEBOOK_CLIENT_ID || '')}&redirect_uri=${encodeURIComponent(process.env.FACEBOOK_CALLBACK_URL || `http://localhost:8080/auth/facebook/callback`)}&client_secret=${encodeURIComponent(process.env.FACEBOOK_CLIENT_SECRET || '')}&code=${encodeURIComponent(code)}`;
    const tokenRes = await fetch(tokenUrl);
    const tokenJson = await tokenRes.json();
    const accessToken = tokenJson.access_token;
    const userRes = await fetch(`https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${accessToken}`);
    const profile = await userRes.json();

    await ensureUsersTable();
    const insertQuery = `
      INSERT INTO users (name, email, provider, provider_id, picture, last_login)
      VALUES ($1, $2, $3, $4, $5, now())
      ON CONFLICT (email) DO UPDATE SET
        name = EXCLUDED.name,
        provider = EXCLUDED.provider,
        provider_id = EXCLUDED.provider_id,
        picture = EXCLUDED.picture,
        last_login = now()
      RETURNING id, name, email
    `;
    const pictureUrl = profile.picture?.data?.url || null;
    const { rows } = await pool.query(insertQuery, [profile.name, profile.email, 'facebook', profile.id, pictureUrl]);
    const user = rows[0];

    const secret = process.env.STACK_SECRET_SERVER_KEY || process.env.POSTGRES_PASSWORD || 'dev_secret';
    const token = jwt.sign({ id: user.id, email: user.email }, secret, { expiresIn: '7d' });
    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax' });
    return res.redirect(FRONTEND + '/?auth=success');
  } catch (err) {
    console.error('facebook callback error', err);
    return res.redirect(FRONTEND + '/?auth=error');
  }
});

// Return current authenticated user based on JWT cookie or Authorization header
app.get('/api/auth/me', async (req, res) => {
  const token = req.cookies?.token || (req.headers.authorization || '').replace(/^Bearer\s+/, '');
  if (!token) return res.status(401).json({ error: 'no_token' });

  const secret = process.env.STACK_SECRET_SERVER_KEY || process.env.POSTGRES_PASSWORD || 'dev_secret';
  try {
    const payload: any = jwt.verify(token, secret);
    const { rows } = await pool.query('SELECT id, name, email, provider, picture, created_at, last_login FROM users WHERE id = $1', [payload.id]);
    if (!rows[0]) return res.status(404).json({ error: 'user_not_found' });
    return res.json({ user: rows[0] });
  } catch (err) {
    console.error('me error', err);
    return res.status(401).json({ error: 'invalid_token' });
  }
});

// AI chat endpoint - server-side proxy to Gemini/Google GenAI
app.post('/api/ai/chat', async (req, res) => {
  const { message, history } = req.body || {};
  if (!message || typeof message !== 'string') return res.status(400).json({ error: 'message_required' });
  try {
    const reply = await chatWithSikshaAI(message, history || []);
    return res.json({ text: reply });
  } catch (err) {
    console.error('AI chat error', err);
    const message = err instanceof Error ? err.message : String(err);
    return res.status(500).json({ error: 'ai_error', message });
  }
});

// Streaming AI endpoint: returns a chunked response so the client can render
// partial content as it's produced. Currently this implementation obtains the
// full reply from `chatWithSikshaAI` and streams it in small chunks. If the
// GenAI client later supports streaming natively, replace this logic.
app.post('/api/ai/stream', async (req, res) => {
  const { message, history } = req.body || {};
  if (!message || typeof message !== 'string') return res.status(400).json({ error: 'message_required' });

  try {
    // Get full reply (SDK streaming can be added later)
    const fullReply = await chatWithSikshaAI(message, history || []);

    // Prepare chunked response
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const chunkSize = 120; // characters per chunk
    for (let i = 0; i < fullReply.length; i += chunkSize) {
      const chunk = fullReply.slice(i, i + chunkSize);
      // write chunk and flush
      res.write(chunk);
      // small pause to allow client rendering; adjust or remove in production
      await new Promise((r) => setTimeout(r, 20));
    }

    res.end();
  } catch (err) {
    console.error('AI stream error', err);
    const message = err instanceof Error ? err.message : String(err);
    if (!res.headersSent) res.status(500).json({ error: 'ai_error', message });
    else res.end();
  }
});

const port = process.env.PORT ? Number(process.env.PORT) : 8080;
app.listen(port, () => console.log(`Auth server running on http://localhost:${port}`));

// Safe startup check: report whether a GenAI API key is present (do not log the key)
if (process.env.API_KEY && process.env.API_KEY.length > 0) {
  console.log('GenAI API key found: AI features enabled (server-side only)');
} else {
  console.warn('No GenAI API key found in environment. AI features will not work until API_KEY is set.');
}
