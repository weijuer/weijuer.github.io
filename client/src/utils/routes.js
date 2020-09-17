/**
 * 生成路由
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
    let filePath = files.resolve(key)
    let componentPath = `/* webpackChunkName: "${name}" */ ${filePath}`

    routes.push({
      path: `/${name}`,
      name: name,
      component: () => import(componentPath)
    })
  })

  console.table(routes)
  return routes
}

const generator = generateRoutes()

export default generator
