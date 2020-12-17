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

/**
 * throttle (节流)
 * @param {*} fn
 * @param {*} time
 * @description 节流会稀释函数的执行频率
 */
export const throttle = (fn, time = 300) => {
  let flag = true

  return function() {
    if (!flag) return
    flag = false
    setTimeout(() => {
      fn.apply(this, arguments)
      flag = true
    }, time)
  }
}

/**
 * throttle (节流)
 * @param {*} fn
 * @param {*} wait
 */
export function throttle1(fn, wait) {
  var timer = null
  return function() {
    var context = this,
      args = arguments
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(context, args)
        timer = null
      }, wait)
    }
  }
}

/**
 * debounce（防抖）
 * @param {*} fn
 * @param {*} time
 * @description 触发高频时间后n秒内函数只会执行一次
 */
export const debounce = (fn, time = 300) => {
  let timeout = null

  return function() {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(this, arguments)
    }, time)
  }
}

/**
 * 重复字符
 * @param {*} str
 * @param {*} times
 */
export function repeat(str, times) {
  if (String.prototype.repeat) {
    return str.repeat(times)
  } else {
    return Array(times + 1).join(str)
  }
}
