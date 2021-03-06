import { ActionTree } from "vuex";
import {
  search_music,
  get_musics_by_title,
  clear_music,
  get_music_detail
} from "@/api/music";

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
   * 搜索本地音乐
   * @param title
   */
  async SEARCH_LOCAL_MUSIC({ commit, state }, title: string) {
    try {
      // 调用获取登录用户信息接口
      console.time("VUEX_search_local_music");
      let res: any = await get_musics_by_title(title);
      console.timeEnd("VUEX_search_local_music");

      // 结果处理
      commit("SEARCH_LOCAL_MUSIC", res);
    } catch (err) {
      console.log(err);
    }
  },
  /**
   * 清空音乐搜索记录
   * @param name
   */
  async ClEAR_MUSIC({ commit, state }) {
    try {
      // 调用获取登录用户信息接口
      console.time("VUEX_clear_music");
      await clear_music();
      console.timeEnd("VUEX_clear_music");
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
