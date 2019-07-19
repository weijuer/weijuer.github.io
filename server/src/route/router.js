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
router.post('/getBlogs', koaBody(), (ctx, next) => {
  const url = 'https://www.infoq.cn/topic/Front-end';
  const options = {
    selector: '.article-list>.list>.list-item',
    target: [
      {
        key: 'title',
        selector: '.info .com-article-title'
      },
      {
        key: 'url',
        selector: '.info .favorite > a',
        text: false,
        attribute: true,
        sourceType: 'href'
      },
      {
        key: 'description',
        selector: '.info .summary'
      },
      {
        key: 'author',
        selector: '.info .editor > a.author'
      },
      {
        key: 'lastModified',
        selector: '.info .extra .date'
      }
    ]
  };

  return blog.get_blogs(url, options);
});

module.exports = router