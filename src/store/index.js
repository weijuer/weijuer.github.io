import Vue from 'vue'
import Vuex from 'vuex';
import state from './states';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';
import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules,
  strict: process.env.NODE_ENV === 'development'
});

export default store;
