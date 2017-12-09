// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引用vue
import Vue from 'vue'
// 入口文件为 src/App.vue 文件
import App from './App'
// 引入路由配置文件
import router from './router'

// 引入HTTP工具axios
import axios from 'axios'
// 将axios改写为Vue的原型属性$ajax，绑定到全局
Vue.prototype.$ajax = axios

// 关闭生产模式下给出的提示
Vue.config.productionTip = false

/* eslint-disable no-new */
// 创建一个 Vue 的根实例
new Vue({
  el: '#app',
  router, // 注入路由配置
  template: '<App/>', // 配置根模板 即打开页面显示那个组件
  components: { App }
})
