// 1.加载插件
import IndexedDB from '../static/assets/global/plugins/IndexedDB'
import store from '../store/store';

// 2.加载本地数据blog.json文件
const blogData = require('../static/assets/global/data/blog.json');
const timelineData = require('../static/assets/global/data/timeline.json');
// 2.1 获取日志数据集合
const blog = blogData.blogList;
const timeline = timelineData.timeline;

// 3.初始化IndexedDB
const db = new IndexedDB('weijuer_db');

// 4.初始化timeline、blog数据
if (!store.state.dbInit) {
  db.addStore('timeline', {title: false, date: true}, false, 'id').then((res) => {
    console.log(res);

    db.set('timeline', timeline, 'id').then((res) => {
      console.log(res);
      // 已初始化
      store.state.dbInit = true;
    });
  });

  db.addStore('blog', {title: false, date: true}, false, 'id').then((res) => {
    console.log(res);

    db.set('blog', blog, 'id').then((res) => {
      console.log(res);
      // 已初始化
      store.state.dbInit = true;
    });
  });
}

export default db
