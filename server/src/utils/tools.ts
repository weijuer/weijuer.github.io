import fs = require('fs');
const dataDir = '../data/';

/**
 * 获取节点文字
 * @param v 
 * @param selector 
 */
export const getText = (v: Element, selector: string): string => {
  return v.querySelector(selector) && v.querySelector(selector).innerHTML;
};

/**
 * 获取节点属性
 * @param v 
 * @param selector 
 * @param attr 
 */
export const getAttr = (v: Element, selector: string, attr: string): string => {
  return v.querySelector(selector) && v.querySelector(selector).getAttribute(attr);
};

/**
 * 睡眠time毫秒
 * @param time 
 */
export const sleep = (time: number) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(true);
  }, time);
})

/**
 * 数据存文件
 * @param name 待保存文件名
 * @param data data数据
 */
export const saveLocalData = (name: string, data: string) => {
  fs.writeFile( `${dataDir}${name}.json`, data, 'utf-8', err => {
    if (!err) {
      console.log(`JSON文件成功保存到：${dataDir}${name}.json`);
    }
  })
}
