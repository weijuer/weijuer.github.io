import type from './mutations-types'

const actions = {
  /**
   * 回到顶部
   * @param commit
   * @param state
   */
  [type.BACK_TO_TOP]({commit, state}) {
    // 1.scrollBy方法
    window.scrollBy(0, -100);
    // 2.定时滚动
    if (state.isPageScroll) {
      state.delay = setTimeout(() => {
        commit(type.SCROLL_TO)
      }, 10)
    }
  }
};

export default actions;
