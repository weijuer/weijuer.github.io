import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isToggle: false,
    searchText: ''
  },
  mutations: {
    searchToggle (state) {
      state.isToggle = !state.isToggle
    }
  },
  actions: {}
})

export default store
