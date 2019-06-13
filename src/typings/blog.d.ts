declare namespace Blog {
  export interface IArticle {
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
}

declare module "*.json";
