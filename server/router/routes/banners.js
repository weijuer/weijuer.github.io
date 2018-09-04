const Banner = require('../../controller/BannerController');

export default async (router) => {
  router.post('/bannerPage', Banner.getAllBannersByPage)
    .get('/banners', Banner.getAllBanners)
    .get('/getBanner/:id', Banner.getBanner)
    .patch('/banners/:id', Banner.editBanner)
    .delete('/banners/:id', Banner.delBanner);
};
