<template>
  <transition name="fade" mode="out-in">
    <router-view class="app-main" />
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Main extends Vue {}
</script>

<style lang="stylus">
.app-main {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  transform: translate(0, 30px);
}

.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  transform: translate(0, -30px);
}

.fade-enter-active {
  transition: all 0.5s 0.3s ease-in-out;
}

// 显示时间持续1.5s
.fade-leave-active {
  transition: all 0.3s 0.2s ease-in-out;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
  transform: translate(0, -30px);
}

.scale-enter, .scale-leave-to {
      transform: scale(0)
}
.scale-leave, .scale-enter-to {
      transform: scale(1)
}
.scale-enter-active, .scale-leave-active {
      transition: all .2s
}

.top-enter, .top-leave-to {
      transform: translate3d(0,-100%, 0)
}
.top-leave, .top-enter-to {
      transform: translate3d(0, 0, 0)
}
.top-enter-active, .top-leave-active {
      transition: all .2s
}

.bottom-enter, .bottom-leave-to {
      transform: translate3d(0,100%, 0)
}
.bottom-leave, .bottom-enter-to {
      transform: translate3d(0, 0, 0)
}
.bottom-enter-active, .bottom-leave-active {
      transition: all .2s
}
</style>
