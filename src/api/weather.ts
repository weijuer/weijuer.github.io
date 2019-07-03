import service from "@/utils/service";

let ip_api: string, ip_api2: string, ip_api3: string;
let weather_api: string, weather_api2: string;

if (process.env.NODE_ENV === "production") {
  // ip api
  ip_api = `https://extreme-ip-lookup.com/json/`;
  // ip_api2 = `https://bird.ioliu.cn/ip`;
  // ip_api3 = `http://pv.sohu.com/cityjson`;
  
  // weather api
  weather_api = `https://bird.ioliu.cn/weather`;
  // weather_api2 = `http://wthrcdn.etouch.cn/weather_mini`;
} else {
  ip_api = '/ip';
  weather_api = '/weather'
}

/**
  * 获取当前IP确定当前城市信息
  */
export const get_city = () => {
  return service({
    url: `${ip_api}`,
    method: "get"
  });
};

/**
  * 获取当前城市天气信息
  * @param city 
  */
export const get_weather = (city: string) => {
  return service({
    url: `${weather_api}?city=${city}`,
    method: "get"
  });
};
