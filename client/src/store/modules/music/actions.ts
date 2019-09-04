import { ActionTree } from "vuex";
import { search_music, get_music_detail } from "@/api/music";

const actions: ActionTree<any, any> = {
  /**
   * 音乐搜索
   * @param name
   */
  async SEARCH_MUSIC({ commit, state }, name: string) {
    try {
      // 调用获取登录用户信息接口
      console.time("VUEX_search_music");
      let res: any = await search_music(name);
      console.timeEnd("VUEX_search_music");

      // 结果处理
      if (res.code === 200) {
        // 处理数据
        commit("SEARCH_MUSIC", res.result);
      }
    } catch (err) {
      console.log(err);
    }
  },
  /**
   * 获取音乐详情
   * @param id
   */
  async GET_MUSIC_DETAIL({ commit, state }, id: string) {
    try {
      // 调用获取登录用户信息接口
      console.time("VUEX_get_music_detail");
      let res: any = await get_music_detail(id);
      console.timeEnd("VUEX_get_music_detail");

      // 结果处理
      if (res.code === 200) {
        // 处理数据
        commit("GET_MUSIC_DETAIL", res);
      }
    } catch (err) {
      console.log(err);
    }
  },
  /**
   * 获取歌曲
   * @param param0
   * @param song
   */
  GET_SONG({ commit, state }, song: W.IMusic) {
    commit("GET_SONG", song);
  }
};

export default actions;
