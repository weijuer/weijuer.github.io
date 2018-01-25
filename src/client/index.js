// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引用vue
import Vue from 'vue'
// 入口文件为 src/App.vue 文件
import App from './App'
// 引入路由配置文件
import router from './router/index'
// 引入Vue-i18n国际化
import VueI18n from 'vue-i18n'
// 引入HTTP工具axios
import axios from 'axios'

// 开启debug模式
Vue.config.debug = true
// 关闭生产模式下给出的提示
Vue.config.productionTip = false
// 将axios改写为Vue的原型属性$ajax，绑定到全局
Vue.prototype.$ajax = axios

// 通过插件的形式挂载VueI18n
Vue.use(VueI18n)
// 定义默认语言及语言包路径
const i18n = new VueI18n({
  locale: 'zh-CN',    // 语言标识
  messages: {
    'zh-CN': require('./static/assets/global/i18n/app-zh-CN'),   // 中文语言包
    'en-US': require('./static/assets/global/i18n/app-en-US')    // 英文语言包
  }
})

// 关键在这里，设置afterEach钩子函数
router.afterEach((to, from, next) => {
  document.title = to.name
})

/* eslint-disable no-new */
// 创建一个 Vue 的根实例
new Vue({
  el: '#app',
  i18n, // 国际化语言包
  router, // 注入路由配置
  template: '<App/>', // 配置根模板 即打开页面显示那个组件
  components: { App },
  data: {
    // 空的实例放到根组件下，所有的子组件都能调用
    Bus: new Vue()
  }
})
