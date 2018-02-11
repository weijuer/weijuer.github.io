// 1.加载插件
import IndexedDB from '../static/assets/global/plugins/IndexedDB'

// 2.加载本地数据blog.json文件
const blogData = require('../static/assets/global/data/blog.json')
const timelineData = require('../static/assets/global/data/timeline.json')
// 2.1 获取日志数据集合
const blog = blogData.blogList
const timeline = timelineData.timeline

// 2.2 插入数据
const addData = (dataArr) => {
  for (let i = 0; i < dataArr.length; i++) {
    this.set(dataArr[i], i + 1)
  }
}

// 3.实例化blogDB对象
export const blogDB = new IndexedDB({
  dbName: 'weijuer_db',
  storeName: 'blog',
  version: 1
}, addData(blog))

// 4.实例化timelineDB对象
export const timelineDB = new IndexedDB({
  dbName: 'weijuer_db',
  storeName: 'blog',
  version: 1
}, addData(timeline))
