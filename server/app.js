/*服务端*/
const views = require('koa-views');
const cors = require('koa2-cors');
const statics = require('koa-static');
const path = require("path");
const app = require('./src/utils/socket');
const router = require('./src/route/router');
const port = process.env.PORT || 3000;

const resolve = (dir) => {
  return path.join(__dirname, dir);
};

// 静态资源
app.use(statics(
  resolve('./public')
));

// cors
app.use(cors({
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

// 模板引擎
app.use(views(resolve('./public/views'), {
  map: { html: 'ejs' }
}));

// 路由
app.use(router.routes())
  .use(router.allowedMethods());

// 服务启动
app.listen(port, () => {
  console.log(`app started at http://127.0.0.1:${port} !!`)
});