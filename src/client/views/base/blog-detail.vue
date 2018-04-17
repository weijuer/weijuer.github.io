<template>
  <div class="container blog-detail">
    <div class="row">
      <div class="col-md-12">

        <div class="loading" v-if="loading">
          Loading...
        </div>

        <div v-if="error" class="error">
          {{ error }}
        </div>

        <div v-if="post" class="content">
          <h2>{{ post.title }}</h2>
          <p>{{ post.body }}</p>
        </div>

        <p>{{ blog }}</p>

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
        post: null,
        blog: null,
        error: null
      }
    },
    created() {
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      this.get_blog_detail()
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'fetchData'
    },
    methods: {
      // 1.3 请求本地indexedDB数据
      get_blog_detail: function (params) {
        // 1.1 分页参数
        if (!params) {
          params = {storeName: 'blog', id: this.$route.params.id}
        }
        let id = this.$route.params.id;
        // 1.2 获取indexedDB模拟数据
        db.find('blog', 'id', ).then((res) => {
          this.blog = res;
          console.log(res);
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
