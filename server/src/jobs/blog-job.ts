import schedule from 'node-schedule'
import browser from '../utils/browser'
import { ArticleService } from '../services/AirticleService'

// 日志任务，每天08:00:00 抓取最新业界日志
export function testJob() {
  schedule.scheduleJob('30 * * * * *', () => {
    console.log(`blogJob ${new Date()}`)
  })
}

// 日志任务，每天08:00:00 抓取最新业界日志
export function blogJob() {
  schedule.scheduleJob('0 0 8 * * *', async () => {
    console.log(`blogJob ${new Date()}`)

    const articleService = new ArticleService()

    // 测试
    const options = {
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
    const articles = await browser.scrape(options)
    // 保存到mongodb
    await articleService.bulk(articles)
  })
}
