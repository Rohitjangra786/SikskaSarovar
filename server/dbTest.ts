import 'dotenv/config';
import { query } from '../services/db';

(async () => {
  try {
    const res = await query('SELECT NOW()');
    console.log('DB connected, now:', res.rows);
    process.exit(0);
  } catch (err) {
    console.error('DB connection error:', err);
    process.exit(1);
  }
})();
