// 引用vue
import Vue from 'vue'
// 引用路由
import Router from 'vue-router'

// 引用子页面模板
import home from '@/pages/home'
import blog from '@/pages/blog'
import about from '@/pages/about'

// 使用路由
Vue.use(Router)

// 页面滚动配置
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return {x: 0, y: 0}
  }
}

// 创建 router 实例，然后传 `routes` 配置
export default new Router({
  mode: 'history', // hash路由以#号分割，history则为常规url
  base: '/',
  linkActiveClass: 'wj-active',
  scrollBehavior,
  routes: [
    {
      path: '/',
      redirect: '/home',
    }, {
      path: '/home',
      name: 'home',
      component: home
    }, {
      path: '/blog',
      name: 'blog',
      component: blog
    }, {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
