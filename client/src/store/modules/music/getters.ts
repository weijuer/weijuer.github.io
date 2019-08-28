import { GetterTree } from "vuex";

const getters: GetterTree<any, any> = {
  musics: (state: any) => state.musics,
  music: (state: any) => state.music
};

export default getters;
