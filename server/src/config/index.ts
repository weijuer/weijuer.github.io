import { resolve } from '../utils/utils'

/**
 * 默认配置项
 */
export default {
  app: 'typescript-server',
  port: 3000,
  distPath: resolve('../../src/public'),
  viewPath: resolve('../../src/public/views'),
  db: 'mongodb://127.0.0.1:27017/weijuer',
}
