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
    city: string,
    yesterday: any,
    forecast: Forecast[],
    ganmao: string,
    wendu: string
  }
}

declare module "@layout";

declare module "@widgets";
