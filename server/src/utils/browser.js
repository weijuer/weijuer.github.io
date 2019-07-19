const puppeteer = require("puppeteer-core");
const tools = require("./tools");

// 缩写 console.log
const log = console.log;
// chrome本地路径
const pathToExtension = 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe';

class Browser {

  constructor(option) {
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

  async start() {
    if (!this.browser) {
      this.browser = await puppeteer.launch(this.option);
      this.browser.once('disconnected', () => {
        this.browser = undefined
      });
    }
    return this.browser;
  }

  async exit() {
    if (!this.browser) {
      return;
    }
    await this.browser.close();
  }

  /**
   * 打开浏览器
   * @param {*} url 
   * @param {*} param1 
   */
  async open(url, { cookie }) {
    await this.start()
    const page = this.page = await this.browser.newPage()
    // 缓存状态下多页面可能不正常
    await page.setCacheEnabled(false)
    if (cookie) {
      const cookies = Array.isArray(cookie) ? cookie : [cookie]
      await page.setCookie(...cookies)
    }

    // 设置页面视窗大小
    await page.setViewport({ width: 1280, height: 800 });

    // 跳转到目标地址
    await page.goto(url, {
      timeout: 70000,
      waitUntil: 'networkidle0'
    })

    // 等待浏览器
    await page.waitForNavigation();
    log('页面初次加载完毕');

    // 等待60秒
    // await sleep(60321);

    // 添加额外插件
    // await page.addScriptTag({url: 'https://code.jquery.com/jquery-3.2.1.min.js'});

    // 分析页面
    // const result = await page.evaluate(process);

    // 关闭浏览器
    // browser.close();
    // log('服务正常结束');
    // return result;

    return this.page
  }

  /**
   * 爬虫主函数
   * @param url 待处理url
   * @param process 数据处理函数
   */
  async scrape(process) {

    // 等待60秒
    // await sleep(60321);

    // 添加额外插件
    // await page.addScriptTag({url: 'https://code.jquery.com/jquery-3.2.1.min.js'});

    // 分析页面
    const result = await this.page.evaluate(process);

    // 关闭浏览器
    this.browser.close();
    log('服务正常结束');
    
    return result;
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

module.exports = browser;