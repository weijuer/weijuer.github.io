// initial state
const state = {
  isMini: false
}

// getters
const getters = {}

// actions
const actions = {
  toggleMini({ commit }) {
    commit('toggleMini')
  }
}

// mutations
const mutations = {
  toggleMini(state) {
    state.isMini = !state.isMini
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
