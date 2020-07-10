import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/example',
    name: 'Example',
    component: () => import(/* webpackChunkName: "example" */ '../views/Example.vue'),
    children: [
      {
        path: 'virtualList',
        name: 'virtualList',
        component: () =>
          import(/* webpackChunkName: "virtualList" */ '../views/example/virtualList.vue')
      },
      {
        path: 'books',
        name: 'books',
        component: () => import(/* webpackChunkName: "books" */ '../views/example/books.vue')
      }
    ]
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import(/* webpackChunkName: "Article" */ '../views/Article.vue'),
    children: [
      {
        path: 'virtualList',
        name: 'virtualList',
        component: () =>
          import(/* webpackChunkName: "virtualList" */ '../views/example/virtualList.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
