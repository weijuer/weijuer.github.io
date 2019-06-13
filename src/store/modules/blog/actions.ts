import { ActionTree } from "vuex";
import { get_blogs, add_blog, delete_blog, update_blog } from "@/api/blog";

const actions: ActionTree<any, any> = {
  /**
   * 获取blogs
   * @param param0
   */
  async GET_BLOGS({ commit, state }) {
    try {
      // 调用获取登录用户信息接口
      let res: Array<any> = await get_blogs();
      // 结果处理
      if (res) {
        // 处理数据
        commit("GET_BLOGS", res);
      }
    } catch (err) {
      console.log(err);
    }
  }
};

export default actions;
