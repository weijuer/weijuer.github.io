import * as $ from '../../controller/banners.js';

export default async (router) => {
  router.post('/banners', $.addBanner)
    .get('/banners', $.getAllBanners)
    .patch('/banners/:id', $.editBanner)
    .delete('/banners/:id', $.delBanner);
};
