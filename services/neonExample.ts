import { neon } from "@neondatabase/serverless";

// Minimal Neon Serverless example. Place this in `services/neonExample.ts`.
// Usage: set `DATABASE_URL` in your environment (e.g. .env) and import `sql`.

const sql = neon(process.env.DATABASE_URL || process.env.DATABASE_URL!);

export async function getPosts() {
  // Example query using tagged template syntax
  const posts = await sql`SELECT id, title, content FROM posts ORDER BY id DESC LIMIT 20`;
  return posts;
}

export default { getPosts };
