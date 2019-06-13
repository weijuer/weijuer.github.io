import Vue from "vue";
import Vuex from "vuex";
import Home from "./modules/home";
import Blog from "./modules/blog";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Home,
    Blog
  }
});
