import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

interface State {
  city: string;
  weather: any;
}

const state: State = {
  city: '',
  weather: {}
};

export default {
  state,
  actions,
  getters,
  mutations
};
