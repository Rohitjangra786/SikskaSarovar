import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { getPool } from '../services/db';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = getPool();

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
    return res.json({ user });
  } catch (err) {
    console.error('auth error', err);
    return res.status(500).json({ error: 'internal_error' });
  }
});

const port = process.env.PORT ? Number(process.env.PORT) : 8080;
app.listen(port, () => console.log(`Auth server running on http://localhost:${port}`));
