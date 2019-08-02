import { db } from "@/db/articles";

/**
 * init DA
 */
export const initDB = () => {
  return db.init();
};

/**
 * 获取articles
 */
export const get_articles = () => {
  return db
    .table("articles")
    .orderBy("lastModified")
    .toArray();
};

/**
 * 新增article
 * @param article
 */
export const add_article = (article: W.IArticle) => {
  return db.table("articles").add(article);
};

/**
 * 批量新增articles
 * @param articles
 */
export const bulk_add_article = (articles: W.IArticle[]) => {
  return db.table("articles").bulkAdd(articles);
};

/**
 * 删除article
 * @param id
 */
export const delete_article = (id: number) => {
  return db.table("articles").delete(id);
};

/**
 * 更新article
 * @param key
 * @param changes
 */
export const update_article = (key: number, changes: any) => {
  return db.table("articles").update(key, changes);
};

/**
 * 根据id获取article
 * @param id
 */
export const get_article = (id: number) => {
  return db.table("articles").get(id);
};
