<template>
  <div class="container blog-detail">
    <div class="row">
      <div class="col-md-12 blog-list">

        <div class="loading" v-if="loading">
          Loading...
        </div>

        <div class="blog-item default" v-if="blog">
          <div class="blog-item--header">
            <div class="blog-item--header-caption">
              <h3 class="blog-item--header-text">{{ blog.title }}</h3>
            </div>
          </div>
          <div class="blog-item--body">
            <img class="wj-overlay-object img-responsive" :src="blogHeader2" alt="">
            <p>{{ blog.description }}</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  // 加载模拟indexedDB数据
  import db from '@client/config/indexedDB'

  export default {
    name: 'blog-detail',
    data() {
      return {
        loading: false,
        blog: null,
        blogHeader2: './asserts/global/images/blog/bg-blog-3.jpg'
      }
    },
    created() {
      // 组件创建完后获取数据，
      this.get_blog_detail()
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'get_blog_detail'
    },
    methods: {
      // 1.3 请求本地indexedDB数据
      get_blog_detail: function (params) {
        this.loading = !this.loading;
        // 1.1 分页参数
        if (!params) {
          let id = Number(this.$route.params.id);
          params = ['blog', id]
        }
        // 1.2 获取indexedDB模拟数据
        db.get(...params).then((res) => {
          this.loading = !this.loading;
          this.blog = res;
        });
      },
      fetchData(params) {
        let v = this;
        v.error = v.post = null;
        v.loading = true;

        if (!params) params = {};
        // 1.获取数据
        v.$ajax.get('/api/blogList', {params})
          .then((response) => {
            v.loading = false;
            console.log(response.data);
            v.post = response.data;
            console.log(v.post)
          })
          .catch((error) => {
            v.error = error.toString();
            console.log(error)
          })
      }
    }
  }
</script>

<style lang="less">
  @import "~@static/assets/global/less/page/blog";
</style>
