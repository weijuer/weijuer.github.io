import { Get, Post, JsonController, Body, BodyParam, Param } from 'routing-controllers'
import { Service, Inject } from 'typedi'
import browser from '../utils/browser'
import { ArticleService } from '../services/AirticleService'

/**
 * 日志文章
 */
@Service()
@JsonController('/api/v1')
export class ArticleController {
  @Inject()
  articleService: ArticleService

  /**
   * 获取当前日志列表
   */
  @Get('/articles')
  all() {
    return this.articleService.findAll()
  }

  /**
   * 分页获取日志列表
   *
   * @param {*} options
   * @memberof ArticleController
   */
  @Post('/articles')
  async getArticles(@Body() options: any) {
    const { query, index, pageSize } = options
    const articles = await this.articleService.findByPage(query, index, pageSize)
  }

  /**
   * 获取单条日志详情
   *
   * @param {string} id
   * @returns
   * @memberof ArticleController
   */
  @Get('/articles/:id')
  one(@Param('id') id: string) {
    return this.articleService.findOne(id)
  }

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
        author: '.info .editor > a.author',
        lastModified: '.info .author-date-wrap .date',
      },
    }

    // 爬取日志
    const articles = await browser.scrape(_options)
    // 保存到mongodb
    // await this.articleService.bulk(articles)
    return { code: 1000, message: 'success', data: articles }
  }

  /**
   * 获取pdf
   *
   * @param {string} url
   * @memberof ArticleController
   */
  @Get('/getPDF')
  async getPDF(@Param('url') url: string) {
    // 生成PDF
    await browser.printPDF(url)
  }
}
