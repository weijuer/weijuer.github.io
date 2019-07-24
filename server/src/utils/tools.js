const fs = require('fs');
const path = require("path");
const DATADIR = './data';

/**
 * 路径拼接
 * @param dir 
 */
const resolve = (dir) => {
  return path.join(__dirname, dir);
};

/**
 * 获取节点信息
 * @param element 
 */
const getData = (element) => {
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
const getChildNode = (element, selector) => {
  return element && element.querySelector(selector);
};

/**
 * 获取节点文字
 * @param v 
 * @param selector 
 */
const getText = (v, selector) => {
  return v.querySelector(selector) && v.querySelector(selector).innerHTML.trim();
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

/**
 * 睡眠time毫秒
 * @param time 
 */
const sleep = (time) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(true);
  }, time);
})

/**
 * 数据存文件
 * @param name 待保存文件名
 * @param data data数据
 */
const saveLocalData = async (name, data) => {

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
const toJSONString = (data) => {
  return JSON.stringify(data, null, 4);
}

/**
 * 遍历对象
 * @param {*} object 
 */
const getItem = (element, object) => {
  var _item = {};
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      if (element.name === 'A') {
        _item[key] = getAttr(element, object[key], 'href');
      } else {
        _item[key] = getText(element, object[key]);
      }
    }
  }
  return _item;
}

module.exports = { sleep, resolve, getText, getItem }