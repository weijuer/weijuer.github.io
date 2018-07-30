import type from './mutations-types'

const mutations = {
  /**
   * 页面滚动事件
   * @param state
   */
  [type.PAGE_ON_SCROLL](state) {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    let offsetTop = document.querySelector('.app-header').offsetTop;
    state.isPageScroll = scrollTop > offsetTop;
  },
  [type.SCROLL_TO](state){
    // 1.scrollBy方法
    window.scrollBy(0, -100);
  }
};

export default mutations;

