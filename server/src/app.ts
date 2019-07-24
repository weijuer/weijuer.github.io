import 'reflect-metadata'
import { createKoaServer } from 'routing-controllers'
import cors from 'koa2-cors'
import koaBody from 'koa-bodyparser'
import koaViews from 'koa-views'
import statics from 'koa-static'
import { distPath, viewPath } from './config'

const app = createKoaServer({
  controllers: [`${__dirname}/controllers/**/*{.js,.ts}`],
})

// 静态资源
app.use(statics(distPath));
// koaBody
app.use(koaBody());

// cors跨域
app.use(cors({
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

// 模板引擎
app.use(koaViews(viewPath, {
  map: { html: 'ejs' }
}));

export default app