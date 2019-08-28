import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

interface State {
  musics: Array<W.IMusic>;
  music: any;
}

const state: State = {
  musics: [],
  music: {}
};

export default {
  state,
  actions,
  getters,
  mutations
};
