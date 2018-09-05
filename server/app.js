const Koa = require('koa');
const BodyParser = require('koa-bodyparser');
const onerror = require('koa-onerror');
const serve = require('koa-static');
const mongoose = require('mongoose');
const config = require('./config');
const api = require('./router');

// 防止Mongoose: promise 错误
mongoose.Promise = Promise;
// 连接mongodb
mongoose.connect(config.dev.default.mongodb.url, config.dev.default.mongodb.options);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`we're connected!`);
});

// 实例化
const app = new Koa();

// 错误信息
onerror(app);

// 获取请求参数中间件
const bodyParser = new BodyParser();
app.use(bodyParser);

// 加载路由
app.use(api());

// 静态资源文件访问
app.use(serve('./client/static'));

// 监听端口
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}!`);
});
