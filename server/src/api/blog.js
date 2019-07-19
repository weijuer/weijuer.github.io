const tools = require("../utils/tools");
const browser = require("../utils/browser");

// 缩写 console.log
const log = console.log;

// 分析首页数据
const process = (options) => {

  // 获取所有selector元素
  const items = Array.from(
    document.querySelectorAll(options.selector)
  );

  console.log(`selector size:===>${items.length}`);
  
  const target = options.target;

  // 数据集
  const data = [];

  // 解析数据
  items.map((v) => {
    const item = {
      title: tools.getText(v, ".info .com-article-title"),
      url: tools.getAttr(v, ".info .favorite > a", "href"),
      description: tools.getText(v, ".info .summary"),
      author: tools.getText(v, ".info .editor > a.author"),
      lastModified: tools.getText(v, ".info .extra .date")
    };
    // 存入数组
    data.push(item);
  });
  // 返回数据
  return data;
}

const get_blogs = (url, process) => {
  return browser.open(url, process);
}

module.exports = get_blogs;