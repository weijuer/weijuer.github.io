import mongoose from 'mongoose';

// 声明Schema
const Schema = mongoose.Schema;
const bannerSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: String,
  author: String,
  imgSrc: String,
  describe: String,
  timestamp: String,
}, {versionKey: false});

bannerSchema.set('toJSON', { getters: true, virtuals: true });
bannerSchema.set('toObject', { getters: true, virtuals: true }); // 普通+虚拟

module.exports = mongoose.model('banner', bannerSchema);
