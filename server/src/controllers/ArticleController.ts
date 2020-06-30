import { Get, Post, JsonController, Body, Param } from 'routing-controllers'
import { Inject } from 'typedi'
import { ArticleService } from '../services/AirticleService'

/**
 * 日志文章
 */
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
}
