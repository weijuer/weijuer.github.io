import { Get, Post, Param, JsonController, Body } from 'routing-controllers'
import { Service, Inject } from "typedi";
import { ArticleRepository } from "../repository/ArticleRepository";
import browser from "../utils/browser";
import * as utils from '../utils/utils';

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
  all(): Promise<any[]> {
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
      target: '.article-list>.list>.list-item',
      item: {
        title: '.info .com-article-title',
        url: '.info .favorite > a',
        description: '.info .summary',
        author: '.info .editor > a.author',
        lastModified: '.info .extra .date'
      }
    };

    // 爬取日志
    const articles = await browser.scrape(_options);
    // 保存到本地文件
    await utils.saveLocalData('article', articles);
    // 保存到IndexDB
    // this.articleRepository.bulk(articles);
    return { code: 1000, message: 'success' };
  }

  @Post('/getPDF')
  async getPDF(@Param("url") url: string) {
    // 生成PDF
    await browser.printPDF(url);
  }

}