import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

// 页面滚动配置
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return {x: 0, y: 0}
  }
};

// 懒加载路由
const routes = [
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    // 懒加载component
    component: () => import('../views/pages/home')
  }, {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/pages/blog/blog')
  } , {
    path: '/show-box',
    name: 'show-box',
    component: () => import('../views/pages/showBox')
  }, {
    path: '/music',
    name: 'music',
    component: () => import('../views/pages/music/music')
  }, {
    path: '/about',
    name: 'about',
    component: () => import('../views/pages/about')
  }, {
    path: '*',
    name: 'error',
    component: () => import('../views/pages/error')
  }
];

// 创建 router 实例，然后传 `routes` 配置
export default new Router({
  // hash路由以#号分割，history则为常规url
  mode: 'hash',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  scrollBehavior,
  routes
})
