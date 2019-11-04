<template>
  <transition name="fade">
    <svg class="progress-bar">
      <defs>
        <linearGradient id="gradient">
          <stop stop-color="#6E4AE2" offset="0%" />
          <stop stop-color="#78F8EC" offset="100%" />
        </linearGradient>
      </defs>
      <circle class="progress-circle" cx="50" cy="50" r="40" />
      <circle
        class="progress-circle active-circle"
        cx="50"
        cy="50"
        r="40"
        :stroke-dasharray="dasharray"
      />
      <text class="progress-percent" x="50" y="55">{{ percent + "%" }}</text>
    </svg>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop, Ref } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component
export default class WProgress extends Vue {
  @Prop({ type: Number, default: "" })
  percent: number;

  @Prop({ type: String, default: "" })
  dasharray: string;

  updateDasharray() {
    let _percent = this.percent / 100;
    let perimeter = Math.PI * 2 * 40;
    this.dasharray = perimeter * _percent + " " + perimeter * (1 - _percent);
  }
}
</script>

<style lang="stylus">
@import "../../assets/css/core/vars.styl"

.progress
  display inline-flex
  flex-direction column
  justify-content center
  align-items center
  margin 8px

  .progress-bar
    width 100px
    height 100px

  .progress-text
    margin 10px auto
    color #4b88fa

  .progress-circle
    stroke-width 20px
    stroke #d1d3d7
    fill none
    transition all 0.3s

    &.active-circle
      stroke url("#gradient")
      transform matrix(0, -1, 1, 0, 0, 100)

  .progress-percent
    font-size 12px
    fill #4b88fa
    text-anchor middle
</style>
