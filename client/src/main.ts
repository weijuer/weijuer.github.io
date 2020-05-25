import Vue, { createApp, h } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import i18n from '@/i18n'
import './registerServiceWorker'

// echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

createApp({
  i18n,
  render: () => h(App)
})
  .use(router)
  .use(store)
  .mount('#app')
