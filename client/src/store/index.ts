import Vue from "vue";
import Vuex from "vuex";
import Home from "./modules/home";
import Article from "./modules/article";
import Music from "./modules/music";
import Widgets from "./modules/widgets";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Home,
    Article,
    Music,
    Widgets
  }
});
