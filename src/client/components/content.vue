<template>
  <div class="wj-layout-page">
    <!--<div class="wj-layout-breadcrumbs-1 wj-fonts-uppercase wj-fonts-bold wj-bordered wj-bordered-both">
      <breadcrumbs></breadcrumbs>
    </div>-->

    <div class="wj-content-box wj-size-md">
      <transition name="slide-fade" mode="out-in">
        <router-view keep-alive :key="$route.fullpath" class="app-content-view" />
      </transition>
    </div>
  </div>
</template>

<script>
import breadcrumbs from './breadcrumbs'

export default {
  name: 'page-content',
  components: {
    breadcrumbs
  }
}
</script>

<style scoped>
  /* 可以设置不同的进入和离开动画 */
  .slide-fade-enter-active {
    transition: all .5s ease-in;
  }
  .slide-fade-leave-active {
    transition: all .5s ease-out;
  }
  .slide-fade-enter, .slide-fade-leave-to  {
    transform: translateX(6px);
    opacity: 0;
  }
</style>
