<template>
  <div class="app">
    <banner :items="banners" :height="height" />
  </div>
</template>

<script>
  import banner from '@/components/banner'
  export default {
    name: 'home',
    data() {
      return {
        banners: [1,2,3,4,5,6],
        height: '400px',
        dbInit: false
      }
    },
    components: {
      banner
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
