<template>
  <svg class="icon">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component
export default class WIcon extends Vue {
  @Prop()
  name!: string;

  private get iconName() {
    return this.name ? `#icon-${this.name}` : "#";
  }
}
</script>

<style lang="stylus">
@import '../../assets/css/core/vars.styl';

.icon
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  fill: currentColor;

  for theme in $themes
    &.{theme}
      color: $themes[theme];
</style>
