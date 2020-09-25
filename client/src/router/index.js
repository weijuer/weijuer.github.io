import { createRouter, createWebHashHistory } from 'vue-router'
import { staticRoutes, dynamicRoutes } from 'Utils/routes'

const customRoutes = staticRoutes

// 日志
console.table(staticRoutes)
console.table(dynamicRoutes)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/home'
  },
  ...customRoutes
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
