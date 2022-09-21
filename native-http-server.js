const http = require('http')
const url = require('url')

const hostname = '127.0.0.1'
const port = 4000

const server = http.createServer((req, res) => {
  const urlObject = url.parse(req.url)
  const { pathname } = urlObject
  if (pathname === '/api/users') {
    const method = req.method
    if (method === 'GET') {
      const resData = [
        {
          id: 1,
          name: 'za-001'
        },
        {
          id: 2,
          name: 'za-002'
        }
      ]
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(resData))
      return
    }
  }

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello ZA Boy')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
