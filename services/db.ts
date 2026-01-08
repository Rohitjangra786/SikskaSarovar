import { Pool } from 'pg';

// Prefer explicit DATABASE_URL (recommended). Fallback to POSTGRES_URL or
// construct from PGHOST/PGUSER/PGPASSWORD/PGDATABASE if needed.
function buildConnectionString(): string {
  if (process.env.DATABASE_URL && process.env.DATABASE_URL.length > 0) return process.env.DATABASE_URL;
  if (process.env.POSTGRES_URL && process.env.POSTGRES_URL.length > 0) return process.env.POSTGRES_URL;
  const host = process.env.PGHOST || process.env.POSTGRES_HOST;
  const user = process.env.PGUSER || process.env.POSTGRES_USER;
  const password = process.env.PGPASSWORD || process.env.POSTGRES_PASSWORD;
  const database = process.env.PGDATABASE || process.env.POSTGRES_DATABASE;
  if (host && user && password && database) {
    return `postgresql://${user}:${encodeURIComponent(password)}@${host}/${database}?sslmode=require`;
  }
  return '';
}

const connectionString = buildConnectionString();

// Determine whether to enable ssl. Neon requires sslmode=require; disable
// strict certificate verification to avoid runtime TLS issues in many dev setups.
const useSsl = connectionString.includes('sslmode=require') || process.env.NODE_ENV === 'production';

const pool = new Pool({ connectionString, ...(useSsl ? { ssl: { rejectUnauthorized: false } as any } : {}) });

try {
  // Log non-sensitive connection info to help debugging (don't print secrets)
  if (connectionString) {
    try {
      const url = new URL(connectionString);
      console.log('Connecting to Postgres host:', url.hostname, 'db:', url.pathname.replace('/', ''));
    } catch (e) {
      console.log('Connecting to Postgres with provided connection string.');
    }
  } else {
    console.warn('No Postgres connection string found in environment (DATABASE_URL / POSTGRES_URL / PGHOST).');
  }
} catch (err) {
  // ignore logging errors
}

export async function query(text: string, params?: any[]) {
  return pool.query(text, params);
}

export function getPool() {
  return pool;
}

export default { query, getPool };
