<template>
  <span class="pulse">
    <slot v-if="$slots.icon" name="icon"></slot>
  </span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Pulse extends Vue {
  @Prop({ default: () => {}, type: Object })
  icon: any;
}
</script>

<style lang="stylus">
.pulse
  margin: 0 6px;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &:after
    content: '';
    display: block;
    border-radius: 40px;
    height: 40px;
    width: 40px;
    position: absolute;
    animation: kt-pulse 3.5s ease-out;
    animation-iteration-count: infinite;
    opacity: 0;
    border: 3px solid #d8dce6;

  @keyframes kt-pulse
    0%
      -webkit-transform: scale(0.1, 0.1);
      opacity: 0;

    60%
      -webkit-transform: scale(0.1, 0.1);
      opacity: 0;

    65%
      opacity: 1;

    100%
      -webkit-transform: scale(1.2, 1.2);
      opacity: 0;
</style>
