import Dexie from "dexie";
import blog from "@/data/blog.json";

export class BlogDatabase extends Dexie {
  blogs!: Dexie.Table<Blog.IArticle, number>;

  _DB: BlogDatabase = this;

  constructor() {
    super("BlogDatabase");

    var _db = this;

    // init blogs table
    _db
      .version(1)
      .stores({
        blogs: "++id,title,author,lastModified,description,tags"
      })
      .upgrade(trans => {
        this.init();
      });

    this.blogs = _db.table("blogs");
  }

  async init() {
    try {
      // clear database
      console.log("Clearing database...");
      await Promise.all([this._DB.table("blogs").clear()]);
      // initBlogData
      await this.initBlogData();
    } catch (ex) {
      console.error(ex);
    }
  }

  /**
   * 初始化已有数据
   */
  async initBlogData() {
    await this._DB.transaction("rw", this._DB.table("blogs"), () => {
      // 批量插入
      this._DB.table("blogs").bulkAdd(blog.blogList);
    });
  }
}

export const db = new BlogDatabase();
