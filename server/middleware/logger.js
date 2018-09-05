async function logger(ctx, next) {
  let startDate = new Date();
  next();
  console.log(`method: ${ctx.method} code: ${ctx.status} time:${new Date() -startDate}ms`);
}
