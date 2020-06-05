/**
 * global interface
 */
declare namespace W {
  // Article
  interface IArticle {
    id?: number;
    description: string;
    portrait: string;
    url: string;
    tags: string;
    title: string;
    author: string;
    image: string;
    lastModified: string;
  }

  interface IWeather {
    aqi: any;
    basic: Weather.Basic;
    daily_forecast: Weather.Forecast[];
    hourly_forecast: Weather.Forecast[];
    now: Weather.Now;
    status: string;
    suggestion: any;
  }

  interface IMusic {
    id?: number;
    songid: number;
    title: string;
    type: string;
    author: string;
    link: string;
    lrc?: string;
    pic: string;
    url: string;
    lastModified: string;
  }

  interface INews {
    type: string;
    trends: any[];
    cities: any[];
    provinces: any[];
    iflow: any;
    levelBlock: any[];
    exposeConfig: any;
    chinaInfectMapImg: string;
    total: {
      china: any;
      foreign: any;
    };
    statisEndTime: string;
  }
}

declare module "@layout";
declare module "@widgets";
declare module "@comps";
declare module "@mixins";
