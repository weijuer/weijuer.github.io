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
    name: 'Examples',
    component: () => import(/* webpackChunkName: "example" */ '../views/Examples.vue'),
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
      },
      {
        path: 'videos',
        name: 'videos',
        component: () => import(/* webpackChunkName: "videos" */ '../views/example/videos.vue')
      }
    ]
  },
  {
    path: '/articles',
    name: 'Articles',
    component: () => import(/* webpackChunkName: "Articles" */ '../views/Articles.vue')
  },
  {
    path: '/article-detail',
    name: 'article-detail',
    component: () =>
      import(/* webpackChunkName: "article-detail" */ '../views/article/article-detail.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
