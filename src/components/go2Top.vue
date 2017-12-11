<template>
  <div class="wj-go-top" :data-tips="top" :class="pageOnScroll ? 'active':'' " @click="backToTop()">
    <i class="fa fa-arrow-up"></i>
  </div>
</template>

<script>
  export default {
    name: 'go-top',
    data () {
      return {
        top: '去顶部',
        pageOnScroll: false
      }
    },
    mounted () {
      // 1.绑定页面监听滚动事件
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      // 2.滚动事件处理
      handleScroll () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        console.log(scrollTop)

        let offsetTop = document.querySelector('.wj-navbar').offsetTop
        this.pageOnScroll = scrollTop > offsetTop
      },
      // 4.回到顶部
      backToTop () {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        scrollTop = 0
      }
    },
    destroyed () {
      // 3.去除页面监听事件
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style scoped>
  .wj-go-top {
    width: 40px;
    height: 40px;
    position: fixed;
    bottom: 40px;
    right: 20px;
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
    display: none;
    padding-top: 9px;
    z-index: 110;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
  }

  .wj-go-top {
    background: #fff;
    -webkit-box-shadow: 0px 0px 15px 1px rgba(113, 106, 202, 0.2);
    -moz-box-shadow: 0px 0px 15px 1px rgba(113, 106, 202, 0.2);
    box-shadow: 0px 0px 15px 1px rgba(113, 106, 202, 0.2);
  }

  .wj-go-top.active {
    display: block;
  }
</style>
