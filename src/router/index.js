import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

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
    component: resolve => require(['../views/pages/home'], resolve)
  }, {
    path: '/blog',
    name: 'blog',
    component: resolve => require(['../views/pages/blog'], resolve)
  }, {
    path: '/music',
    name: 'music',
    component: resolve => require(['../views/pages/music'], resolve)
  }, {
    path: '/about',
    name: 'about',
    component: resolve => require(['../views/pages/about'], resolve)
  }, {
    path: '*',
    name: 'error',
    component: resolve => require(['../views/pages/error'], resolve)
  }
];

// 创建 router 实例，然后传 `routes` 配置
export default new Router({
  // hash路由以#号分割，history则为常规url
  mode: 'hash',
  base: '/',
  linkActiveClass: 'active',
  scrollBehavior,
  routes
})
