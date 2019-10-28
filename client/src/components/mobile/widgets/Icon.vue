<template>
  <svg class="icon">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component
export default class WIcon extends Vue {
  @Prop()
  name!: string;
  @Getter
  themeColor!: string;

  private get iconName() {
    return this.name ? `#icon-${this.name}` : "#";
  }
}
</script>

<style lang="stylus" scoped>
@import "../../../assets/css/core/vars.styl"

.icon
  padding: 0
  margin: 0
  width 28px
  height 28px
  display: flex
  justify-content: flex-start

  for theme in $themes
    &.{theme}
      color: $themes[theme]
</style>
