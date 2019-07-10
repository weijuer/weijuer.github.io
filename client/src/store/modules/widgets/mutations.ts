import { MutationTree } from "vuex";

const mutations: MutationTree<any> = {
  GET_CITY(state, city): void {
    state.city = city;
  },
  GET_WEATHER(state, weather): void {
    state.weather = weather;
  }
};

export default mutations;
