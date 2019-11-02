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
    id: 0,
    songid: 0,
    title: "",
    type: "",
    author: "",
    link: "",
    lrc: "",
    pic: "",
    url: "",
    lastModified: ""
  }
};

export default {
  state,
  actions,
  getters,
  mutations
};
