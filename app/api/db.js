// db.js

import { Pool } from 'pg';

const pool = new Pool({
  user: '',
  host: 'http://localhost:3000/api/yourRoute',
  database: 'final_project',
  password: 'final_project',
  port: '5432',
});

export function query(text, params) {
  return pool.query(text, params);
}
