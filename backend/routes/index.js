import { Router } from "express";
import { readJSON } from '../utils.js'
const tasks = readJSON("./data/tasks.json")

export const taskRouter = Router()

taskRouter.get('/', (req, res) => {
  res.json(tasks)
})

taskRouter.post('/', (req, res) => {
  res.status(201).json(req.body)
})
