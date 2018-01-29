const express = require('express');
const router = express.Router();

// 加载本地数据文件
let appData = require('../../client/static/assets/global/data/blog.json');
let blogList = appData.blogList // 获取对应的本地数据

/* api */
// 接口返回json数据，上面配置的数据seller就赋值给data请求后调用
router.get('/api/blogList', (req, res) => {
  console.log('Time:', Date.now());
  res.json({
    errno: 0,
    data: blogList
  })
});

module.exports = router;
