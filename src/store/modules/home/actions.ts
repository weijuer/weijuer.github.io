import { ActionTree } from "vuex";
import Cookies from "js-cookie";
import i18n from "@/i18n";
import { get_auth_user, logout } from "@/api/auth";

const actions: ActionTree<any, any> = {
  /**
   * 回到顶部
   * @param dispatch 分发action
   * @param state
   */
  BACK_TO_TOP({ dispatch, state }) {
    // 1.scrollBy方法
    window.scrollBy(0, -30);
    // 2.定时滚动
    window.requestAnimationFrame(() => {
      if (state.isPageScroll) {
        dispatch("BACK_TO_TOP");
      }
    });
  },
  ToggleSideBar({ commit }) {
    commit("TOGGLE_SIDEBAR");
  },
  // 停止动画
  CHANGE_LOADING({ commit, state }, isLoading) {
    commit("CHANGE_LOADING", isLoading);
  },
  // 获取登录用户信息
  async GET_USER({ commit, state }) {
    try {
      // 调用获取登录用户信息接口
      let res: any = await get_auth_user();
      // 结果处理
      if (res.success) {
        // 处理数据
        commit("GET_USER", res.data);
      }
    } catch (err) {
      console.log(err);
    }
  },
  // 登出
  async LOGOUT({ commit, state }) {
    try {
      // 获取当前登录用户
      let user: any = state.user;

      // 调用server-sso登出接口
      if (user) {
        await logout({
          userId: user.userId
        });
      }
      // 结果处理
      commit("LOGOUT");
    } catch (err) {
      console.log(err);
    }
  },
  // 手动切换语言
  CHANGE_LANGUAGE({ commit, state }, lang) {
    // 1.切换i18n.locale语言为lang
    i18n.locale = lang;
    // 2.本地存储用户切换语言
    Cookies.set("userLanguage", lang);
    // 3.更改语言状态
    commit("CHANGE_LANGUAGE", lang);
  },
  // 获取浏览器信息
  GET_DEVICE({ commit, state }) {
    commit("GET_DEVICE");
  }
};

export default actions;
