import db from '@/utils/indexedDB'

const blog = {
    get_blogs() {
        // 1.获取
        return db.find('blog', 'title');
    },
    get_blog_by_page() {
        // 1.初始化timelineDB
        return db.findPage('blog', 'title');
    }
}

export default blog;