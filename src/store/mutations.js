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
  /**
   * 回到顶部定时
   * @param state
   */
  [type.BACK_TO_TOP](state){
    // 1.scrollBy方法
    window.scrollBy(0, -100);
    // 2.定时滚动
    if (state.isPageScroll) {
      state.delay = setTimeout(() => {
        this.commit(type.BACK_TO_TOP)
      }, 10)
    }
  }
};

export default mutations;

