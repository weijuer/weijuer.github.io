import Vue from 'vue'
import axios from 'axios'
import router from './router'
import store from './store'
import i18n from './i18n'
import highlight from './directives/highlight'

import App from './App.vue'

// 开启压缩调试
Vue.config.devtools = true

Vue.config.productionTip = false
// 将axios改写为Vue的原型属性$ajax，绑定到全局
Vue.prototype.$ajax = axios

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')