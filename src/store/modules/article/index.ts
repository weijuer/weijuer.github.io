import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

interface State {
  initNumber: number;
  articles: Array<any>;
}

const state: State = {
  initNumber: 0,
  articles: []
};

export default {
  state,
  actions,
  getters,
  mutations
};
