// 引用vue
import Vue from 'vue'
// 引用路由
import Router from 'vue-router'

// 直接引用子页面模板
// import home from '@/pages/home'
// import blog from '@/pages/blog'
// import about from '@/pages/about'

// 懒加载其他页面
/* const Home = resolve => {
  import('@/pages/home').then(module => {
    resolve(module)
  })
}

const Blog = resolve => {
  import('@/pages/blog').then(module => {
    resolve(module)
  })
}

const About = resolve => {
  import('@/pages/about').then(module => {
    resolve(module)
  })
} */

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

// 懒加载路由
const routes = [
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: resolve => require(['@/pages/home'], resolve) // 懒加载
  }, {
    path: '/blog',
    name: 'blog',
    component: resolve => require(['@/pages/blog'], resolve)
  }, {
    path: '/about',
    name: 'about',
    component: resolve => require(['@/pages/about'], resolve)
  }
]

// 创建 router 实例，然后传 `routes` 配置
export default new Router({
  mode: 'history', // hash路由以#号分割，history则为常规url
  base: '/',
  linkActiveClass: 'wj-active',
  scrollBehavior,
  routes
})
