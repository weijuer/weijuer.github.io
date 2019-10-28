<template>
  <div class="list" :class="[listType]"><slot /></div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component
export default class WList extends Vue {
  @Prop()
  type!: string;
  @Getter
  themeColor!: string;

  private get listType() {
    return this.type ? `list-${this.type}` : "";
  }
}
</script>

<style lang="stylus" scoped>
@import "../../../assets/css/core/vars.styl"

.list
  padding: 0
  margin: 0

  for theme in $themes
    &.{theme}
      color: $themes[theme]
</style>
