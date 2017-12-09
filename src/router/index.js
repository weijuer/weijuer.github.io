// 引用vue
import Vue from 'vue'
// 引用路由
import Router from 'vue-router'
// 引用模板
import Layout from '@/components/Layout'

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
  mode: 'hash', // hash路由以#号分割，history则为常规url
  base: __dirname,
  linkActiveClass: 'link-active',
  scrollBehavior,
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    }
  ]
})
