import Dexie from "dexie";

/**
 * 数据库
 */
class WeijuerDB extends Dexie {
  // 映射数据表
  article!: Dexie.Table<W.IArticle, number>;
  music!: Dexie.Table<W.IMusic, number>;

  constructor() {
    // init Database with name
    super("WeijuerDB");

    // create table
    this.version(1).stores({
      music: "++songid,title,type,author,link,lrc,pic,url,lastModified"
    });

    this.version(1).stores({
      article: "++id,title,author,lastModified,description,tags"
    });

    this.music = this.table("music");
    this.article = this.table("article");
  }

  async init() {
    try {
      // clear database
      console.log("Clearing database...");
      await Promise.all([this.music.clear(), this.article.clear()]);
    } catch (ex) {
      console.error(ex);
    }
  }
}

export default new WeijuerDB();
