<template>
  <w-link :class="['back-to-top', { active: isPageScroll }]" @click="backToTop">
    <w-icon name="back-top" />
  </w-link>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action, Mutation } from "vuex-class";
import Icon from "./Icon.vue";
import Link from "./Link.vue";

@Component({
  components: {
    wLink: Link,
    wIcon: Icon
  }
})
export default class BackToTop extends Vue {
  @Getter
  isPageScroll?: boolean;

  @Mutation("PAGE_ON_SCROLL")
  pageOnScroll!: () => void;

  @Action("BACK_TO_TOP")
  backToTop!: () => void;

  created() {
    // 1.绑定页面监听滚动事件
    document.addEventListener("scroll", this.pageOnScroll);
  }

  destroyed() {
    // 2.去除页面监听事件
    document.removeEventListener("scroll", this.pageOnScroll);
  }
}
</script>

<style lang="stylus" scoped>
.back-to-top
  display: inline-block
  opacity: 0
  padding: 8px
  width: 40px
  height: 40px
  position: fixed
  bottom: -10%
  right: 6px
  z-index: 110
  color: #24292e
  cursor: pointer
  text-align: center
  vertical-align: middle
  border-radius: 100%
  transition: all 0.5s cubic-bezier(0.815, 1.65, 0.4, 0.68)

  &.active
    opacity: 0.8
    bottom: 4%

.back-to-top
  background: #fff
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.8)

  &:hover,
  &:focus
    color: #333 !important

@media (max-width: 768px)
  .back-to-top
    &.active
      bottom: 10%
</style>
