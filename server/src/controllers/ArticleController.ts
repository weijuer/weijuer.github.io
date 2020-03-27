import { Get, Post, Param, JsonController, Body } from 'routing-controllers'
import { Service, Inject } from "typedi";
import browser from "../utils/browser";
import * as utils from '../utils/utils';
import { ArticleRepository } from '../repository/AirticleRepository';

/**
 * 日志文章
 */
@Service()
@JsonController()
export class ArticleController {

  @Inject()
  articleRepository: ArticleRepository;

  /**
   * 获取当前日志列表
   */
  @Get("/articles")
  all() {
    return this.articleRepository.findAll();
  }

  /**
   * 抓取日志文章
   * @param options 
   */
  @Post('/scrapeArticles')
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
        lastModified: '.info .author-date-wrap .date'
      }
    };

    // 爬取日志
    const articles = await browser.scrape(_options);
    // 保存到本地文件
    // await utils.saveLocalData('article', articles);
    // 保存到mongodb
    await this.articleRepository.bulk(articles);
    return { code: 1000, message: 'success' };
  }

  @Post('/getPDF')
  async getPDF(@Param("url") url: string) {
    // 生成PDF
    await browser.printPDF(url);
  }

}