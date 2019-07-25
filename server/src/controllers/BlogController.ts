import { Get, Controller } from 'routing-controllers'
import { get_blogs } from '../api/blog'

/**
 * 日志
 */
@Controller()
export class BlogController {
  @Get('/getBlogs')
  getBlogs() {
    return get_blogs();
  }
}