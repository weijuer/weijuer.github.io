import { MutationTree } from "vuex";

const mutations: MutationTree<any> = {
  /**
   * 获取blogs信息
   * @param state
   * @param user
   * @constructor
   */
  GET_BLOGS(state, blogs): void {
    // 结果处理
    state.blogs = blogs;
  }
};

export default mutations;
