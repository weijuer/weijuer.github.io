// 引入所有views下的.vue文件
const modules = import.meta.glob('../views/*/*.vue')

console.log(modules)

/**
 * 根据文件夹生成路由
 */
export function generateRoutes() {
  // 递归获取 views 文件夹下的所有.vue文件
  const routes = []
  Object.keys(modules).forEach((key) => {
    const fileName = key.split('/')
    const name = `W${fileName.substring(0, 1).toUpperCase() + fileName.substring(1)}`
    routes.push({
      [name]: modules[key]?.default,
    })
  })
  console.table(routes)
  return routes
}

// 静态路由
const staticRoutes = [
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/learning',
    name: 'learning',
    component: () => import(/* webpackChunkName: "learning" */ '../views/Learning.vue'),
  },
  {
    path: '/examples',
    name: 'examples',
    component: () => import(/* webpackChunkName: "examples" */ '../views/Examples.vue'),
    children: [
      {
        path: 'virtualList',
        name: 'virtualList',
        component: () =>
          import(/* webpackChunkName: "virtualList" */ '../views/examples/virtualList.vue'),
      },
      {
        path: 'books',
        name: 'books',
        component: () => import(/* webpackChunkName: "books" */ '../views/examples/books.vue'),
      },
      {
        path: 'videos',
        name: 'videos',
        component: () => import(/* webpackChunkName: "videos" */ '../views/examples/videos.vue'),
      },
    ],
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import(/* webpackChunkName: "articles" */ '../views/Articles.vue'),
  },
  {
    path: '/article-detail',
    name: 'article-detail',
    component: () =>
      import(/* webpackChunkName: "article-detail" */ '../views/articles/article-detail.vue'),
  },
]

// 批量生成
const dynamicRoutes = generateRoutes()

export { staticRoutes, dynamicRoutes }
