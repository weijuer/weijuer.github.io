<template>
  <div
    ref="$progress"
    class="progress"
    @mousedown="handleMouseDown"
    @touchstart="handleChange"
    @touchmove="handleChange"
  >
    <div class="progress-bar" :style="getProgressStyle"></div>
    <div class="progress-track"></div>
    <div class="progress-pointer" :style="getPointerStyle"></div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  PropSync,
  Ref,
  Emit
} from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component
export default class WSlider extends Vue {
  // 方向：[horizontal | vertical]
  @Prop({ default: "horizontal", type: String })
  direction!: string;

  // 最小值
  @Prop({ default: 0, type: Number })
  min!: number;

  // 最大值
  @Prop({ default: 1, type: Number })
  max!: number;

  // 当前值
  @Prop({ type: [Number, String] })
  value!: number;

  @Ref("$progress")
  private readonly $progress!: HTMLDivElement;

  // 进度条
  private get progress() {
    return this.value;
  }

  private get getProgressStyle() {
    return { width: `${this.progress * 100}%` };
  }

  private get getPointerStyle() {
    return { left: `${this.progress * 100}%` };
  }

  @Emit("change")
  handleChange(e: any, skip: boolean = false) {
    !skip && e.cancelable && e.preventDefault();
    let progress = 0;
    const _progress = this.$progress;
    const containerWidth = _progress.clientWidth;
    const containerHeight = _progress.clientHeight;
    let xOffset = _progress.getBoundingClientRect().left + window.pageXOffset;
    let yOffset = _progress.getBoundingClientRect().top + window.pageYOffset;
    let pageX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
    let pageY = e.pageY || (e.touches ? e.touches[0].pageY : 0);
    let left = pageX - xOffset;
    let top = pageY - yOffset;

    // 计算百分比
    if (this.direction === "vertical") {
      progress = top / containerHeight;
    } else {
      progress = left / containerWidth;
    }

    // 限制最大最小值
    progress = progress > this.min ? progress : this.min;
    progress = progress < this.max ? progress : this.max;

    // 返回
    return progress.toFixed(2);
  }

  handleMouseDown(e: Event) {
    this.handleChange(e, true);
    window.addEventListener("mousemove", this.handleChange);
    window.addEventListener("mouseup", this.handleMouseUp);
  }

  handleMouseUp(e: Event) {
    this.unbindEventListeners();
  }

  unbindEventListeners() {
    window.removeEventListener("mousemove", this.handleChange);
    window.removeEventListener("mouseup", this.handleMouseUp);
  }
}
</script>

<style lang="stylus" scoped>
@import "../../assets/css/core/vars.styl"

.progress
  margin: 4px 0
  position: relative
  height: 4px
  cursor: pointer

  .progress-bar
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    z-index: 2018
    border-radius: 4px
    background: $themeColor
    transition: all 10ms linear

  .progress-track
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    border-radius: 4px
    background: #7d7d7d

  .progress-pointer
    display: inline-block
    position: absolute
    top: 50%
    z-index: 2019
    width: 12px
    height: 12px
    border: 2px solid $themeColor
    border-radius: 50%
    cursor: pointer
    background-color: #fff
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37)
    transform: translate(-6px, -50%)
    transition: all 10ms linear

    &:hover,
    &.progress-pointer-pressed
      transform: scale(1.5) translate(-33.333%, -33.333%)
</style>
