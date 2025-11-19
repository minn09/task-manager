import { Router } from "express";
import { createTaskController, deleteTaskController, getTaskController } from "../controllers/index.js";
export const taskRouter = Router()

taskRouter.get('/', getTaskController)
taskRouter.post('/', createTaskController)
taskRouter.delete('/:id', deleteTaskController)
