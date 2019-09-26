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
</style>
