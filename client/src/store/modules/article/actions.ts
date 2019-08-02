import { ActionTree } from "vuex";
import { get_articles, initDB, get_article } from "@/api/article";

const actions: ActionTree<any, any> = {
  /**
   * init DB
   * @param param0
   */
  async INIT_DB({ commit }) {
    try {
      let res: any = await initDB();

      if (res) {
        // 处理数据
        commit("INIT_DB", res);
      }
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * 获取articles
   * @param param0
   */
  async GET_ARTICLES({ commit, state }) {
    try {
      // 调用获取登录用户信息接口
      console.time("VUEX_articles");
      let res: Array<any> = await get_articles();
      console.timeEnd("VUEX_articles");

      console.log(`VUEX_articles:${res.length} articles`);
      // 结果处理
      if (res) {
        // 处理数据
        commit("GET_ARTICLES", res);
        // 1.成功请求到数据，清除加载中动画
        commit("CHANGE_LOADING", false);
      }
    } catch (err) {
      console.log(err);
    }
  },
  /**
   * 获取article
   * @param param0
   */
  async GET_ARTICLE({ commit, state }, id: number) {
    try {
      // 调用获取登录用户信息接口
      console.time("VUEX_article");
      let res: W.IArticle = await get_article(id);
      console.timeEnd("VUEX_article");

      // 结果处理
      if (res) {
        // 处理数据
        commit("GET_ARTICLE", res);
      }
    } catch (err) {
      console.log(err);
    }
  }
};

export default actions;
