<template>
  <transition name="fade">
    <svg class="progress-bar" :style="barStyle">
      <circle class="progress-circle" :style="circleStyle" />
      <circle
        class="progress-circle active-circle"
        :style="activeCircleStyle"
      />
      <!-- <text class="progress-percent" x="17" y="55">{{ percent + "%" }}</text> -->
    </svg>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop, Ref } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component
export default class WProgress extends Vue {
  @Prop({ type: Number, default: 2 })
  circleWidth!: number;

  @Prop({ type: Number, default: 0 })
  radius!: number;

  @Prop({ type: Number, default: 0 })
  percent!: number;

  // 圆心位置
  private get circleCenter() {
    return this.radius + this.circleWidth;
  }

  private get barStyle() {
    return {
      width: this.circleCenter * 2,
      height: this.circleCenter * 2
    };
  }

  private get circleStyle() {
    return {
      strokeWidth: this.circleWidth,
      cx: this.circleCenter,
      cy: this.circleCenter,
      r: this.radius
    };
  }

  private get activeCircleStyle() {
    return {
      strokeWidth: this.circleWidth,
      cx: this.circleCenter,
      cy: this.circleCenter,
      r: this.radius,
      strokeDasharray: this.activeDasharray,
      transform: `matrix(0, -1, 1, 0, 0, ${this.circleCenter * 2})`
    };
  }

  private get activeDasharray() {
    let _percent = this.percent / 100;
    let perimeter = Math.PI * 2 * this.radius;
    return perimeter * _percent + " " + perimeter * (1 - _percent);
  }
}
</script>

<style lang="stylus">
@import "../../assets/css/core/vars.styl"

.progress-bar
  display: inline-flex
  justify-content: center
  align-items: center

  .progress-text
    margin: 10px auto
    color: #4b88fa

  .progress-circle
    stroke: #d1d3d7
    fill: none
    transition: all 0.3s

    &.active-circle
      stroke: $themeColor

  .progress-percent
    font-size: 12px
    fill: #4b88fa
    text-anchor: middle
</style>
