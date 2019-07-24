import { Get, Controller, Render } from 'routing-controllers'

/**
 * 首页
 */
@Controller()
export class IndexController {
  @Get('/')
  @Render('index.html')
  async index() {
    return {
      title: "Welcome!"
    }
  }
}