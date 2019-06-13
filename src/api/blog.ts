import { db } from "@/db/blog";

/**
 * 获取blogs
 */
export const get_blogs = () => {
  return db
    .table("blogs")
    .orderBy("lastModified")
    .toArray();
};

/**
 * 新增blog
 * @param blog
 */
export const add_blog = (blog: Blog.IArticle) => {
  return db.table("blogs").add(blog);
};

/**
 * 删除blog
 * @param id
 */
export const delete_blog = (id: number) => {
  return db.table("blogs").delete(id);
};

/**
 * 更新blog
 * @param key
 * @param changes
 */
export const update_blog = (key: number, changes: any) => {
  return db.table("blogs").update(key, changes);
};

/**
 * 根据id获取blog
 * @param id
 */
export const get_blog = (id: number) => {
  return db.table("blogs").get(id);
};
