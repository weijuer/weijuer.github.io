import axios from "axios";
import qs from "qs";
import store from "../store";

/****** 创建axios实例 ******/
const service = axios.create({
  // 允许携带cookie: true, 允许跨域：false
  withCredentials: false,
  // api的base_url
  baseURL: process.env.BASE_URL,
  // 请求超时时间
  timeout: 5000
});

/****** request拦截器==>对请求参数做处理 ******/
service.interceptors.request.use(
  (config: any): object => {
    // 1.请求前，加载动画
    store.commit("CHANGE_LOADING", true);

    // 2.请求头中添加token信息
    if (store.state.token) {
      config.headers.Authorization = `token ${store.state.token}`;
    }

    // 3.请求参数处理
    config.method === "post"
      ? (config.data = qs.stringify({ ...config.data }))
      : (config.params = { ...config.params });

    config.headers["Content-Type"] = "application/x-www-form-urlencoded";

    return config;
  },
  (error: any): object => {
    // 4.请求错误处理
    console.log(`error:===>${error}`);
    return Promise.reject(error);
  }
);

/****** respone拦截器==>对响应做处理 ******/
service.interceptors.response.use(
  (response: any) => {
    // 1.成功请求到数据，清除加载中动画
    store.commit("CHANGE_LOADING", false);

    // 2.后端提供的数据进行对应的处理
    return response.data;
  },
  error => {
    // 响应错误处理
    if (error.response) {
      let message = "";
      // 根据状态码，返回不同错误信息
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          store.commit("LOGOUT");

          // 跳转到登录页
          location.href = "/official-website/login";
          break;
        case 404:
          message = "404 Not Found!";
          break;
        case 500:
          message = "服务器端出错";
          break;
        default:
          message = "网络异常，请重试";
          break;
      }

      // 3.清除加载中动画
      store.commit("CHANGE_LOADING", false);

      // 响应处理处理
      console.log(`error:===>${message}`);
    }

    // 4.清除加载中动画
    store.commit("CHANGE_LOADING", false);

    return Promise.reject(error);
  }
);

export default service;
