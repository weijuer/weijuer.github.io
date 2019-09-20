import Vue from "vue";
import VueCompositionApi from '@vue/composition-api';
import Mobile from "./mobile";
import router from "@/router";
// 引入Vuex状态管理
import store from "@/store";
// 引入Vue-i18n国际化
import i18n from "@/i18n";
import "@/registerServiceWorker";

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);

new Vue({
  router,
  i18n,
  store,
  render: h => h(Mobile)
}).$mount("#mobile");
