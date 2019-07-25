import browser from "../utils/browser";

// 缩写 console.log
const log = console.log;

/**
 * 获取blog日志
 */
export const get_blogs = async () => {
  const url = 'https://www.infoq.cn/topic/Front-end';
  const options = {
    target: '.article-list>.list>.list-item',
    item: {
      title: '.info .com-article-title',
      url: '.info .favorite > a',
      description: '.info .summary',
      author: '.info .editor > a.author',
      lastModified: '.info .extra .date'
    }
  };
  return await browser.scrape(url, options);
}