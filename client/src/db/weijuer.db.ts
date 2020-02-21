import Dexie from "dexie";

/**
 * 数据库
 */
class WeijuerDB extends Dexie {
  // 映射数据表
  article!: Dexie.Table<W.IArticle, number>;
  music!: Dexie.Table<W.IMusic, number>;
  news!: Dexie.Table<W.INews, number>;

  constructor() {
    // init Database with name
    super("WeijuerDB");

    // create table
    this.version(1).stores({
      music: "++id,songid,title,type,author,link,lrc,pic,url,lastModified",
      article: "++id,title,author,lastModified,description,tags",
      news: "type,trends,cities,provinces,iflow,levelBlock,total,statisEndTime"
    });

    this.music = this.table("music");
    this.article = this.table("article");
    this.news = this.table("news");
  }
}

export default new WeijuerDB();
