const express = require('express')
const cors = require('cors')
const process = require('node:process')
const tasks = require('./data/tasks.json')
const PORT = process.env.PORT ?? 3000

const app = express()

app.disable('x-powered-by')

app.use(express.json())
app.use(cors(
  {
    origin: (origin, callback) => {
      const ACCEPTED_ORIGINS = [
        "http://localhost:5173"
      ]
      if (ACCEPTED_ORIGINS.includes(origin)) {
        return callback(null, true)
      }
      if (!origin) {
        return callback(null, true)
      }
      return callback(new Error('Not allowed by CORS'))
    }
  }
))

// Sin express.json()
// -- Usado en POST, pero migrado para que sea un middleware que afecta a todos los verbos http
// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()
//   let body = ''
//   req.on('data', chunk => {
//     body += chunk.toString()
//   })
//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     // Mutar la request, porque no se puede responder
//     req.body = data
//     next()
//     // res.status(201).json(data)
//   })
// })

app.get('/tasks', (req, res) => {
  res.json(tasks)
})

app.post('/task', (req, res) => {
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send("<h1>404</h1>")
})

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
})
