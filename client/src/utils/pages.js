const glob = require("glob");
// 多模块目录
const PAGES_PATH = "./src/modules";

module.exports = {
  getPages: () => {
    // pages文件夹路径数组
    let entryHtml = glob.sync(PAGES_PATH + "/*/*.html");

    // pages对象
    let pages = {};

    // 遍历得到的路径数组
    entryHtml.forEach(filePath => {
      let fileName = filePath.substring(
        filePath.lastIndexOf("/") + 1,
        filePath.lastIndexOf(".")
      );

      // 组建pages
      pages[fileName] = {
        entry: `${PAGES_PATH}/${fileName}/entry.ts`,
        template: `${PAGES_PATH}/${fileName}/${fileName}.html`,
        filename: `${fileName}.html`,
        title: `${fileName}`
      };
    });

    return pages;
  }
};
