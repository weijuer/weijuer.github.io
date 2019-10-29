<template>
  <div class="media" :class="[mediaType]" @click="getSong">
    <div class="media-header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="media-body">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component
export default class Media extends Vue {
  @Prop({ type: String })
  type!: string;

  @Prop({ default: () => {}, type: Object })
  header: any;

  @Emit("getMediaSong")
  getSong() {}

  get mediaType() {
    return this.type ? `media-${this.type}` : "";
  }
}
</script>

<style lang="stylus">
$theme-color = #2ecc71

.media
  display: flex
  padding: 1rem
  position: relative
  overflow: hidden
  background: #fff

  &:after
    content: ""
    position: absolute
    display: block
    left: 3rem
    bottom: 0
    width: 100%
    height: 1px
    background: #ebedf2

  &:last-child
    border-bottom: none

  .media-header
    margin-right: 1rem

    img,
    .media-image
      width: 3rem
      height: 3rem
      border-radius: 4px

  .media-body
    color: #575962
</style>
