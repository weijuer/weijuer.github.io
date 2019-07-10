const puppeteer = require("puppeteer");

// 缩写 console.log
const log = console.log;

// 接口类型定义
/* type Article = {
  title: string;
  url: string;
  desc: string;
  author: string;
} */

let scrape = async () => {
  // 打开浏览器
  const browser = await puppeteer.launch({ headless: false });
  log("服务正常启动...");
  // 打开一个新的页面
  const page = await browser.newPage();
  // 跳转到目标地址
  await page.goto('https://segmentfault.com/');
  log('页面初次加载完毕');

  // 监听页面内部的console消息
  page.on('console', msg => {
    if (typeof msg === 'object') {
      console.dir(msg)
    } else {
      log(msg)
    }
  });

  // 分析页面
  const result = await page.evaluate(() => {
    // 获取所有items元素
    const items = Array.from(
      document.querySelectorAll(".news-list>.news-item")
    );
    // 数据集
    const data = [];
    // 解析数据
    items.map(v => {
      const item = {
        title: getText(v, ".news__item-info > h4.news__item-title"),
        url: getAttr(v, ".news__item-info > a:nth-child(2)", "href"),
        desc: getText(v, ".news__item-info >.article-excerpt"),
        author: getText(v, ".news__item-info > .news__item-meta > .author > a")
      };
      // 存入数组
      data.push(item);
    });

    // 返回数据
    return data;
  });

  // 关闭浏览器
  browser.close();
  log('服务正常结束');
  return result;
};

/**
 * 获取节点文字
 * @param v 
 * @param selector 
 */
const getText = (v, selector) => {
  return v.querySelector(selector) && v.querySelector(selector).innerText;
};
/**
 * 获取节点属性
 * @param v 
 * @param selector 
 * @param attr 
 */
const getAttr = (v, selector, attr) => {
  return v.querySelector(selector) && v.querySelector(selector).getAttribute(attr);
};

scrape().then((res) => {
  log(res);
}).catch((e) => { log(e) });