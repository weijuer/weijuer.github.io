import Vue from "vue";
import Vuex from "vuex";
import Home from "./modules/home";
import Article from "./modules/article";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Home,
    Article
  }
});
