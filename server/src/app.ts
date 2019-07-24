import 'reflect-metadata'
import { createKoaServer, useContainer } from 'routing-controllers'
import { Container } from "typedi"
import cors from 'koa2-cors'
import bodyParser from 'koa-bodyparser'
import views from 'koa-views'
import serve from 'koa-static'
import { distPath, viewPath } from './config'

/**
 * Setup routing-controllers to use typedi container.
 */
useContainer(Container);

const app = createKoaServer({
  controllers: [`${__dirname}/controllers/**/*{.js,.ts}`],
})

// 静态资源
app.use(serve(distPath));
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
app.use(views(viewPath, {
  map: { html: 'handlebars' }
}));

export default app