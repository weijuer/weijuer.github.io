import { MutationTree } from "vuex";

const mutations: MutationTree<any> = {
  /**
   * 获取articles列表
   * @param state
   * @param articles
   */
  GET_ARTICLES(state, articles): void {
    // 结果处理
    state.articles = articles;
  },
  GET_ARTICLE(state, article): void {
    // 结果处理
    state.article = article;
  },
  INIT_DB(state, number): void {
    // 结果处理
    state.initNumber = number;
  }
};

export default mutations;
