const fs = require('fs');
const path = require("path");
const DATADIR = './data';

/**
 * 路径拼接
 * @param dir 
 */
export const resolve = (dir) => {
  return path.join(__dirname, dir);
};

/**
 * 获取节点文字
 * @param v 
 * @param selector 
 */
export const getText = (v, selector) => {
  return v.querySelector(selector) && v.querySelector(selector).innerHTML.trim();
};

/**
 * 获取节点属性
 * @param v 
 * @param selector 
 * @param attr 
 */
export const getAttr = (v, selector, attr) => {
  return v.querySelector(selector) && v.querySelector(selector).getAttribute(attr);
};

/**
 * 睡眠time毫秒
 * @param time 
 */
export const sleep = (time) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(true);
  }, time);
})

/**
 * 数据存文件
 * @param name 待保存文件名
 * @param data data数据
 */
export const saveLocalData = async (name, data) => {
  // 文件名
  const fileName = `${DATADIR}/${name}.json`;
  // 异步写入文件
  await fs.writeFileSync(fileName, JSON.stringify(data, null, 4));
  console.log(`JSON文件成功保存到：${DATADIR}/${name}.json`);

  // 同步写入文件
  /* fs.writeFile(`${DATADIR}${name}.json`, JSON.stringify(data, null, 4), (err: any) => {
    if (!err) {
      console.log(`JSON文件成功保存到：${DATADIR}${name}.json`);
    }
  }) */
}
