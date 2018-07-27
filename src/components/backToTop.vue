<template>
  <a :data-tips="top" :class="['back-to-top', {'active': isPageScroll}]" @click="backToTop">
    <svg class="icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3694"><path d="M752.736 431.063C757.159 140.575 520.41 8.97 504.518 0.41V0l-0.45 0.205-0.41-0.205v0.41c-15.934 8.56-252.723 140.165-248.259 430.653-48.21 31.457-98.713 87.368-90.685 184.074 8.028 96.666 101.007 160.768 136.601 157.287 35.595-3.482 25.232-30.31 25.232-30.31l12.206-50.095s52.47 80.569 69.304 80.528c15.114-1.23 87-0.123 95.6 0h0.82c8.602-0.123 80.486-1.23 95.6 0 16.794 0 69.305-80.528 69.305-80.528l12.165 50.094s-10.322 26.83 25.272 30.31c35.595 3.482 128.574-60.62 136.602-157.286 8.028-96.665-42.475-152.617-90.685-184.074z m-248.669-4.26c-6.758-0.123-94.781-3.359-102.891-107.192 2.95-98.714 95.97-107.438 102.891-107.93 6.964 0.492 99.943 9.216 102.892 107.93-8.11 103.833-96.174 107.07-102.892 107.192z m-52.019 500.531c0 11.838-9.42 21.382-21.012 21.382a21.217 21.217 0 0 1-21.054-21.34V821.74c0-11.797 9.421-21.382 21.054-21.382 11.591 0 21.012 9.585 21.012 21.382v105.635z m77.333 57.222a21.504 21.504 0 0 1-21.34 21.626 21.504 21.504 0 0 1-21.34-21.626V827.474c0-11.96 9.543-21.668 21.299-21.668 11.796 0 21.38 9.708 21.38 21.668v157.082z m71.147-82.043c0 11.796-9.42 21.34-21.053 21.34a21.217 21.217 0 0 1-21.013-21.34v-75.367c0-11.755 9.421-21.299 21.013-21.299 11.632 0 21.053 9.544 21.053 21.3v75.366z" fill="" p-id="3695"></path></svg>
  </a>
</template>

<script>
  export default {
    name: 'back-to-top',
    data() {
      return {
        top: '去顶部',
        delay: 0
      }
    },
    props: ['isScroll'],
    mounted() {
      // 1.绑定页面监听滚动事件
      window.addEventListener('scroll', this.pageScroll)
    },
    computed: {
      ...mapGetters([
        'isPageScroll'
      ]),

      /*isPageScroll() {
        return this.$store.state.isPageScroll;
      }*/
    },
    methods: {
      ...mapActions({

      }),

      // 2.滚动事件处理
      pageScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        let offsetTop = document.querySelector('.app-header').offsetTop;
        this.$store.state.isPageScroll = scrollTop > offsetTop;

        // 5.通知外界，调用此方法
        // this.$emit('pageScroll');
      },
      // 4.回到顶部
      backToTop() {
        // 4.1 scrollTo方法
        // window.scrollTo(0,0)

        // 4.2 scrollBy方法
        // Only for y vertical-axis
        window.scrollBy(0, -100);
        if (this.$store.state.isPageScroll) {
          this.delay = setTimeout(this.backToTop, 10)
        }

        // 4.3 直接修改属性
        // window.pageYOffset = document.documentElement.scrollTop = document.body.scrollTop = 0
      }
    },
    destroyed() {
      // 去除页面监听事件
      window.removeEventListener('scroll', this.pageScroll)
    }
  }
</script>

<style lang="less" scoped>
  .back-to-top {
    display: inline-block;
    opacity: 0;
    padding: 8px;
    width: 40px;
    height: 40px;
    position: fixed;
    bottom: 0;
    right: 20px;
    z-index: 110;
    color: #24292e;
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    -webkit-transition: all .36s ease-in-out;
    transition: all .36s ease-in-out;

    &.active {
      opacity: .8;
      bottom: 4%;
      -webkit-transform: scale(1) rotate(-1turn) translate(0);
      transform: scale(1) rotate(-1turn) translate(0);
    }
  }

  .back-to-top {
    background: #fff;
    -webkit-box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.8);
    -moz-box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.8);
  }
</style>
