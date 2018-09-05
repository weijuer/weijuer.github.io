const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bannerSchema = new Schema({
  title: String,
  author: String,
  imgSrc: String,
  describe: String,
  timestamp: String
});

// 第三个参数指定表名
const BannerModel = mongoose.model('banner', bannerSchema, 'banner');

module.exports = BannerModel;
