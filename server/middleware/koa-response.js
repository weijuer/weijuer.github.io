/**
 * @author weijuer
 * @date 2018/09/06
 * @description koa-response中间件
 */
const {success, error} = require('../util/koa2-response-util');

module.exports = async (ctx, next) => {
  ctx.success = success.bind(null, ctx);
  ctx.error = error.bind(null, ctx);
  await next();
};
