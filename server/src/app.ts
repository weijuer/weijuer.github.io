import 'reflect-metadata'
import { useKoaServer, useContainer } from 'routing-controllers'
import { Container } from 'typedi'
import Koa from 'koa'
import cors from 'koa2-cors'
import bodyParser from 'koa-bodyparser'
import views from 'koa-views'
import serve from 'koa-static'
import mongoose from 'mongoose'
import config from './config'
import { logger, accessLogger } from './config/logger'
import { testJob } from './jobs/blog-job'

const app: Koa<any, {}> = new Koa()
/**
 * Setup routing-controllers to use typedi container.
 */
useContainer(Container)

// 加载路由
useKoaServer(app, {
  controllers: [`${__dirname}/controllers/**/*{.js,.ts}`],
})

// 日志输出
app.use(accessLogger())

// 静态资源
app.use(serve(config.distPath))

// koaBody
app.use(bodyParser())

// cors跨域
app.use(
  cors({
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
  })
)

// 模板引擎 handlebars
app.use(
  views(config.viewPath, {
    map: { html: 'handlebars' },
  })
)

// mongoose
mongoose.connect(config.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// 启动
app.listen(config.port, () => console.log(`Server run as http://127.0.0.1:${config.port}`))

// 任务执行
testJob()

// 捕获全局状态下的error
app.on('error', (err) => {
  logger.error(err)
})

// 捕获程序执行异常
process.on('uncaughtException', console.error)
