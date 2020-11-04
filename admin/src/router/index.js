import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/login.vue'
import { Page } from 'Layout'

const routes = [
  {
    path: '/home',
    name: 'admin-layout',
    component: Page,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/home.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/:pathMatch(.*)',
    name: 'not-found',
    component: () => import(/* webpackChunkName: "not-found" */ '../views/error/404.vue')
  }
]

// base
const baseUrl = process.env.NODE_ENV === 'production' ? '/admin' : ''

const router = createRouter({
  history: createWebHashHistory(baseUrl),
  routes
})

export default router
