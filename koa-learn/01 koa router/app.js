const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', async (ctx) => {
  ctx.body = '首页'
})
// 获取get传值
router.get('/news', async (ctx) =>{
  // 从ctx中读取get传值
  ctx.query // 获得的是对象， 用的最多的方式
  ctx.querystring // 获取的是原始字符串
  ctx.url 
  // 从ctx.request读取
  // ctx.request.url
  // ctx.request.query
  // ctx.request.querystring
  ctx.body = '新闻列表页面'
})
// 动态路由
router.get('/newscontent/:aid', async (ctx) =>{
  // 获取动态路由的传值
  console.log(ctx.params) // {aid: '456}
})
app.use(router.routes())
   .use(router.allowedMethods())

app.listen(3000)