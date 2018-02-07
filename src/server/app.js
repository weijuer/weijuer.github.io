// 用于获取路径
const path = require('path')
// 用于读写文件流
// const fs = require('fs')
// Express服务器入口文件
const express = require('express')
// serve-favicon中间件用于请求网站的icon用法如下
// express().use(favicon(__dirname + '/public/images/favicon.ico'))
const favicon = require('serve-favicon')
// morgan日志中间件，用于node的日志输出
const logger = require('morgan')
// 用于解析客户端请求的body中的内容,ajax提交的json数据,以及url的处理,内部使用JSON编码处理,url编码处理以及对于文件的上传处理.
const bodyParser = require('body-parser')
// 该属性之为一个对象的数组,其中存放了所有web浏览器发送的cookie,每一个cookie为cookies属性值数组中的一个对象.
const cookieParser = require('cookie-parser')
// compression 中间件用于压缩和处理静态内容
const compression = require('compression')

// 获取后端路由.我设置在根目录下的server文件,读取下面的index.js
// const routes = require('./routes/router')
// 用于管理配置的插件.统一管理后端服务端口和数据库连接地址等,默认配置在config目录下的default.js中
// const config = require('config-lite')

// 加载 debug 模块
const debug = require('debug')('app4');

// 实例化express对象,用于连接中间件
const app = express()

// 引入路由配置文件
const hello = require('./routes/hello')
const api = require('./routes/api')
// const index = require('./routes/index');

// 引入history模块
// const history = require('connect-history-api-fallback')
// 引入history模式让浏览器支持,
// app.use(history())

// 环境变量判断
if(app.get('env') === 'development') {
  // 前台client打包设置
  const webpack = require('webpack')
  // 正式环境时，下面两个模块不需要引入
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  // 编译前端client页面-配置文件
  const config = require('../../build/webpack.dev.conf')

  // 编译前端页面
  const compiler = webpack(config)
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {colors: true}
  }))
  app.use(webpackHotMiddleware(compiler))
} else {
  app.use(express.static('output'));
}

// 配置日志-等
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// 压缩静态文件
app.use(compression({ threshold: 0 }))
// 设置静态文件访问
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'views')))
// 设置favicon.ico访问
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// 使用路由
app.use('/hello', hello)
app.use('/api', api)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let err = new Error('Not Found!')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500)
  res.send(err.message)
})

// 监听端口
let port = process.env.PORT || 4000;
let server = app.listen(port, function() {
  let protocol = server.address().protocol
  let host = server.address().address
  let port = server.address().port

  console.log('Server listening at ====> %s://%s:%d', protocol, host, port);
})

export default app