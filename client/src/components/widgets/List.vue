<template>
  <div ref="container" class="w-list" :class="listType" @scroll="handleScroll">
    <ul :style="getVirtualStyle()">
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

  // 开始索引
  startIndex: number = 0;
  // 结束索引
  endIndex: number = 0;
  // 开始索引偏移量
  startOffset: number = 0;

  getVirtualStyle() {
    return {
      transform: `translateY(${this.startOffset}px)`
    };
  }

  handleScroll() {
    const container: any = this.$refs.container;
    const top = container.scrollTop;
    this.startOffset = top;
    this.startIndex = Math.floor(top / 30);
    this.endIndex = this.startIndex * 20;
  }
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
