<template>
  <div class="media" :class="[mediaType]">
    <div class="media-header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="media-body">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Media extends Vue {
  @Prop({ type: String }) type!: string;
  @Prop({ default: () => {}, type: Object }) header: any;

  get mediaType() {
    return this.type ? `media-${this.type}` : "";
  }
}
</script>

<style lang="stylus">
$theme-color = #2ecc71

.media
  display: flex
  padding: 1rem 0
  position: relative
  overflow: hidden
  background: #fff
  border-bottom: 1px dashed #aaa

  &:last-child
    border-bottom: none

  .media-header
    margin-right: 1rem

    img,
    .media-image
      width: 4rem
      height: 4rem
      border-radius: 50%

  .media-body
    color: #575962
</style>
