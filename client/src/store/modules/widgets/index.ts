import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

interface State {
  city: string;
  weather: any;
  news: any;
}

const state: State = {
  city: "",
  weather: {
    aqi: {},
    basic: {
      city: "",
      update: {}
    },
    daily_forecast: {},
    hourly_forecast: {},
    now: {
      cond: {},
      tmp: "",
      wind: {}
    }
  },
  news: {
    trends: [],
    cities: [],
    provinces: [],
    iflow: "",
    levelBlock: [],
    exposeConfig: "",
    chinaInfectMapImg: "",
    total: {
      china: {}
    },
    statisEndTime: ""
  }
};

export default {
  state,
  actions,
  getters,
  mutations
};
