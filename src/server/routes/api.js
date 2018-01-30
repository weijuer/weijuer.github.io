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
  console.log('params.currentPage====>' + req.params.currentPage);
  console.log('params.pageSize====>' + req.params.pageSize);
  res.json({ blog: blogList})
});

// 匹配/api/hello
router.get('/hello', function (req, res) {
  console.log('Hello Time:', Date.now());
  res.send('Hello World!');
});

module.exports = router;
