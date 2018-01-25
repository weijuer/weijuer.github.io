// Express服务器入口文件
const express = require('express')
// 用于读写文件流
// const fs = require('fs')
// 用于获取路径
const path = require('path')
// serve-favicon中间件用于请求网站的icon用法如下
// express().use(favicon(__dirname + '/public/images/favicon.ico'))
const favicon = require('serve-favicon')
// morgan中间件是日志中间件，用于node的日志输出
// 进阶用法见http://www.cnblogs.com/chyingp/p/node-learning-guide-express-morgan.html
const logger = require('morgan')
// 用于解析客户端请求的body中的内容,内部使用JSON编码处理,url编码处理以及对于文件的上传处理.
// bodyParse可以接受客户端ajax提交的json数据,以及url的处理,不使用这个中间件将导致无法接收客户端的json数据
const bodyParser = require('body-parser')
// 需要cnpm安装,cookieParser中间件用于获取web浏览器发送的cookie中的内容.
// 在使用了cookieParser中间件后,代表客户端请求的htto.IncomingMessage对象就具有了一个cookies属性
// 该属性之为一个对象的数组,其中存放了所有web浏览器发送的cookie,每一个cookie为cookies属性值数组中的一个对象.
const cookieParser = require('cookie-parser')
// 获取后端路由.我设置在根目录下的server文件,读取下面的index.js
const routes = require('./routes/router')
const webpack = require('webpack')

// compression 中间件用于压缩和处理静态内容
// 例子:app.use(express.static(path.join(__dirname, 'public')))
const compression = require('compression')

// 引入history模块
const history = require('connect-history-api-fallback')

// 正式环境时，下面两个模块不需要引入
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('../../build/webpack.dev.conf')

const index = require('./routes/index');

// 实例化express对象,用于连接中间件
const app = express()

// view engine setup
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'jade')

// 引入history模式让浏览器支持
app.use(history())

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

/*const compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: { colors: true }
}))
app.use(webpackHotMiddleware(compiler))*/


// 压缩静态文件
app.use(compression({ threshold: 0 }))
app.use(express.static(path.join(__dirname, 'views')))
// 使用路由
app.use('/api', routes)
app.use('*', index);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
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
app.listen(port, function() {
  console.log('Server listening at port:===> %d', port)
})

export default app
