import { ActionTree } from "vuex";
import { get_articles, initDB } from "@/api/article";

const actions: ActionTree<any, any> = {
  /**
   * init DB
   * @param param0 
   */
  async INIT_DB({commit}) {
    try {
      let res: any = await initDB();
      
      if(res) {
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

      console.log(`VUEX_articles:${res}`);
      // 结果处理
      if (res) {
        // 处理数据
        commit("GET_ARTICLES", res);
      }
    } catch (err) {
      console.log(err);
    }
  }
};

export default actions;
