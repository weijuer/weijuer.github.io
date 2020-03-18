import { Service } from "typedi";
import Dexie from "dexie";

/**
 * 日志数据库
 */
@Service()
class ArticleDatabase extends Dexie {
  articles!: Dexie.Table<any, number>;

  constructor() {
    // init Database name
    super("ArticleDatabase");

    // create articles table
    this.version(1).stores({
      articles: "++id,title,author,lastModified,description,tags"
    });

    this.articles = this.table("articles");
  }

  /**
   * 初始化
   * 清理数据库
   */
  async init() {
    try {
      // clear database
      console.log("Clearing database...");
      await Promise.all([this.articles.clear()]);
    } catch (ex) {
      console.error(ex);
    }
  }

  /**
   * 批量插入
   */
  async bulkPutArticles(articles: any[]) {
    // 初始化
    await this.init();

    // 初始化插入数据
    return await this.transaction("rw", this.articles, async () => {
      // 批量插入
      console.time("bulkAdd_articles");
      await this.articles.bulkPut(articles);
      console.timeEnd("bulkAdd_articles");
    });
  }
}

export const db = new ArticleDatabase();
