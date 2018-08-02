const Koa = require('koa');
const app = new Koa();

/*// koa-router
const Router = require('koa-router');
// 父路由
const router = new Router();

// bodyparser: 该中间件用于post请求的数据
const BodyParser = require('koa-bodyparser');
const bodyParser = new BodyParser();

app.use(bodyParser);*/

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// logger
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// response
app.use(async ctx => {
  ctx.body = `你请求的地址为${ctx.request.url}`;
});

// 监听端口
let port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`The server is running at http://localhost: ${port}!`);
});
