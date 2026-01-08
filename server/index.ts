import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import { getPool } from '../services/db';

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

const port = process.env.PORT ? Number(process.env.PORT) : 8080;
app.listen(port, () => console.log(`Auth server running on http://localhost:${port}`));
