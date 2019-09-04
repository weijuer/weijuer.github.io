import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

interface State {
  musics: Array<W.IMusic>;
  music: any;
  song: W.IMusic;
}

const state: State = {
  musics: [],
  music: {},
  song: {
    songid: 0,
    title: "",
    type: "",
    author: "",
    link: "",
    lrc: "",
    pic: "",
    url: ""
  }
};

export default {
  state,
  actions,
  getters,
  mutations
};
