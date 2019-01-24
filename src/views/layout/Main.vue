<template>
  <main class="app-main">
    <transition :name="transitionName" mode="out-in">
      <router-view class="app-content" />
    </transition>
  </main>
</template>

<script>
export default {
  name: "page-main",
  data () {
    return {
      transitionName: 'fade'
    }
  }
};
</script>

<style lang="less" scoped>
    //消失时间持续3s
    .fade-enter-active{
      transition: all .5s .3s;
    }

    //显示时间持续1.5s
    .fade-leave-active{
      transition: all .3s .2s;        
    }

    .fade-enter, .fade-leave-active{
        opacity: 0;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>


