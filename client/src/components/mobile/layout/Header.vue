<template>
  <header class="header">
    <div class="header-title" v-if="$slots.title || title">
      <slot name="title">{{ title }}</slot>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component
export default class Header extends Vue {
  @Prop()
  title: string;
}
</script>

<style scoped lang="stylus">
.logo
  position: relative
  width: 220px
  height: 60px

  .icon-logo
    width: 100%
    height: 100%
    color #fff
</style>
