<template>
  <header class="header">
    <div class="header-left">
      <slot name="left-actions"></slot>
    </div>
    <div class="header-title" :class="themeColor" v-if="$slots.title || title">
      <slot name="title">
        {{ title }}
        <span class="subtitle" v-if="subtitle">{{ subtitle }}</span>
      </slot>
    </div>
    <div class="header-right">
      <slot name="right-actions"></slot>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component
export default class WHeader extends Vue {
  @Prop()
  title!: string;
  @Prop()
  subtitle!: string;
  @Getter
  themeColor!: string;
}
</script>

<style lang="stylus">
.header
  position: relative
  padding: 0 8px
  display: flex
  justify-content: space-between
  height: var(--navbar-height)
  align-items: center

  .header-left,
  .header-right
    flex-shrink: 0
    display: flex
    justify-content: flex-start
    align-items: center
    transform: translate3d(0, 0, 0)

  .header-left
    margin-right: 10px

  .header-right
    margin-left: 10px

  .header-title
    position: relative
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap
    font-size: 1rem
    font-weight: bold
</style>
