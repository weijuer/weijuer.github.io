const Koa = require('koa');
const BodyParser = require('koa-bodyparser');
const onerror = require('koa-onerror');
const serve = require('koa-static');
const mongoose = require('mongoose');
const config = require('./config');
const api = require('./router');
// 日志
const log4js = require('log4js');
log4js.configure(config.dev.log4js.configure);
const logger = log4js.getLogger();

// response
const response = require('./middleware/koa-response');

// 1.连接数据库
// 防止Mongoose: promise 错误
mongoose.Promise = Promise;
// 连接mongodb
mongoose.connect(config.dev.mongodb.url, config.dev.mongodb.options);
let db = mongoose.connection;
db.on('error', (err) => {
  console.error.bind(console, 'connection error:');
  logger.info(`mongoose connection error: ${err}`);
});
db.once('open', () => {
  logger.info(`mongoose connected!`);
});

// 实例化
const app = new Koa();

// 优化错误处理信息
onerror(app);

// 获取请求参数中间件
const bodyParser = new BodyParser();
app.use(bodyParser);

// 加载response中间件
app.use(response);

// 加载路由中间件
app.use(api());

// 静态资源文件访问
app.use(serve('./client/static'));

// 监听端口
let port = process.env.PORT || config.dev.port || 3000;
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}!`);
});
