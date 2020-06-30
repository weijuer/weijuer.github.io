import { Get, Post, JsonController, Body, QueryParam, Param } from 'routing-controllers'
import browser from '../utils/browser'

@JsonController('/spider')
export class SpiderController {
  /**
   * 抓取日志文章
   * @param options
   */
  @Get('/scrapeArticles')
  async scrapeArticles(@Body() options: any) {
    // 测试
    const _options = {
      url: 'https://www.infoq.cn/topic/Front-end',
      target: '.article-list>.list>.article-item',
      item: {
        title: '.info .com-article-title',
        url: '.info .com-article-title',
        description: '.info .summary',
        author: '.info .editor a.com-author-name',
        lastModified: '.info .author-date-wrap .date',
      },
    }

    // 爬取日志
    const articles = await browser.scrape(_options)
    return { code: 1000, message: 'success', data: articles }
  }

  /**
   * 获取pdf
   *
   * @param {string} url
   * @memberof ArticleController
   */
  @Get('/getPDF')
  async getPDF(@QueryParam('url') url: string) {
    // 生成PDF
    const pdf = await browser.printPDF(url)

    return { code: 1000, message: 'success', data: pdf }
  }

  /**
   * 获取截图
   * @param {string} url
   * @memberof ArticleController
   */
  @Get('/getScreenshot')
  async screenshot(@QueryParam('url') url: string) {
    // 生成截图
    const screenshot = await browser.screenshot(url)

    return { code: 1000, message: 'success', data: screenshot }
  }
}
