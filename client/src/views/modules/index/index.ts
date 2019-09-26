import Vue from "vue";
import Index from "./Index.vue";
import router from "@/router";
import store from "@/store";
import i18n from "@/i18n";
import "../registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(Index)
}).$mount("#index");
