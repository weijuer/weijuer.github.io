import puppeteer from "puppeteer-core";

// 缩写 console.log
const log = (...args: string[]) => {
  args.unshift(`[Brower]`);
  // args.push('color: green;');
  return console.log.apply(console, args);
}

// chrome本地路径
const pathToExtension = 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe';

class Browser {
  options: any;
  browser: any;
  page: any;

  constructor(options: any) {
    this.options = {
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      // 是否在导航期间忽略 HTTPS 错误
      ignoreHTTPSErrors: true,
      // Chrome 可执行文件的路径
      executablePath: process.env.CHROME_PUPPETEER_PATH || pathToExtension,
      // 默认视口
      defaultViewport: { width: 1280, height: 1080 },
      // 减缓效果
      slowMo: 300,
      ...options
    };
    // 浏览器对象
    this.browser = null;
    // 页面对象
    this.page = null;
  }

  /**
   * 启动
   */
  async start() {
    if (!this.browser) {
      this.browser = await puppeteer.launch(this.options);
      log('浏览器已启动...');
      this.browser.once('disconnected', () => {
        this.browser = null;
      });
    }
    return this.browser;
  }

  /**
   * 停止
   */
  async exit() {
    if (!this.browser) {
      return;
    }
    await this.browser.close();
    log('浏览器已关闭！');
  }

  /**
   * 打开浏览器
   * @param {*} url 
   */
  async open(url: string) {
    // 启动浏览器
    await this.start();
    // 创建一个page对象
    this.page = await this.browser.newPage();
    log('page对象创建完毕...');
    // 缓存状态下多页面可能不正常
    await this.page.setCacheEnabled(false);
    // 设置页面视窗大小
    await this.page.setViewport({ width: 1280, height: 1080 });
    // 允许执行js脚本
    await this.page.setJavaScriptEnabled(true);
    // 跳转到目标地址
    await this.page.goto(url, {
      timeout: 7000,
      waitUntil: 'networkidle0'
    });

    // 监听页面日志
    this.page.on('console', (msg: any) => console.log('PAGE LOG:', msg.text()));

    log('页面初次加载完毕...');
    return this.page;
  }

  /**
   * 打印PDF
   */
  async printPDF(url: string) {
    // 打开浏览器
    await this.open(url);
    await this.page.pdf({path: 'page.pdf'});
    log('打印PDF完毕...');
    // 关闭浏览器
    this.exit();
  }

  /**
   * 爬虫主函数
   * @param url 待处理url
   * @param options 数据处理对象
   */
  async scrape(options: any) {

    // 打开浏览器
    await this.open(options.url);

    // 等待被选的元素
    await this.page.waitForSelector(options.target);
    log(`页面元素加载完毕...target:===> ${options.target}`);
    // 分析页面
    // const result = await this.page.evaluate(this.process, options);
    const result = await this.page.$$eval(options.target, this.process, options);
    log(`解析完成... result:===>${JSON.stringify(result, null, 4)}`);

    // 关闭浏览器
    this.exit();

    return result;
  }

  /**
   * 分析数据
   * @param {*} items 
   * @param {*} options 
   */
  process(items: any, options: any) {
    console.log(`items===>${items.length}`);
    // 获取元素文字
    const getText = (element: Element, selector: string) => {
      return element.querySelector(selector) && element.querySelector(selector).textContent.trim();
    }

    // 获取元素属性
    const getAttr = (element: Element, selector: string, attr: string) => {
      return element.querySelector(selector) && element.querySelector(selector).getAttribute(attr);
    }

    // 遍历属性
    const getItem = (element: Element, object: any) => {
      var _item: any = {};
      for (let key in object) {
        if (object.hasOwnProperty(key)) {
          if (key === 'url') {
            _item[key] = getAttr(element, object[key], 'href');
          } else {
            _item[key] = getText(element, object[key]);
          }
        }
      }
      return _item;
    }

    // 提取函数
    const dataScrape = (el: Element) => { return getItem(el, options.item) };
    // 解析数据
    return items.map(dataScrape);
  }

  /**
  * 分析数据
  * @param {*} options 
  * @param {*} tools 
  */
  processData(options: any) {
    // 获取元素文字
    const getText = (element: Element, selector: string) => {
      return element.querySelector(selector) && element.querySelector(selector).textContent.trim();
    }

    // 获取元素属性
    const getAttr = (element: Element, selector: string, attr: string) => {
      return element.querySelector(selector) && element.querySelector(selector).getAttribute(attr);
    }

    // 遍历属性
    const getItem = (element: Element, object: any) => {
      var _item: any = {};
      for (let key in object) {
        if (object.hasOwnProperty(key)) {
          if (key === 'url') {
            _item[key] = getAttr(element, object[key], 'href');
          } else {
            _item[key] = getText(element, object[key]);
          }
        }
      }
      return _item;
    }

    // 获取所有元素
    const targets = Array.from(document.querySelectorAll(options.target));
    console.log(`targets size:===>${targets.length}`);
    // 提取函数
    const dataScrape = (el: Element) => { return getItem(el, options.item) };
    // 解析数据
    return targets.map(dataScrape);
  }

}

// 初始化
const browser = new Browser({
  headless: false
});

// 退出时结束浏览器，防止内存泄漏
process.on('exit', () => {
  browser.exit()
});

export default browser;