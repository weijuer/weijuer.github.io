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

}

// 接口类型定义
type Article = {
  title: string;
  url: string;
  desc: string;
  author: string;
  date: string;
}