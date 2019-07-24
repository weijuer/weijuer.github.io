import { Get, Controller } from 'routing-controllers'
import { get_blogs } from '../api/blog'

/**
 * 日志
 */
@Controller('blog')
export class BlogController {
  @Get('/getBlogs')
  async getBlogs() {
    return await get_blogs();
  }
}