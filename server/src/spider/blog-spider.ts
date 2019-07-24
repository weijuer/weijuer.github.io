import * as puppeteer from 'puppeteer-core';
import { saveLocalData } from '../utils/utils';

// 缩写 console.log
const log = console.log;

/**
 * 爬虫主函数
 * @param url 
 * @param callback 
 */
const scrape = async (url: string, callback: puppeteer.EvaluateFn) => {
  // 打开浏览器
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    headless: false
  });

  log("服务正常启动...");

  // 获取page实例
  const page = await browser.newPage();

  // 设置页面视窗大小
  await page.setViewport({ width: 1024, height: 800 });

  // 跳转到目标地址
  await page.goto(url, { timeout: 0 });
  log('页面初次加载完毕');

  // 等待60秒
  // await sleep(60321);

  // 分析页面
  const result = await page.evaluate(callback);

  // 关闭浏览器
  browser.close();

  log('服务正常结束');
  return result;
};

// 分析首页数据
const indexScrape = () => {

  /**
 * 获取节点文字
 * @param v 
 * @param selector 
 */
  const getText = (v: Element, selector: string): string => {
    return v.querySelector(selector) && v.querySelector(selector).innerHTML.trim();
  };

  /**
   * 获取节点属性
   * @param v 
   * @param selector 
   * @param attr 
   */
  const getAttr = (v: Element, selector: string, attr: string): string => {
    return v.querySelector(selector) && v.querySelector(selector).getAttribute(attr);
  };

  // 获取所有items元素
  const items = Array.from(
    document.querySelectorAll(".article-list>.list>.list-item")
  );

  console.log(`items:===>${items.length}`);

  // 数据集
  const data: Article[] = [];
  // 解析数据
  items.map((v: Element) => {
    const item: Article = {
      title: getText(v, ".info .com-article-title"),
      url: getAttr(v, ".info .favorite > a", "href"),
      description: getText(v, ".info .summary"),
      author: getText(v, ".info .editor > a.author"),
      lastModified: getText(v, ".info .extra .date")
    };
    // 存入数组
    data.push(item);
  });
  // 返回数据
  return data;
}

const init = () => {

  scrape("https://www.infoq.cn/topic/Front-end", indexScrape)
    .then((res) => {
      log(res);
      // 数据存文件
      saveLocalData('Blog', JSON.stringify(res, null, 4));
    })
    .catch((e: any) => { log(e) });
}

// 初始化
init();