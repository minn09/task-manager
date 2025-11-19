// import { config } from '../config';
import pg from 'pg';
const { Pool } = pg;

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'todo_app',
  password: '123456789',
  port: '5432',
  // connectionString: (dbUrl).toString()
})
