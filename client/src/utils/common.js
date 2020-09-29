import path from 'path'

/**
 * 根据文件夹批量导出
 * @param {String} directory 文件路径
 */
export function importWidgets(directory) {
  // 获取directory文件夹下的所有.vue文件
  const files = require.context(directory, true, /\.vue$/)
  const modules = {}
  files.keys().forEach(key => {
    let name = path.basename(key, '.vue')
    let module = files(key).default || files(key)
    modules[name] = module
  })

  return modules
}
