const bannerService = require('../service/BannerService');

class BannerController {

  /**
   * 获取单条记录
   * @param ctx
   * @returns {Promise<void>}
   */
  static async getBanner(ctx) {
    const id = ctx.params.id;
    console.log('id:===>' + id);
    if (id === '') {
      ctx.throw(400, 'id不能为空');
    }

    const banner = await bannerService.findById(id).catch(err => {
      if (err.name === 'CastError') {
        ctx.throw(400, 'id不存在');
      } else {
        ctx.throw(500, '服务器内部错误');
      }
    });

    console.log('banner' + banner);
    ctx.success({banner});
  }

  /**
   * 分页获取banner
   * @param ctx
   * @returns {Promise<void>}
   */
  static async getAllBannersByPage(ctx) {
    let opt = ctx.request.query;
    let {index = 1, limit = 10, ...condition} = opt;

    let bannerPage = await bannerService.getAllByPage(condition, Number(index), Number(limit));
    console.log(bannerPage);
    ctx.success({bannerPage});
  }

  /**
   * 获取bannerList
   * @param ctx
   * @returns {Promise<void>}
   */
  static async getAllBanners(ctx) {
    let bannerList = await bannerService.getAll();
    console.log(bannerList);
    ctx.success({bannerList});
  }

  /**
   * 编辑banner
   * @param ctx
   * @returns {Promise<void>}
   */
  static async editBanner(ctx) {
    let opt = ctx.request.query;
    let {...banner} = opt;

    await bannerService.update(banner);
    ctx.success({success: true});
  }

  /**
   * 删除banner
   * @param ctx
   * @returns {Promise<void>}
   */
  static async delBanner(ctx) {
    const id = ctx.params.id;
    const banner = await bannerService.remove(id).catch(err => {
      if (err.name === 'CastError') {
        ctx.throw(400, 'id不存在');
      } else {
        ctx.throw(500, '服务器内部错误');
      }
    });
    ctx.success({success: true});
  }

}

module.exports = BannerController;
