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
  id?:number;
  title: string;
  author: string;
  portrait?:string;
  url: string;
  description: string;
  tags?: string;
  lastModified: string;
}