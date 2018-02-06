// 1.加载插件
import IndexedDB from '../static/assets/global/plugins/IndexedDB'

// 2.加载本地数据blog.json文件
const appData = require('../static/assets/global/data/blog.json')
// 2.1 获取日志数据集合
const blog = appData.blogList

const addData = () => {
  // 4.插入数据
  for (let i = 0; i < blog.length; i++) {
    indexedDB.set(blog[i], i + 1)
  }
}

// 3.实例化IndexedDB对象
const indexedDB = new IndexedDB({
  dbName: 'weijuer_db',
  storeName: 'blog',
  version: 1
}, addData)

export default indexedDB
