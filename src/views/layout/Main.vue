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
  margin: 2em 0;
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
  transition: all 0.5s 0.3s;
}

// 显示时间持续1.5s
.fade-leave-active {
  transition: all 0.3s 0.2s;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
