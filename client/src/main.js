import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Pin, LoadMore } from './directives'

// 创建Vue应用，
const app = createApp(App)
// 注册插件
app.use(router)
app.use(store)
// 注册全局指令
app.directive('pin', Pin)
app.directive('loadmore', LoadMore)
// 挂载Vue应用
app.mount('#app')
