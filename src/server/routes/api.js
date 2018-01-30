const express = require('express');
const router = express.Router();

// 加载本地数据文件
let appData = require('../../client/static/assets/global/data/blog.json');
let blogList = appData.blogList // 获取对应的本地数据

/* api */
// 匹配/api
router.get('/', function (req, res) {
  console.log('Api Time:', Date.now());
  res.send('Hello Api!');
});

// 匹配/api/blogList, 返回json数据
router.post('/blogList', (req, res) => {
  console.log('BlogList Time:', Date.now());
  console.log('get请求参数对象 :', req.query);
  console.log('post请求参数对象 :', req.body);

  res.json({blog: blogList})
});

// 匹配/api/hello
router.get('/hello', function (req, res) {
  console.log('Hello Time:', Date.now());
  res.send('Hello World!');
});

// 匹配/api/blog/:name, 获取url参数对象
router.get('/blog/:name', function (req, res, next) {
  console.log('url参数对象 :', req.params);
  console.log('get请求参数对象 :', req.query);
  console.log('post请求参数对象 :', req.body);
  console.log('q的值为 :', req.params.name);

  res.send('blog name:' + req.params.name);
});

// 匹配/api/blog?name=xiao ming， 获取get请求参数对象
router.get('/blog', function (req, res, next) {
  console.log('url参数对象 :', req.params);
  console.log('get请求参数对象 :', req.query);
  console.log('post请求参数对象 :', req.body);
  console.log('q的值为 :', req.query.name);

  res.send('blog name:' + req.query.name); // blog name:xiaoming
});

// 匹配/api/blog?name=xiao ming， 获取post请求参数对象
router.post('/blog', function (req, res, next) {
  console.log('url参数对象 :', req.params);
  console.log('get请求参数对象 :', req.query);
  console.log('post请求参数对象 :', req.body);
  console.log('q的值为 :', req.body.name);

  res.send('blog name:' + req.body.name); // blog name:xiaoming
});

module.exports = router;
