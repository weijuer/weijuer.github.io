import db from "@/db/weijuer.db";
import articles from "@/data/article.json";

/**
 * init DA
 */
export const initDB = async () => {
  return await bulk_add_article(articles);
};

/**
 * 获取articles
 */
export const get_articles = () => {
  return db
    .table("article")
    .orderBy("lastModified")
    .toArray();
};

/**
 * 新增article
 * @param article
 */
export const add_article = (article: W.IArticle) => {
  return db.table("article").add(article);
};

/**
 * 批量新增articles
 * @param articles
 */
export const bulk_add_article = (articles: W.IArticle[]) => {
  return db.table("article").bulkPut(articles);
};

/**
 * 删除article
 * @param id
 */
export const delete_article = (id: number) => {
  return db.table("article").delete(id);
};

/**
 * 更新article
 * @param key
 * @param changes
 */
export const update_article = (key: number, changes: any) => {
  return db.table("article").update(key, changes);
};

/**
 * 根据id获取article
 * @param id
 */
export const get_article = (id: number) => {
  return db.table("article").get(id);
};

/**
 * 获取热门articles
 * @param size
 */
export const get_popular_articles = (size: number) => {
  return db
    .table("article")
    .where("lastModified")
    .above(10)
    .limit(size);
};

/**
 * 获取最新articles
 * @param size
 */
export const get_lastest_articles = (size: number) => {
  let today = new Date().getTime();
  return db
    .table("article")
    .where("lastModified")
    .belowOrEqual(today)
    .limit(size);
};
