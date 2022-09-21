const Application = require('./Application')
const Router = require('./router')

const app = new Application()
const router = new Router()

router.get('/', (ctx, next) => {
  console.log('Hello ZA Boy')
  next()
})

router.get('/', (ctx, next) => {
  ctx.body = 'Hello ZA Boy'
})

router.get('/api/users', (ctx) => {
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
  ctx.body = resData
})

app.use(router.routes())

const port = 4001
app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}/`)
})
