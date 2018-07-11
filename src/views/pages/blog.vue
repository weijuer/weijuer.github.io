<template>
  <div class="app">

  </div>
</template>

<script>
  export default {
    name: 'blog',
    data() {
      return {
        timeline: [],
        dbInit: false
      }
    },
    beforeCreate() {
      console.log('beforeCreate=====>')
    },
    created() {
      console.log('-----home created')
    },
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
