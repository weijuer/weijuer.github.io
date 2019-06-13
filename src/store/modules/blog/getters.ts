import { GetterTree } from "vuex";

const getters: GetterTree<any, any> = {
  blogs: (state: any) => state.blogs
};

export default getters;
