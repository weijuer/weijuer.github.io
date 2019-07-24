const router = require('koa-router')();
const koaBody = require('koa-body');
const blog = require('../api/blog');

router
  .get('/', async (ctx) => {
    // ctx.body = 'hello there!'
    await ctx.render('index.html', {
      title: 'Hello Koa'
    });
  })
  .get('/setCode', (ctx) => {
    var code = ctx.query.code;
    console.log(code);
    ctx.cookies.set("code", code);
    ctx.body = 'hello weijuer'
  })
  .get('/getCode', koaBody(), (ctx, next) => {
    var code = ctx.cookies.get("code");
    console.log(`code:===>${code}`);
    ctx.body = { code: code, message: "success" };
  });

/**
 * 获取blogs
 */
router.get('/getBlogs', koaBody(), (ctx, next) => {
  return blog.get_blogs();
});

module.exports = router