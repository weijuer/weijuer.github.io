//express的路由中间件,引入等待从controller中添加路由
const router = require('express').Router()
//引入node的文件路径模块path和文件处理模块fs
const path = require('path')
const fs = require('fs')
//读取controller文件下的所有控制器，为了实现动态读取控制器，有空再研究更好的写法
const controllers = fs.readdirSync(path.resolve(__dirname, '../controller'))
// 遍历获取到的文件，动态添加express的路由信息：url、type、response即请求路径、请求方式、响应处理函数
controllers.forEach((file) => {
  // 获取到具体到控制器
  let controller = require('../controller/' + file)
  // 遍历控制器携带的信息
  for (let o in controller) {
    // 获取请求路径，未取到则取默认路径 为'/'+文件名(不包括后缀)
    let url = controller[o].url ? controller[o].url : ('/' + o)
    // 获取请求方式，未取到则取默认方式 为'get'
    let type = controller[o].type ? controller[o].type : 'get'
    // 响应处理函数，未取到则使用默认的处理
    let response = controller[o].response ? controller[o].response : (req, res) => {
      res.json({
        success: false,
        info: '没有处理响应的无效路由'
      })
    }
    // 设置路由信息
    router[type](url, response)
  }

  console.log('router:==>' + router);
})
// 使用动态设置好的路由
router.use(router)
// 输出路由
module.exports = router
