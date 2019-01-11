<template>
  <div class="blog">
    <h3 v-text="blog.title"></h3>
    <div v-html="blog.content"></div>
  </div>
</template>

<script>
  export default {
    name: 'blog-details',
    data() {
      return {
        blog: null
      }
    },
    props: ['blog'],
    mounted() {
      console.log('-----mounted')

      // 获取indexedDB数据
      // this.get_indexedDB_data()
    },
    methods: {
      get_indexedDB_data: function (params) {
        // 1.1 分页参数
        if (!params) {
          params = {
            currentPage: this.currentPage,
            pageSize: this.pageSize
          }
        }

        // 2.初始化timelineDB
        db.find('timeline', 'title').then((res) => {
          this.timeline = res;
          console.log(res);
        });
      }
    }
  }
</script>
