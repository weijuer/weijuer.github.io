<template>
  <div class="wj-go-top" :data-tips="top" :class="{ 'active': pageOnScroll}" @click="backToTop">
    <i class="fa fa-arrow-up"></i>
  </div>
</template>

<script>
  export default {
    name: 'go-top',
    data () {
      return {
        top: '去顶部',
        pageOnScroll: false,
        delay: 0
      }
    },
    props: ['isScroll'],
    mounted () {
      // 1.绑定页面监听滚动事件
      window.addEventListener('scroll', this.pageScroll)
    },
    methods: {
      // 2.滚动事件处理
      pageScroll () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        let offsetTop = document.querySelector('.wj-navbar').offsetTop
        this.pageOnScroll = scrollTop > offsetTop

        // 5.通知外界，调用此方法
        this.$emit('pageScroll')
      },
      // 4.回到顶部
      backToTop () {
        // 4.1 scrollTo方法
        // window.scrollTo(0,0)

        // 4.2 scrollBy方法
        window.scrollBy(0, -100) // Only for y vertical-axis
        if (this.pageOnScroll) {
          this.delay = setTimeout(this.backToTop, 10)
        }

        // 4.3 直接修改属性
        // window.pageYOffset = document.documentElement.scrollTop = document.body.scrollTop = 0
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
    -webkit-box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.8);
    -moz-box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.8);
  }

  .wj-go-top.active {
    display: block;
  }
</style>
