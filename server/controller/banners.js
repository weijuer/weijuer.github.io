import Banner from '../models/Banner.js';
const BodyParser = require('koa-bodyparser');

/**
 * 添加banner
 * @param ctx
 * @returns {Promise<void>}
 */
const addBanner = async(ctx) =>{
  const tagName = ctx.request.body.name;
  if (tagName === '') {
    ctx.throw(400, '标签名不能为空');
  }
  const banner = await Banner.findOne({ name: tagName }).catch(err => {
    ctx.throw(500, '服务器错误');
  });
  console.log(banner);
  if (banner !== null) {
    ctx.body = {
      success: true,
      banner: banner,
    };
    return;
  }

  const newBanner = new Banner({
    name: tagName,
  });
  const result = await newBanner.save().catch(err => {
    ctx.throw(500, '服务器错误');
  });
  ctx.body = {
    success: true,
    banner: result,
  };
};

/**
 * 获取bannerList
 * @param ctx
 * @returns {Promise<void>}
 */
const getAllBanners = async (ctx) => {
  const bannerList = await Banner.find().catch(err => {
    ctx.throw(500, '服务器内部错误');
  });
  ctx.body = {
    success: true,
    bannerList,
  };
};

/**
 * 编辑banner
 * @param ctx
 * @returns {Promise<void>}
 */
const editBanner = async (ctx) => {
  const id = ctx.params.id;
  const name = ctx.request.body.name;
  if (name === '') {
    ctx.throw(400, '标签名不能为空');
  }
  const banner = await Banner.findByIdAndUpdate(id, { $set: { name: name } }).catch(err => {
    if (err.name === 'CastError') {
      ctx.throw(400, 'id不存在');
    } else {
      ctx.throw(500, '服务器内部错误');
    }
  });
  ctx.body = {
    success: true,
  };
};

/**
 * 删除banner
 * @param ctx
 * @returns {Promise<void>}
 */
const delBanner = async (ctx) => {
  const id = ctx.params.id;
  const banner = await Banner.findByIdAndRemove(id).catch(err => {
    if (err.name === 'CastError') {
      ctx.throw(400, 'id不存在');
    } else {
      ctx.throw(500, '服务器内部错误');
    }
  });
  ctx.body = {
    success: true,
  };
};

module.exports = {
  addBanner,
  getAllBanners,
  editBanner,
  delBanner
};
