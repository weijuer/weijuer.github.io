// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入Vue-i18n国际化
import VueI18n from 'vue-i18n'
// 引入axios(HTTP工具)
import axios from 'axios'
// 引入Vuex状态管理配置文件
import store from './store/index'

// 开启debug模式
Vue.config.debug = true;
// 关闭生产模式下给出的提示
Vue.config.productionTip = false;
// 将axios改写为Vue的原型属性$ajax，绑定到全局
Vue.prototype.$ajax = axios;

// 通过插件的形式挂载VueI18n
Vue.use(VueI18n);
// 定义默认语言及语言包路径
const i18n = new VueI18n({
  locale: 'zh-CN', // 语言标识
  messages: {
    'zh-CN': require('./assets/global/i18n/app-zh-CN'), // 中文语言包
    'en-US': require('./assets/global/i18n/app-en-US') // 英文语言包
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n, // 国际化语言包
  router, // 注入路由配置
  store, // 注入状态管理配置
  components: { App },
  template: '<App/>'
});
