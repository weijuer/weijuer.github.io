import fs from 'fs';
import path from "path";
const DATADIR = './data';

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
export const getText = (element: Element, selector: string) => {
  return element.querySelector(selector) && element.querySelector(selector).innerHTML.trim();
};

/**
 * 获取节点属性
 * @param v 
 * @param selector 
 * @param attr 
 */
export const getAttr = (element: Element, selector: string, attr: string) => {
  return element.querySelector(selector) && element.querySelector(selector).getAttribute(attr);
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
export const saveLocalData = async (name: string, data: Object) => {

  // 如果文件夹不存在则创建
  if (!fs.existsSync(DATADIR)) {
    fs.mkdirSync(DATADIR)
  }

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

/**
 * 格式化JSON数据
 * @param {*} data 
 */
export const toJSONString = (data: Object) => {
  return JSON.stringify(data, null, 4);
}

/**
 * 遍历对象
 * @param {*} object 
 */
export const getItem = (element: Element, object: any) => {
  var _item: any = {};
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      if (element.nodeName === 'A') {
        _item[key] = getAttr(element, object[key], 'href');
      } else {
        _item[key] = getText(element, object[key]);
      }
    }
  }
  return _item;
}