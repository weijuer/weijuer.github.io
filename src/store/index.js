import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import state from './states';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;
