const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bannerSchema = new Schema({
  title: String,
  author: String,
  imgSrc: String,
  describe: String,
  date: {type: Date, default: Date.now}
});

const BannerModel = mongoose.model('banner', bannerSchema);

module.exports = BannerModel;
