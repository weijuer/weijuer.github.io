import { MutationTree } from "vuex";

const mutations: MutationTree<any> = {
  /**
   * 获取搜索music列表
   * @param state
   * @param musics
   */
  SEARCH_MUSIC(state, musics): void {
    state.musics = musics;
  },
  GET_MUSIC_DETAIL(state, music): void {
    state.music = music;
  },
  GET_SONG(state, song): void {
    state.song = song;
  }
};

export default mutations;
