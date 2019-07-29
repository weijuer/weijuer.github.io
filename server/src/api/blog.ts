import browser from "../utils/browser";

/**
 * 获取blog日志
 */
export const get_blogs = async () => {
  const options = {
    url: 'https://www.infoq.cn/topic/Front-end',
    target: '.article-list>.list>.list-item',
    item: {
      title: '.info .com-article-title',
      url: '.info .favorite > a',
      description: '.info .summary',
      author: '.info .editor > a.author',
      lastModified: '.info .extra .date'
    }
  };
  return await browser.scrape(options);
}