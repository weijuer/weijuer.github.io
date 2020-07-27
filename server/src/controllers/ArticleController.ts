import { Get, Post, JsonController, Body, Param, QueryParam } from 'routing-controllers'
import { Inject } from 'typedi'
import { ArticleService } from '../services/AirticleService'

/**
 * 日志文章
 */
@JsonController('/api/v1', { transformResponse: false })
export class ArticleController {
  @Inject()
  articleService: ArticleService

  /**
   * 获取当前日志列表
   */
  @Get('/articles')
  async all() {
    const articles = await this.articleService.findAll()
    return { code: 10000, data: articles }
  }

  /**
   * 分页获取日志列表
   *
   * @param {*} options
   * @memberof ArticleController
   */
  @Post('/articles')
  async getArticles(@Body() options: any) {
    const { query = {}, index, pageSize } = options
    const articlePage = await this.articleService.findByPage(query, index, pageSize)
    return { code: 10000, data: articlePage }
  }

  /**
   * 获取单条日志详情
   *
   * @param {string} id
   * @returns
   * @memberof ArticleController
   */
  @Get('/article')
  async one(@QueryParam('id') id: string) {
    const article = await this.articleService.findOne(id)
    return { code: 10000, data: article }
  }
}
