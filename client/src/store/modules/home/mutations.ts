import { MutationTree } from "vuex";
import navi from "@/utils/navi";

const mutations: MutationTree<any> = {
  /**
   * 页面滚动事件
   * @param state
   */
  PAGE_ON_SCROLL(state) {
    let scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    // 最新滚动距离
    state.scroll.newPosition = window.scrollY;
    // 页面发生滚动
    state.isPageScroll = scrollTop > 10;
    // 页面向上滚动
    state.isScrollUp = state.scroll.newPosition < state.scroll.lastPosition;
    // 上次滚动距离
    state.scroll.lastPosition = state.scroll.newPosition;
  },
  ToggleSideBar(state) {
    state.isSideBarActive = !state.isSideBarActive;
  },
  /**
   * 停止动画
   * @param state
   * @param isLoading
   * @constructor
   */
  CHANGE_LOADING(state, isLoading): void {
    state.isLoading = isLoading;
  },
  /**
   * 获取已登录用户信息
   * @param state
   * @param user
   * @constructor
   */
  GET_USER(state, user): void {
    // 结果处理
    state.isLogin = true;
    state.user = user;
  },
  /**
   * 退出
   * @param state
   * @constructor
   */
  LOGOUT(state): void {
    state.isLogin = false;
    state.user = null;
    state.token = null;
  },
  /**
   * 切换语言
   * @param state
   * @param lang
   */
  CHANGE_LANGUAGE(state, lang): void {
    state.language = lang;
  },
  /**
   * 获取浏览器信息
   * @param state
   * @constructor
   */
  GET_DEVICE(state): void {
    // 获取浏览器信息
    let device = navi.getDevice();
    state.device = device;
    state.language = device.language;
  }
};

export default mutations;
