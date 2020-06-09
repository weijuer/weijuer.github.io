import schedule from 'node-schedule'

// 日志任务，每天08:00:00 抓取最新业界日志
export function testJob() {
  schedule.scheduleJob('30 * * * * *', () => {
    console.log(`blogJob ${new Date()}`)
  })
}

// 日志任务，每天08:00:00 抓取最新业界日志
export function blogJob() {
  schedule.scheduleJob('0 0 8 * * *', () => {
    console.log(`blogJob ${new Date()}`)
  })
}
