export default {
  namespaced: true,
  state: {
    isMini: false
  },
  mutations: {
    toggleMini(state) {
      state.isMini = !state.isMini
    }
  },
  actions: {
    toggleMini({ commit }) {
      commit('toggleMini')
    }
  }
}
