<template>
  <transition name="fade" mode="out-in">
    <router-view class="main" />
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class WMain extends Vue {}
</script>

<style lang="stylus">
.main
  will-change: scroll-position
  overflow: auto
  webkit-overflow-scrolling: touch
  box-sizing: border-box
  height: 100%
  position: relative
  z-index: 1
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1)

.slide-left-enter,
.slide-right-leave-active
  opacity: 0
  transform: translate(0, 30px)

.slide-left-leave-active,
.slide-right-enter
  opacity: 0
  transform: translate(0, -30px)

.fade-enter-active
  transition: all 0.5s 0.3s ease-in-out

.fade-leave-active
  transition: all 0.3s 0.2s ease-in-out

.fade-enter,
.fade-leave-active
  opacity: 0
  transform: translate(0, -30px)
</style>
