import fs from 'fs';
import path from "path";
const dataPath = './server/src/data';

// 缩写 console.log
export const log = (...args: any[]) => {
  args.unshift(`[Brower]`);
  // args.push('color: green;');
  return console.log.apply(console, args);
}

/**
 * 路径拼接
 * @param dir 
 */
export const resolve = (dir: string) => {
  return path.join(__dirname, dir);
};

/**
 * 获取节点信息
 * @param element 
 */
export const getData = (element: Element) => {
  if (element.nodeName === 'A') {
    return element.getAttribute('href').trim();
  } else {
    return element.innerHTML.trim();
  }
};

/**
 * 获取子节点
 * @param element 父节点
 * @param selector 选择器
 */
export const getChildNode = (element: Element, selector: string) => {
  return element && element.querySelector(selector);
};

/**
 * 获取节点文字
 * @param v 
 * @param selector 
 */
export function getText(element: Element, selector: string) {
  return element.querySelector(selector) && element.querySelector(selector).textContent.trim();
};

/**
 * 获取节点属性
 * @param v 
 * @param selector 
 * @param attr 
 */
export function getAttr(element: Element, selector: string, attr: string) {
  return element.querySelector(selector) && element.querySelector(selector).getAttribute(attr);
};

/**
 * 睡眠time毫秒
 * @param time 
 */
export const sleep = (time: number) => {
  return new Promise((resolve) => {
    return setTimeout(resolve, time);
  });
}

/**
 * 格式化JSON数据
 * @param {*} data 
 */
export const toJSONString = (data: Object) => {
  return JSON.stringify(data, null, 4);
}

/**
 * 数据存文件
 * @param type 待保存类别
 * @param data data数据
 */
export const saveLocalData = async (type: string, data: Object) => {

  // 如果文件夹不存在则创建
  const localPath = `${dataPath}/${type}`;
  if (!fs.existsSync(localPath)) {
    fs.mkdirSync(localPath)
  }
  // 当前日期
  const name: string = new Date().toLocaleDateString();
  // 文件名
  const fileName = `${localPath}.json`;
  // 异步写入文件
  await fs.writeFileSync(fileName, toJSONString(data));
  console.log(`JSON文件成功保存到：${localPath}.json`);

  // 同步写入文件
  /* fs.writeFile(`${DATADIR}${name}.json`, toJSONString(data), (err: any) => {
    if (!err) {
      console.log(`JSON文件成功保存到：${DATADIR}${name}.json`);
    }
  }) */
}

/**
 * 提取函数
 * @param element 当前元素
 * @param airticle 待创建对象
 */
export function getItem(element: Element, airticle: object) {
  log(`element===>${element}`, airticle);
  var item: any = {};
  for (let [key, value] of Object.entries(airticle)) {
    if (key === 'url') {
      item[key] = getAttr(element, value, 'href');
    } else {
      item[key] = getText(element, value);
    }
  }
  return item;
}
