// 引用vue
import Vue from 'vue'
// 引用路由
import Router from 'vue-router'

// 直接引用子页面模板
// import home from '@/views/home'
// import blog from '@/views/blog'
// import about from '@/views/about'

// 懒加载其他页面
/* const Home = resolve => {
  import('@/views/home').then(module => {
    resolve(module)
  })
}

const Blog = resolve => {
  import('@/views/blog').then(module => {
    resolve(module)
  })
}

const About = resolve => {
  import('@/views/about').then(module => {
    resolve(module)
  })
} */

// 使用路由
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
    component: resolve => require(['../views/base/home'], resolve) // 懒加载
  }, {
    path: '/blog',
    name: 'blog',
    component: resolve => require(['../views/base/blog'], resolve),
    children: [
      {
        // 当 /blog/recent 匹配成功，
        path: 'recent',
        name: 'blog-detail',
        component: resolve => require(['../views/base/blog-detail'], resolve)
      }, {
        // 当 /blog/popular 匹配成功，
        path: 'popular',
        name: 'blog-detail',
        component: resolve => require(['../views/base/blog-detail'], resolve)
      }
    ]
  }, {
    // 当 /blog-detail/:id 匹配成功，
    path: '/blog-detail/:id',
    name: 'blog-detail',
    component: resolve => require(['../views/base/blog-detail'], resolve)
  }, {
    path: '/about',
    name: 'about',
    component: resolve => require(['../views/base/about'], resolve)
  }, {
    path: '*',
    name: 'error',
    component: resolve => require(['../views/base/error'], resolve)
  }
];

// 创建 router 实例，然后传 `routes` 配置
export default new Router({
  mode: 'hash', // hash路由以#号分割，history则为常规url
  base: '/',
  linkActiveClass: 'wj-active',
  scrollBehavior,
  routes
})
