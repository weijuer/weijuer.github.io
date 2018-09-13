<template>
  <div class="app">
    <banner :items="banners" :height="height">
      <div class="banner-media" slot-scope="{ item }">
        <img class="banner-img" :src="item.imgSrc" alt="banner-img" />
        <p class="banner-describe">{{ item.describe }}</p>
      </div>
    </banner>
  </div>
</template>

<script>
  import banner from '@/components/banner'
  export default {
    name: 'music',
    data() {
      return {
        banners: [],
        height: '300px'
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

      // 获取数据
      this.get_banner_list()
    },
    methods: {
      // 1.请求本地数据
      get_banner_list: function () {
        // 1.2 获取后台模拟数据
        this.$ajax.get('/api/banners')
          .then((response) => {
            this.banners = response.data.data.bannerList;
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  }
</script>
