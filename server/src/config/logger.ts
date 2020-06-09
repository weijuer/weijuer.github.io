import log4js from 'koa-log4'
import { resolve } from '../utils/utils'

// 日志配置
log4js.configure({
  appenders: {
    access: {
      type: 'dateFile',
      pattern: '-yyyy-MM-dd.log',
      filename: resolve('../logs/access.log'),
    },
    app: {
      type: 'dateFile',
      pattern: '-yyyy-MM-dd.log',
      filename: resolve('../logs/app.log'),
    },
    out: {
      type: 'console',
    },
  },
  categories: {
    default: { appenders: ['out'], level: 'info' },
    access: { appenders: ['access'], level: 'info' },
    application: { appenders: ['app'], level: 'WARN' },
  },
})

// 记录所有访问级别的日志
export const accessLogger = () => log4js.koaLogger(log4js.getLogger('access'))
// 记录所有应用级别的日志
export const logger = log4js.getLogger('application')
