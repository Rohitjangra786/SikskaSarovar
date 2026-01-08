import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL || '';

const pool = new Pool({ connectionString, ssl: { rejectUnauthorized: false } as any });

export async function query(text: string, params?: any[]) {
  return pool.query(text, params);
}

export function getPool() {
  return pool;
}

export default { query, getPool };
