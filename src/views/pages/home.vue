<template>
  <div class="app">
    <banner :items="banners" :height="height">
      <div slot="item">
        <img :src="item.imgSrc" alt="banner-img" />
        <span v-text="item.text"></span>
      </div>
    </banner>
  </div>
</template>

<script>
  import banner from '@/components/banner'

  export default {
    name: 'home',
    data() {
      return {
        banners: [1, 2, 3, 4, 5, 6],
        height: '300px',
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
      // this.get_banner_list()
    },
    methods: {
      // 1.请求本地数据
      get_banner_list: function (params) {
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
            this.blogLists = res;

            // 子组件监听到count变化会自动更新DOM
            this.count = res.length
          })
          .catch((error) => {
            console.log(error)
          })
      },
    }
  }
</script>
