import { GetterTree } from "vuex";

const getters: GetterTree<any, any> = {
  initNumber: (state: any) => state.initNumber,
  articles: (state: any) => state.articles
};

export default getters;
