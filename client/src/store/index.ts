import Vue from "vue";
import Vuex from "vuex";
import Home from "./modules/home";
import Article from "./modules/article";
import Widgets from "./modules/widgets";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Home,
    Article,
    Widgets
  }
});
