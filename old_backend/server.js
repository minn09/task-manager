const http = require('node:http')
const tasksJSON = require('../backend/data/tasks.json')
const PORT = 3000

const processRequest = ((req, res) => {
  const { method, url } = req

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  switch (method) {
    case 'GET':
      switch (url) {
        case '/tasks':
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(tasksJSON))
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end("<h1>404</h1>")
      }

    case 'POST':
      switch (url) {
        case "/task": {
          let body = ''
          req.on('data', chunk => {
            body += chunk.toString()
          })
          req.on('end', () => {
            const data = JSON.parse(body)
            res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })
            data.timestamp = Date.now()
            res.end(JSON.stringify(data))
          })
          break
        }
      }
  }
})

const server = http.createServer(processRequest);

server.listen(PORT, () => {
  console.log(`Servidor ejecutandose en el puerto ${PORT}`);
})
