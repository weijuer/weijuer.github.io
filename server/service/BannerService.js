const BannerModel = require('../models/banner');

class BannerService {

  static async add(banner) {
    let bannerModel = new BannerModel(banner);
    await banner.save()
  }

  static async findById(id) {
    return await BannerModel.findOne({id: id});
  }

  static async getAll() {
    return await BannerModel.find({})
  }

  static async getAllByPage(condition, index, limit) {
    let banners = await BannerModel.find(condition, '_id author').skip((index - 1) * limit).sort({_id: -1}).limit(limit);
    let count = await BannerModel.count(condition);
    return {banners, page: {index, limit, count}}
  }

  static async update(banner) {
    return await BannerModel.findByIdAndUpdate(id, {$set: {name: name}});
  }

  static async remove(banner) {
    return await BannerModel.findByIdAndRemove(id);
  }

}

module.exports = BannerService;
