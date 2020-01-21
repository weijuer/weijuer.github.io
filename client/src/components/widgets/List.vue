<template>
  <div class="w-list" :class="listType" @scroll="handleScroll">
    <ul>
      <slot />
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class WList extends Vue {
  @Prop({ type: Boolean, default: false })
  simpleList!: boolean;

  @Prop({ type: Boolean, default: false })
  linksList!: boolean;

  @Prop({ type: Boolean, default: false })
  mediaList!: boolean;

  @Prop({ type: Boolean, default: false })
  virtualList!: boolean;

  get listType() {
    const { simpleList, linksList, mediaList, virtualList } = this.$props;

    return {
      "simple-list": simpleList,
      "links-list": linksList,
      "media-list": mediaList,
      "virtual-list": virtualList
    };
  }
  handleScroll() {}
}
</script>

<style lang="stylus">
.w-list
  position: relative
  z-index: 1

  ul
    margin: 0
    padding: 0
    list-style: none
    position: relative
    background: #fff

    &:before
      content: ""
      position: absolute
      background-color: #eee
      display: block
      z-index: 15
      top: 0
      right: auto
      bottom: auto
      left: 0
      height: 1px
      width: 100%
      transform-origin: 50% 0%

    &:after
      content: ""
      position: absolute
      background-color: #eee
      display: block
      z-index: 15
      top: auto
      right: auto
      bottom: 0
      left: 0
      height: 1px
      width: 100%
      transform-origin: 50% 100%
</style>
