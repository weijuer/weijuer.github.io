const express = require('express');
const router = express.Router();

/* GET home page. */
// 因为是单页应用 所有请求都走/server/views/index.html
router.get('*', function (req, res) {
  res.sendFile('./views/index.html')
})

module.exports = router;
