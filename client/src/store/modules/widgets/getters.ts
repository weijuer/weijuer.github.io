import { GetterTree } from "vuex";

const getters: GetterTree<any, any> = {
  city: (state: any) => state.city,
  weather: (state: any) => state.weather,
  news: (state: any) => state.news
};

export default getters;
