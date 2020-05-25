import Vuex from "vuex";
import Home from "./modules/home";
import Article from "./modules/article";
import Music from "./modules/music";
import Widgets from "./modules/widgets";

export default Vuex.createStore({
  modules: {
    Home,
    Article,
    Music,
    Widgets
  }
});
