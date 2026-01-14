import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import { getPool } from '../services/db';
import { chatWithSikshaAI } from '../services/geminiService';
import crypto from 'crypto';
import { COURSES } from '../constants';

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
      password TEXT,
      provider TEXT,
      provider_id TEXT,
      picture TEXT,
      designation TEXT,
      age INTEGER,
      sex TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
      last_login TIMESTAMP WITH TIME ZONE DEFAULT now()
    )
  `);
  // Ensure new columns exist for backwards compatibility on upgrades
  await pool.query(`ALTER TABLE users ADD COLUMN IF NOT EXISTS designation TEXT`);
  await pool.query(`ALTER TABLE users ADD COLUMN IF NOT EXISTS age INTEGER`);
  await pool.query(`ALTER TABLE users ADD COLUMN IF NOT EXISTS sex TEXT`);
  await pool.query(`ALTER TABLE users ADD COLUMN IF NOT EXISTS password TEXT`);
}

// Helper: Password Hashing using crypto
function hashPassword(password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const salt = crypto.randomBytes(16).toString('hex');
    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(`${salt}:${derivedKey.toString('hex')}`);
    });
  });
}

// Helper: Password Verification
function verifyPassword(password: string, hash: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const [salt, key] = hash.split(':');
    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(key === derivedKey.toString('hex'));
    });
  });
}

// Email/Password Signup
app.post('/api/auth/signup', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'name, email and password are required' });
  }

  try {
    await ensureUsersTable();

    // Check if user exists
    const existing = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (existing.rows.length > 0) {
      return res.status(400).json({ error: 'email_in_use' });
    }

    const hashedPassword = await hashPassword(password);

    const insertQuery = `
        INSERT INTO users (name, email, password, provider, picture, last_login)
        VALUES ($1, $2, $3, 'email', null, now())
        RETURNING id, name, email, provider, picture, designation, age, sex, created_at, last_login
    `;

    const { rows } = await pool.query(insertQuery, [name, email, hashedPassword]);
    const user = rows[0];

    const secret = process.env.STACK_SECRET_SERVER_KEY || process.env.POSTGRES_PASSWORD || 'dev_secret';
    const token = jwt.sign({ id: user.id, email: user.email }, secret, { expiresIn: '7d' });

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.json({ success: true, user });
  } catch (err) {
    console.error('signup error', err);
    return res.status(500).json({ error: 'internal_error' });
  }
});

// Email/Password Login
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'email and password are required' });
  }

  try {
    await ensureUsersTable();

    const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = rows[0];

    if (!user) {
      return res.status(401).json({ error: 'invalid_credentials' });
    }

    // If user acts as 'email' provider but has no password (e.g. from bad migration), fail.
    // If user signed up via social, they might not have a password.
    if (!user.password) {
      return res.status(400).json({ error: 'use_social_login' });
    }

    const isValid = await verifyPassword(password, user.password);
    if (!isValid) {
      return res.status(401).json({ error: 'invalid_credentials' });
    }

    // Update last login
    await pool.query('UPDATE users SET last_login = now() WHERE id = $1', [user.id]);

    const secret = process.env.STACK_SECRET_SERVER_KEY || process.env.POSTGRES_PASSWORD || 'dev_secret';
    const token = jwt.sign({ id: user.id, email: user.email }, secret, { expiresIn: '7d' });

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    // Don't send password back
    delete user.password;
    return res.json({ success: true, user });

  } catch (err) {
    console.error('login error', err);
    return res.status(500).json({ error: 'internal_error' });
  }
});

app.post('/api/auth/social', async (req, res) => {
  const { provider, providerId, name, email, picture } = req.body;
  if (!provider || !providerId || !email) {
    return res.status(400).json({ error: 'provider, providerId and email are required' });
  }

  try {
    await ensureUsersTable();

    const insertQuery = `
        INSERT INTO users (name, email, provider, provider_id, picture, designation, age, sex, last_login)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, now())
        ON CONFLICT (email) DO UPDATE SET
          name = EXCLUDED.name,
          provider = EXCLUDED.provider,
          provider_id = EXCLUDED.provider_id,
          picture = EXCLUDED.picture,
          designation = COALESCE(EXCLUDED.designation, users.designation),
          age = COALESCE(EXCLUDED.age, users.age),
          sex = COALESCE(EXCLUDED.sex, users.sex),
          last_login = now()
        RETURNING id, name, email, provider, provider_id, picture, designation, age, sex, created_at, last_login
    `;

    const { rows } = await pool.query(insertQuery, [name, email, provider, providerId, picture, null, null, null]);
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

// Serve sitemap and robots for crawlers
app.get('/sitemap.xml', (req, res) => {
  try {
    const base = (process.env.FRONTEND_URL || 'http://localhost:3000').replace(/\/$/, '');
    const urls: { loc: string; changefreq?: string; priority?: string }[] = [];
    urls.push({ loc: `${base}/`, changefreq: 'daily', priority: '1.0' });
    urls.push({ loc: `${base}/about`, changefreq: 'monthly', priority: '0.6' });

    // Add all courses and lessons
    if (Array.isArray(COURSES)) {
      for (const c of COURSES) {
        urls.push({ loc: `${base}/course/${c.id}`, changefreq: 'weekly', priority: '0.8' });
        if (Array.isArray(c.lessons)) {
          for (const l of c.lessons) {
            urls.push({ loc: `${base}/course/${c.id}/lesson/${l.id}`, changefreq: 'monthly', priority: '0.6' });
          }
        }
      }
    }

    const xml = [`<?xml version="1.0" encoding="UTF-8"?>`, `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`];
    for (const u of urls) {
      xml.push('  <url>');
      xml.push(`    <loc>${u.loc}</loc>`);
      if (u.changefreq) xml.push(`    <changefreq>${u.changefreq}</changefreq>`);
      if (u.priority) xml.push(`    <priority>${u.priority}</priority>`);
      xml.push('  </url>');
    }
    xml.push('</urlset>');

    res.setHeader('Content-Type', 'application/xml');
    return res.send(xml.join('\n'));
  } catch (err) {
    console.error('sitemap error', err);
    return res.status(500).send('');
  }
});

app.get('/robots.txt', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send(`User-agent: *\nAllow: /\nSitemap: ${process.env.FRONTEND_URL || 'http://localhost:3000'}/sitemap.xml\n`);
});

// Return current authenticated user based on JWT cookie or Authorization header
app.get('/api/auth/me', async (req, res) => {
  const token = req.cookies?.token || (req.headers.authorization || '').replace(/^Bearer\s+/, '');
  if (!token) return res.status(401).json({ error: 'no_token' });

  const secret = process.env.STACK_SECRET_SERVER_KEY || process.env.POSTGRES_PASSWORD || 'dev_secret';
  try {
    const payload: any = jwt.verify(token, secret);
    const { rows } = await pool.query('SELECT id, name, email, provider, picture, designation, age, sex, created_at, last_login FROM users WHERE id = $1', [payload.id]);
    if (!rows[0]) return res.status(404).json({ error: 'user_not_found' });
    return res.json({ user: rows[0] });
  } catch (err) {
    console.error('me error', err);
    return res.status(401).json({ error: 'invalid_token' });
  }
});

// Update current authenticated user's profile (designation, age, sex)
app.put('/api/auth/me', async (req, res) => {
  const token = req.cookies?.token || (req.headers.authorization || '').replace(/^Bearer\s+/, '');
  if (!token) return res.status(401).json({ error: 'no_token' });
  const secret = process.env.STACK_SECRET_SERVER_KEY || process.env.POSTGRES_PASSWORD || 'dev_secret';

  try {
    const payload: any = jwt.verify(token, secret);
    const { designation, age, sex } = req.body || {};
    // Basic validation
    const updates: string[] = [];
    const values: any[] = [];
    let idx = 1;
    if (designation !== undefined) { updates.push(`designation = $${idx++}`); values.push(designation); }
    if (age !== undefined) { updates.push(`age = $${idx++}`); values.push(Number(age) || null); }
    if (sex !== undefined) { updates.push(`sex = $${idx++}`); values.push(sex); }

    if (updates.length === 0) return res.status(400).json({ error: 'no_fields' });

    const q = `UPDATE users SET ${updates.join(', ')} WHERE id = $${idx} RETURNING id, name, email, provider, picture, designation, age, sex, created_at, last_login`;
    values.push(payload.id);
    const { rows } = await pool.query(q, values);
    if (!rows[0]) return res.status(404).json({ error: 'user_not_found' });
    return res.json({ user: rows[0] });
  } catch (err) {
    console.error('update profile error', err);
    return res.status(401).json({ error: 'invalid_token' });
  }
});

// AI chat endpoint - server-side proxy to Gemini/Google GenAI
app.post('/api/ai/chat', async (req, res) => {
  const { message, history } = req.body || {};
  console.log('[AI] /api/ai/chat called', { messagePreview: typeof message === 'string' ? message.slice(0, 80) : null, hasHistory: Array.isArray(history) && history.length > 0, apiKeyPresent: !!process.env.API_KEY });
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
  console.log('[AI] /api/ai/stream called', { messagePreview: typeof message === 'string' ? message.slice(0, 80) : null, hasHistory: Array.isArray(history) && history.length > 0, apiKeyPresent: !!process.env.API_KEY });
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

// Serve static files from the "dist" directory (Vite build output)
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, '../dist');

// Serve static assets (JS, CSS, Images, etc.)
app.use(express.static(distPath));

// API routes are defined above.
// For any other request, serve index.html to let client-side router handle it.
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

const port = process.env.PORT ? Number(process.env.PORT) : 8080;
app.listen(port, () => console.log(`Auth server running on http://localhost:${port}`));

// Safe startup check: report whether a GenAI API key is present (do not log the key)
if (process.env.API_KEY && process.env.API_KEY.length > 0) {
  console.log('GenAI API key found: AI features enabled (server-side only)');
} else {
  console.warn('No GenAI API key found in environment. AI features will not work until API_KEY is set.');
}
