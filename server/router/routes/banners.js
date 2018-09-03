import * as $ from '../../controller/BannerController.js';

export default async (router) => {
  router.post('/bannerPage', $.getAllBannersByPage(ctx))
    .get('/banners', $.getAllBanners(ctx))
    .get('/getBanner/:id', $.getBanner(ctx))
    .patch('/banners/:id', $.editBanner(ctx))
    .delete('/banners/:id', $.delBanner(ctx));
};
