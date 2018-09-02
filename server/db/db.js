const config = require('../config');
const mongoose = require('mongoose');

mongoose.connect(config.dev.mongodb.url, config.dev.user);

let db = mongoose.connection;
// 防止Mongoose: mpromise 错误
mongoose.Promise = Promise;

db.on('error', function(){
  console.log('数据库连接出错！');
});

db.on('open', function(){
  console.log('数据库连接成功！');
});
