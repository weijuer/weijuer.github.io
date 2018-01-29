const express = require('express');
const router = express.Router();

// 没有挂载路径的中间件，通过该路由的每个请求都会执行该中间件
router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
})

router.get('/', function (req, res) {
  console.log("主页 GET 请求");
  res.send('Hello GET');
})

// 主页输出 "Hello World"
router.get('/hello', function (req, res) {
  console.log("主页 GET 请求");
  res.send('Hello GET');
  next();
})

module.exports = router;
