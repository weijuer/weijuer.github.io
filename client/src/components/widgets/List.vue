<template>
  <div class="w-list" @scroll="handleScroll">
    <ul>
      <slot />
    </ul>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
export default class WList extends Vue {
  handleScroll() {}
}
</script>

<style lang="stylus">
.w-list
  position: relative
  z-index: 1
</style>
