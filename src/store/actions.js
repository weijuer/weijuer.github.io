import type from './mutations-types'

const actions = {
  /**
   * 回到顶部
   * @param commit
   * @param state
   */
  [type.BACK_TO_TOP]({commit, state}) {
    commit(type.BACK_TO_TOP)
  }
};

export default actions;
