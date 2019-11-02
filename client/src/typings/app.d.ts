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
}

declare module "@webLayout";
declare module "@webWidgets";
declare module "@mobileLayout";
declare module "@mobileWidgets";
declare module "@mixins";
