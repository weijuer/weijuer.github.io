import puppeteer from "puppeteer-core";
import * as tools from "../utils/utils";

// 缩写 console.log
const log = (...args: string[]) => {
  args.unshift(`[Brower]`);
  // args.push('color: green;');
  return console.log.apply(console, args);
}

// chrome本地路径
const pathToExtension = 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe';

class Browser {
  option: any;
  browser: any;
  page: any;

  constructor(option: any) {
    this.option = {
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      ignoreHTTPSErrors: true,
      executablePath: process.env.CHROME_PUPPETEER_PATH || pathToExtension,
      dumpio: false,
      ...option
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
      this.browser = await puppeteer.launch(this.option);
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
      timeout: 70000,
    });

    // 监听页面日志
    this.page.on('console', (msg: any) => console.log('PAGE LOG:', msg.text()));

    log('页面初次加载完毕...');
    return this.page;
  }

  /**
   * 爬虫主函数
   * @param url 待处理url
   * @param options 数据处理对象
   */
  async scrape(url: string, options: any) {

    // 打开浏览器
    await this.open(url);

    // 等待60秒
    // await sleep(60321);

    // 添加额外插件
    // await page.addScriptTag({url: 'https://code.jquery.com/jquery-3.2.1.min.js'});

    // 等待被选的元素
    await this.page.waitForSelector(options.target);
    log(`页面元素加载完毕...target:===> ${options.target}`);
    // 分析页面
    // const result = await this.page.evaluate(this.process(options, tools), options, tools);
    const result = await this.page.$$eval(options.target, this.process);

    log(`解析完成... result:===>${JSON.stringify(result, null, 4)}`);

    // 等待3s
    // await this.page.waitFor(3000);
    // 关闭浏览器
    this.exit();

    return result;
  }

  /**
   * 分析数据
   * @param {*} items 
   * @param {*} options 
   */
  async process(items: any, options: any) {
    console.log(`items===>${items.length}`);
    console.log(`tools===>${tools.getItem}`);
    // 提取函数
    const dataScrape = (el: Element) => { return tools.getItem(el, options.item) };
    // 解析数据
    return items.map(dataScrape);
  }

    /**
   * 分析数据
   * @param {*} options 
   * @param {*} tools 
   */
  async process1(options: any, tools: any) {
    // 提取函数
    const dataScrape = (el: Element) => { return tools.getItem(el, options.item) };
    // 获取所有元素
    const targets = Array.from(document.querySelectorAll(options.target));
    console.log(`targets size:===>${targets.length}`);
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