import { Tag } from "./Tag";

export class Article {

  id?: number;
  title: string;
  author: string;
  portrait?: string;
  url: string;
  description: string;
  tags?: Tag[];
  lastModified: string;
  createDate: Date = new Date();

  constructor(id: number,
    title: string,
    author: string,
    portrait: string,
    url: string,
    description: string,
    tags: Tag[],
    lastModified: string, ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.portrait = portrait;
    this.url = url;
    this.description = description;
    this.tags = tags;
    this.lastModified = lastModified;
  }
}