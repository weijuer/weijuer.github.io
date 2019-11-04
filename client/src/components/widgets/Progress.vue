<template>
  <transition name="fade">
    <div class="progress">
      <svg class="progress-bar">
        <circle class="progress-circle" cx="17" cy="17" r="15" />
        <circle
          class="progress-circle active-circle"
          cx="17"
          cy="17"
          r="15"
          :stroke-dasharray="updateDasharray"
        />
        <!-- <text class="progress-percent" x="50" y="55">{{ percent + "%" }}</text> -->
      </svg>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop, Ref } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component
export default class WProgress extends Vue {
  @Prop({ type: [Number, String], default: 0 })
  percent: number = 0;

  private get updateDasharray() {
    let _percent = this.percent / 100;
    let perimeter = Math.PI * 2 * 15;
    return perimeter * _percent + " " + perimeter * (1 - _percent);
  }
}
</script>

<style lang="stylus">
@import "../../assets/css/core/vars.styl"

.progress
  display: inline-flex
  flex-direction: column
  justify-content: center
  align-items: center

  .progress-bar
    width: 34px
    height: 34px

  .progress-text
    margin: 10px auto
    color: #4b88fa

  .progress-circle
    stroke-width: 2px
    stroke: #d1d3d7
    fill: none
    transition: all 0.3s

    &.active-circle
      stroke: $themeColor
      transform: matrix(0, -1, 1, 0, 0, 34)

  .progress-percent
    font-size: 12px
    fill: #4b88fa
    text-anchor: middle
</style>
