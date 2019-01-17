// 1.加载插件
import IndexedDB from '../assets/global/plugins/indexedDB/indexedDB'

// 2.加载本地数据blogs.json文件
const blogJSON = require('../mock/blogs.json');
// 2.1 获取数据集合
const blogs = blogJSON.blogs;

// 3.初始化IndexedDB
const db = new IndexedDB('weijuer_db');

// 4.添加blog数据
db.addObjectStore('blog', {
    title: false,
    date: true
}, false, 'id').then((res) => {

    db.set('blog', blogs, 'id').then((res) => {
        console.log(res);
    }).catch((err) => {
        console.error(err);
    });
});

export default db;