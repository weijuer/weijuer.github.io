import fs from 'fs';
import path from "path";
const dataPath = './server/src/data';

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