import { ActionTree } from "vuex";
import { get_city, get_weather } from "@/api/weather";
import { get_covid_news } from "@/api/news";

const actions: ActionTree<any, any> = {
  /**
   * get city
   */
  async GET_CITY({ commit }) {
    try {
      let res: any = await get_city();

      if (res) {
        // 处理数据
        commit("GET_CITY", res.city);
      }
    } catch (error) {
      console.log(error);
    }
  },
  /**
   * 获取weather
   * @param city
   */
  async GET_WEATHER({ commit, state }, city: string) {
    try {
      // 调用获取登录用户信息接口
      console.time("VUEX_GET_WEATHER");
      let res = await get_weather(city);
      console.timeEnd("VUEX_GET_WEATHER");

      // 结果处理
      if (res) {
        // 处理数据
        commit("GET_WEATHER", res);
      }
    } catch (err) {
      console.log(err);
    }
  },

  /**
   * 获取news
   */
  async GET_NEWS({ commit, state }) {
    try {
      let res = await get_covid_news();
      // 结果处理
      if (res) {
        // 处理数据
        commit("GET_NEWS", res);
      }
    } catch (err) {
      console.log(err);
    }
  }
};

export default actions;
