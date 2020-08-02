const koa = require('koa')
const Router = require('koa-router')

const app = new koa()
const router = new Router()
// 配置路由
// ctx包含了request和response等信息
router.get('/', async (ctx) => {
  ctx.body = '首页' // 返回数据， 相当于 原生里面的res.writeHead() res.send()

}).get('/news', async (ctx) =>{
  ctx.body = '这是一个新闻界面'
})

// 中间件
// express 写法
// app.use('/', function (req, res) {
//   res.send('返回数据')
// })
// app.use(async (ctx) => {
//   ctx.body = '你好 koa 2.x'
// })
app.use(router.routes()) // 启动路由
   .use(router.allowedMethods()) // 建议配置 
   /* 
    router.allowedMethods()用在了路由匹配router.routes()之后，所以在当所有路由中间件最后调用，此时根据ctx.status设置response响应头
   */
app.listen(3000)