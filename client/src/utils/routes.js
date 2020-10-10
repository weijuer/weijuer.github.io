/**
 * 根据文件夹生成路由
 */
export function generateRoutes() {
  // 递归获取 views 文件夹下的所有.vue文件
  const files = require.context('@/views', true, /\.vue$/)

  console.log('files', files)

  const routes = []
  files.keys().forEach(key => {
    console.log('key', key)
    let module = files(key).default
    let name = module.name
    // 文件路径
    // let filePath = files.resolve(key)
    let filePath = `${key.substr(2)}`

    routes.push({
      path: `/${name}`,
      name: name,
      component: () => import(/* webpackChunkName: "[name]" */ `Views/${filePath}`)
      // component: () => import(`/* webpackChunkName: "${name}" */ Views/${filePath}`)
      // component: module
      // component: resolve => require([`${filePath}`], resolve)
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
    component: () => import(/* webpackChunkName: "home" */ '../views/home.vue')
  },
  {
    path: '/learning',
    name: 'learning',
    component: () => import(/* webpackChunkName: "learning" */ '../views/learning.vue')
  },
  {
    path: '/examples',
    name: 'examples',
    component: () => import(/* webpackChunkName: "examples" */ '../views/examples.vue'),
    children: [
      {
        path: 'virtualList',
        name: 'virtualList',
        component: () =>
          import(/* webpackChunkName: "virtualList" */ '../views/examples/virtualList.vue')
      },
      {
        path: 'books',
        name: 'books',
        component: () => import(/* webpackChunkName: "books" */ '../views/examples/books.vue')
      },
      {
        path: 'videos',
        name: 'videos',
        component: () => import(/* webpackChunkName: "videos" */ '../views/examples/videos.vue')
      }
    ]
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import(/* webpackChunkName: "articles" */ '../views/articles.vue')
  },
  {
    path: '/article-detail',
    name: 'article-detail',
    component: () =>
      import(/* webpackChunkName: "article-detail" */ '../views/articles/article-detail.vue')
  }
]

// 批量生成
const dynamicRoutes = generateRoutes()

export { staticRoutes, dynamicRoutes }
