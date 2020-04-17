<template>
  <div
    ref="$container"
    class="w-list"
    :class="listType"
    @scroll="handleScroll()"
  >
    <ul>
      <slot />
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Ref } from "vue-property-decorator";
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

  // 每项高度
  @Prop({ type: Number, default: 20 })
  height!: number;

  // 原始大数据
  @Prop({ type: Object })
  originalData: Array<any>;

  @Ref("$container")
  $container;

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
  start: number = 0;
  // 结束索引
  end: number = 0;
  // 开始索引偏移量
  offset: number = 0;
  // 可视区域集合
  virtualData: Array<any> = [];

  getVirtualStyle() {
    return {
      transform: `translateY(${this.offset}px)`
    };
  }

  updateVisibleData(scrollTop) {
    scrollTop = scrollTop || 0;
  }

  handleScroll() {
    const container: any = this.$container;
    const top = container.scrollTop;
    const virtualCount = Math.ceil(this.$container.clientHeight / this.height);
    this.offset = top;
    this.start = Math.floor(top / this.height);
    this.end = this.start + virtualCount;
    this.virtualData = this.originalData.slice(this.start, this.end);
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
