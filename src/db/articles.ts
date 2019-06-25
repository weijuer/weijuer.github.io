import Dexie from "dexie";
import article from "@/data/articles.json";

export class ArticleDatabase extends Dexie {
  articles!: Dexie.Table<W.IArticle, number>;

  constructor() {
    // init Database name
    super("ArticleDatabase");

    // create articles table
    this
      .version(1)
      .stores({
        articles: "++id,title,author,lastModified,description,tags"
      });

    this.articles = this.table("articles");
  }

  async init() {
    try {
      // clear database
      console.log("Clearing database...");
      await Promise.all([this.articles.clear()]);
      // init article data
      await this.initArticleData();
    } catch (ex) {
      console.error(ex);
    }
  }

  /**
   * 初始化已有数据
   */
  async initArticleData() {
    return await this.transaction("rw", this.articles, async () => {
      // 批量插入
      console.time("bulkAdd_articles");
      await this.articles.bulkPut(article.articleList);
      console.timeEnd("bulkAdd_articles");
    });
  }
}

export const db = new ArticleDatabase();
