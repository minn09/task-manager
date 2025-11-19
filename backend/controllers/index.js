import { createTask, deleteTask, getAllTasks } from "../db/queries.js";
export const getTaskController = async (req, res) => {
  try {
    const tasks = await getAllTasks()
    res.json(tasks)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error obteniendo tareas' })
  }
}

export const createTaskController = async (req, res) => {
  try {
    const { text, completed = false } = req.body
    if (!text) return res.status(400).json({ error: "El campo 'text' es requerido" })
    const newTask = await createTask({ text, completed })
    res.status(201).json(newTask)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creando la tarea" })
  }
}

export const deleteTaskController = async (req, res) => {
  const { id } = req.params
  if (!id) {
    return res.status(400).json({ error: "El campo 'id' es requerido" })
  }
  try {
    const deleted = await deleteTask({ id })
    res.json({ message: "Tarea eliminada", deleted })
  } catch (error) {
    res.status(500).json({ error: 'Error eliminando la tarea' })
  }
}
