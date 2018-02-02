<template>
  <div class="container">
    <div class="row">
      <div class="col-md-9">

        <div class="wj-content-blog-post-1-list" v-if="searchBlog.length > 0">
          <div class="wj-portlet" v-for="item in searchBlog">
            <div class="wj-portlet--head">
              <div class="wj-portlet--head-caption">
                <div class="wj-portlet--head-text">{{ item.title }}</div>
              </div>
            </div>
            <div class="wj-portlet--body">
              <div class="wj-panel">
                <div class="wj-author"><a href="#">By <span class="wj-font-uppercase">{{ item.author }}</span></a></div>
                <div class="wj-date">on <span class="wj-font-uppercase">{{ item.date }}</span></div>
                <ul class="wj-tags wj-theme-ul-bg">
                  <li v-for="(tag, index) in item.tags" v-text="tag"></li>
                </ul>
                <div class="wj-comments"><a href="#"><i class="icon-speech"></i> 30 comments</a></div>
              </div>

              <img class="wj-overlay-object img-responsive" :src="blogHeader2" alt="">
              {{ item.description }}
              <a :href="item.url">read more...</a>
            </div>
          </div>
        </div>

        <div class="wj-content-blog-post-1-list" v-if="searchBlog.length > 0">

          <div class="wj-content-blog-post-1 wj-bordered" v-for="item in searchBlog">

            <div class="wj-title wj-font-uppercase">
              <a :href="item.url">{{ item.title }}</a>
            </div>

            <div class="wj-panel">
              <div class="wj-author"><a href="#">By <span class="wj-font-uppercase">{{ item.author }}</span></a></div>
              <div class="wj-date">on <span class="wj-font-uppercase">{{ item.date }}</span></div>
              <ul class="wj-tags wj-theme-ul-bg">
                <li v-for="(tag, index) in item.tags" v-text="tag"></li>
              </ul>
              <div class="wj-comments"><a href="#"><i class="icon-speech"></i> 30 comments</a></div>
            </div>

            <div class="wj-desc">
              <!--<div class="wj-media wj-content-overlay">
                <div class="wj-overlay-wrapper">
                  <div class="wj-overlay-content">
                    <a :href="item.url"><i class="fa fa-link"></i></a>
                    <a :href="subLogo">
                      <i class="fa fa-search"></i>
                    </a>
                  </div>
                </div>

                <img class="wj-overlay-object img-responsive" :src="blogHeader" alt="">
              </div>-->
              <img class="wj-overlay-object img-responsive" :src="blogHeader2" alt="">
              {{ item.description }}
              <a :href="item.url">read more...</a>
            </div>
          </div>

          <!--分页组件-->
          <pagination
            :page-index="currentPage"
            :page-size="pageSize"
            :total="count"
            @change="pageChange">
          </pagination>

        </div>
        <div class="wj-content-blog-post-1-list" v-else>暂无数据</div>
      </div>

    <div class="col-md-3">

      <form action="#" method="post">
        <div class="input-group">
          <input type="text" class="form-control wj-square wj-theme-border" v-model="search" :placeholder="$t('blog.sideSearch')">
          <span class="input-group-btn">
            <button class="btn wj-theme-btn wj-theme-border wj-btn-square" type="button">{{ $t('common.search') }}</button>
          </span>
        </div>
      </form>

      <div class="wj-content-ver-nav">
        <div class="wj-content-title-1 wj-theme wj-title-md wj-margin-t-40">
          <h3 class="wj-font-bold wj-font-uppercase">{{ $t('blog.categories') }}</h3>
          <div class="wj-line-left wj-theme-bg"></div>
        </div>
        <ul class="wj-menu wj-arrow-dot1 wj-theme">
          <li><a href="#">Web Development(2)</a></li>
          <li><a href="#">UX Design(12)</a></li>
          <li><a href="#">Mobile Development(5)</a></li>
          <li><a href="#">JavaScript(11)</a></li>
          <li><a href="#">Web Design(18)</a></li>
        </ul>
      </div>

      <div class="wj-content-tab-1 wj-theme wj-margin-t-30">
        <div class="nav-justified">
          <ul class="nav nav-tabs nav-justified">
            <li class="active"><a href="#blog_recent_posts" data-toggle="tab">{{ $t('blog.recent') }}</a></li>
            <li><a href="#blog_popular_posts" data-toggle="tab">{{ $t('blog.popular') }}</a></li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane active" id="blog_recent_posts">
              <ul class="wj-content-recent-posts-1">
                <li v-for="item in blogLists">
                  <div class="wj-image">
                    <img :src="subLogo" alt="" class="img-responsive">
                  </div>
                  <div class="wj-post">
                    <a class="wj-title" :href="item.url" :title="item.title" v-text="item.title"></a>
                    <div class="wj-author">By <a href="#"><span class="wj-font-uppercase">{{ item.author }}</span></a></div>
                    <div class="wj-date">{{ item.date }}</div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="tab-pane" id="blog_popular_posts">
              <ul class="wj-content-recent-posts-1">
                <li v-for="item in blogLists">
                  <div class="wj-image">
                    <img :src="subLogo" alt="" class="img-responsive">
                  </div>
                  <div class="wj-post">
                    <a class="wj-title" :href="item.url" :title="item.title" v-text="item.title"></a>
                    <div class="wj-author">By <a href="#"><span class="wj-font-uppercase">{{ item.author }}</span></a></div>
                    <div class="wj-date">{{ item.date }}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="wj-content-ver-nav">
        <div class="wj-content-title-1 wj-theme wj-title-md wj-margin-t-40">
          <h3 class="wj-font-bold wj-font-uppercase">{{ $t('blog.relative') }}</h3>
          <div class="wj-line-left wj-theme-bg"></div>
        </div>
        <ul class="wj-menu wj-arrow-dot wj-theme">
          <li v-for="item in blogLists"><a :href="item.url" :title="item.title" v-text="item.title"></a></li>
        </ul>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import Pagination from '../components/pagination'
  // 加载模拟本地数据库数据
  import webSQL from '../../server/config/websql'

  export default {
    name: 'blog',
    components: {
      Pagination
    },
    data () {
      return {
        search: '',
        pageSize: 4, // 每页显示4条数据
        currentPage: 1, // 当前页码
        count: 0, // 总记录数
        blogLists: [], // 日志记录
        subLogo: './asserts/global/images/wj-logo.svg',
        blogHeader1: './asserts/global/images/blog/bg-blog-2.png',
        blogHeader2: './asserts/global/images/blog/bg-blog-3.jpg'
      }
    },
    // 当前实例创建完成就监听这个事件
    created () {
      // 初始化本地数据库数据
      webSQL.init()

      this.$root.Bus.$on('searchChange', (value) => {
        console.log('searchChange:==========>' + value)
        this.search = value
      })
    },
    mounted () {
      console.log('-----mounted')
      // 请求本地第一页的数据
      // this.get_local_data()

      // 获取webSQL数据
      this.get_webSQL_data()
    },
    computed: {
      searchBlog: function () {
        let search = this.search

        if (search) {
          return this.blogLists.filter(function (blog) {
            return Object.keys(blog).some(function (key) {
              return String(blog[key]).toLowerCase().indexOf(search) > -1
            })
          })
        }
        return this.blogLists
      }
    },
    methods: {
      // 1.请求本地数据
      get_local_data: function (params) {
        // 1.1 分页参数
        if (!params) {
          params = {
            currentPage: this.currentPage,
            pageSize: this.pageSize
          }
        }
        // 1.2 获取后台模拟数据
        this.$ajax.post('/api/blogList', {params})
          .then((response) => {
            let res = response.data.blog
            this.blogLists = res

            // 子组件监听到count变化会自动更新DOM
            this.count = res.length
          })
          .catch((error) => {
            console.log(error)
          })
      },

      // 1.2 请求本地webSQL数据
      get_webSQL_data: function (params) {
        // 1.1 分页参数
        if (!params) {
          params = {
            currentPage: this.currentPage,
            pageSize: this.pageSize
          }
        }
        // 1.2 获取webSQL模拟数据
        this.blogLists = webSQL.getBlogList()
      },

      // 2.从page组件传递过来的当前page
      pageChange (page) {
        console.log('page:=====>' + page)
        this.currentPage = page
        // this.get_local_data()
        this.get_webSQL_data()
      }

    },
    // 在组件销毁时别忘了解除事件绑定
    beforeDestroy () {
      this.$root.Bus.$off('searchChange')
    }
  }
</script>

<style lang="less" scoped>
  @import "../static/assets/global/less/page/blog";
</style>

