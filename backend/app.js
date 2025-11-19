import express from 'express'
import { taskRouter } from './routes/index.js'
import { corsMiddleware } from './middlewares/cors.js'
import { errorHandler } from './middlewares/error.js'

export const app = express()
app.disable('x-powered-by')
app.use(express.json())
app.use(corsMiddleware())
app.use('/tasks', taskRouter)
app.use(errorHandler)
