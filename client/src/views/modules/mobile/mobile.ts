import Vue from "vue";
import Mobile from "./Mobile.vue";
import router from "@/router";
import store from "@/store";
import i18n from "@/i18n";
import "../registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(Mobile)
}).$mount("#mobile");
