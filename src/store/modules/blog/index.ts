import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

interface State {
  blogs: Array<any>;
}

const state: State = {
  blogs: []
};

export default {
  state,
  actions,
  getters,
  mutations
};
