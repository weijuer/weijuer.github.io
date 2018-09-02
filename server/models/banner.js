import mongoose from 'mongoose';

// 声明Schema
const Schema = mongoose.Schema;
const bannerSchema = new Schema({
  id: String,
  desc: String,
  imgSrc: String,
  status: String,
  createTime: String,
}, {versionKey: false});

module.exports = mongoose.model('banner', bannerSchema);
