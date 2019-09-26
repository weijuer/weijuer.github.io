import Vue from "vue";
import Web from "./Web.vue";
import router from "@/router";
import store from "@/store";
import i18n from "@/i18n";
import "../registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(Web)
}).$mount("#web");
