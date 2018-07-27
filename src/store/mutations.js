import type from './mutations-types'

const mutations = {
  [type.PAGE_ON_SCROLL] (state) {
    state.isPageScroll = !state.isPageScroll;
  }
};

export default mutations;

