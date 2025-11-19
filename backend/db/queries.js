import { pool } from "../db/connection.js";

export const getAllTasks = async () => {
  const result = await pool.query("SELECT * FROM tasks")
  return result.rows
}

export const createTask = async ({ text, completed }) => {
  const result = await pool.query(`
    INSERT INTO tasks (text, completed)
    VALUES ($1, $2)
    RETURNING *`,
    [text, completed]
  )
  return result.rows[0]
}
export const deleteTask = async ({ id }) => {
  const result = await pool.query(`
    DELETE FROM tasks WHERE id = $1`, [id])
  return result.rows[0]
}

