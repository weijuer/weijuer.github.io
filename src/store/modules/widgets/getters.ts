import { GetterTree } from "vuex";

const getters: GetterTree<any, any> = {
  city: (state: any) => state.city,
  weather: (state: any) => state.weather
};

export default getters;
