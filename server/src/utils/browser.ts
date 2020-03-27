import puppeteer from "puppeteer-core";
import { log } from './utils'

// chrome本地路径
const pathToExtension = 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe';

class Browser {
  options: any;
  browser: any;
  page: any;

  constructor(options: any = {}) {
    this.options = {
      // 打开开发者工具, 当此值为true时, headless总为false
      devtools: false,
      // 关闭headless模式, 不会打开浏览器
      headless: false,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      // 如果是访问https页面 此属性会忽略https错误
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
    log('开始打印PDF中...');
    await this.page.pdf({ path: 'page.pdf' });
    log('打印PDF完毕...');
    // 关闭浏览器
    this.exit();
  }

  /**
   * 截屏
   */
  async screenshot(url: string) {
    // 打开浏览器
    await this.open(url);
    log('开始截图中...');
    await this.page.screenshot({ path: 'screenshot.png', type: 'png', fullPage: true });
    log('截图完毕...');
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

    // 分析数据
    log(`开始分析数据...`)
    const result = await this.evaluate(options);
    log(`分析完成... result:===>${JSON.stringify(result, null, 4)}`);

    // 关闭浏览器
    this.exit();

    return result;
  }



  /**
   * 分析页面：A.在浏览器中执行一段JavaScript代码
   * @param options 
   */
  async evaluate(options: any) {
    return await this.page.evaluate(this.processByFunction, options);
  }

  /**
   * 分析页面：C.获取某一类节点的某个属性集合
   * @param options 
   */
  async getNodesData(selector: string, options: any) {
    return await this.page.$$eval(selector, this.process, options);
  }

  /**
   * 分析页面：B.获取某一个节点的某个属性
   * @param selector CSS选择器
   * @param attr 属性名称
   */
  async getNodeData(selector: string, attr: string) {
    if (attr) {
      return await this.page.$eval(selector, (el: Element) => el.getAttribute(attr));
    } else {
      return await this.page.$eval(selector, (el: Element) => el.textContent);
    }
  }

  /**
   * 分析数据
   * @param {*} options 
   */
  async process(elements: any[], options: any) {
    console.log('process start')
    console.log('process elements', elements)
    // 解析数据
    return Array.from(elements).map(element => {
      let item: any = {};
      for (let [key, value] of Object.entries(options.item)) {
        if (key === 'url') {
          item[key] = element.querySelector(value).getAttribute('href')
        } else {
          item[key] = element.querySelector(value).textContent.trim()
        }
      }
      return item;
    })
  }

  /**
  * 执行JS分析数据
  * @param {*} options 
  */
  processByFunction(options: any) {
    // 获取待爬取节点集合，并转为数组
    const targets = Array.from(document.querySelectorAll(options.target));
    console.log(`targets size:===>${targets.length}`);
    // 解析数据
    return targets.map(element => {
      let item: any = {};
      for (let [key, value] of Object.entries(options.item)) {
        if (key === 'url') {
          item[key] = element.querySelector(value).getAttribute('href')
        } else {
          item[key] = element.querySelector(value).textContent.trim()
        }
      }
      return item;
    });
  }

  proccessData() {

  }

}

// 初始化
const browser = new Browser();

// 退出时结束浏览器，防止内存泄漏
process.on('exit', () => {
  browser.exit()
});

export default browser;