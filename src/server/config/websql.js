// 加载本地数据文件
const appData = require('../../client/static/assets/global/data/blog.json')
// 获取对应的本地数据
const blogList = appData.blogList

const webSQL = {
  db: null,
  init: function () {
    // 1.打开数据库
    webSQL.createDatabase()

    // 2.执行查询操作
    webSQL.mockData()

    // 3.查询
    webSQL.getBlogList()
  },
  createDatabase: function () {
    webSQL.db = openDatabase('weijuer_db', '1.0', 'WEIJUER BLOG', 2 * 1024 * 1024, function () {
      console.log('weijuer_db 创建成功！')
    })
  },
  transaction: function (fn) {
    webSQL.db.transaction(function (tx) {
    })
  },
  mockData: function () {
    webSQL.db.transaction(function (tx) {
      // 2.1 创建weijuer_blog的表，字段为id UNIQUE, portrait,url, title, description, author, date, extra
      tx.executeSql('CREATE TABLE IF NOT EXISTS weijuer_blog (id UNIQUE, portrait, url, title, description, author, date, extral)')

      // 2.2 插入数据
      blogList.forEach(function (element, index, array) {
        let valuesArr = [index + 1, element.portrait, element.url, element.title, element.description, element.author, element.date, '']
        console.log(valuesArr)
        tx.executeSql('INSERT INTO weijuer_blog (id, portrait, url, title, description, author, date, extral) VALUES (?,?,?,?,?,?,?,?)', valuesArr)
      })
    })
  },
  getBlogList: function () {
    webSQL.db.transaction(function (tx) {
      tx.executeSql('SELECT * FROM weijuer_blog', [], function (tx, results) {
        // 遍历数据
        let len = results.rows.length
        for (let i = 0; i < len; i++) {
          console.log(results.rows.item(i))
        }

        console.log(results.rows)

        return results.rows
      }, null)
    })
  }
}

module.exports = webSQL
