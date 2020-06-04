import 'reflect-metadata'
import { useKoaServer, useContainer } from 'routing-controllers'
import { Container } from "typedi"
import Koa from 'koa'
import cors from 'koa2-cors'
import bodyParser from 'koa-bodyparser'
import views from 'koa-views'
import serve from 'koa-static'
import mongoose from 'mongoose'
import config from './config'

const app: Koa<any, {}> = new Koa()
/**
 * Setup routing-controllers to use typedi container.
 */
useContainer(Container);

useKoaServer(app, {
  controllers: [`${__dirname}/controllers/**/*{.js,.ts}`],
})

// 静态资源
app.use(serve(config.distPath));
// koaBody
app.use(bodyParser());

// cors跨域
app.use(cors({
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

// 模板引擎 handlebars
app.use(views(config.viewPath, {
  map: { html: 'handlebars' }
}));

// mongoose
mongoose.connect(config.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.listen(config.port, () => console.log(`Server run as http://127.0.0.1:${config.port}`))
process.on('uncaughtException', console.error)