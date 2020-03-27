import { log } from './utils'

/**
 * 提取工具
 */
class DOMUtil {
  constructor() {
    log('DOMUtil inited!')
  }

  /**
   * 提取函数
   * @param element 当前元素
   * @param airticle 待创建对象
   */
  getItem(element: Element, airticle: object) {
    log(`element===>${element}`, airticle);
    let item: any = {};
    for (let [key, value] of Object.entries(airticle)) {
      if (key === 'url') {
        item[key] = this.getAttr(element, value, 'href');
      } else {
        item[key] = this.getText(element, value);
      }
    }
    return item;
  }

  /**
 * 获取节点文字
 * @param v 
 * @param selector 
 */
  getText(element: Element, selector: string) {
    return element.querySelector(selector) && element.querySelector(selector).textContent.trim();
  }

  /**
   * 获取节点属性
   * @param v 
   * @param selector 
   * @param attr 
   */
  getAttr(element: Element, selector: string, attr: string) {
    return element.querySelector(selector) && element.querySelector(selector).getAttribute(attr);
  }
}

export default new DOMUtil()