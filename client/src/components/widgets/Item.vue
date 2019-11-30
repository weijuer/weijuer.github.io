<template>
  <li>
    <a v-if="link" :href="link" class="item-link item-content">
      <div class="item-media">
        <slot name="media" />
      </div>
      <div class="item-inner"></div>
    </a>
    <div v-else class="item-content">
      <div class="item-inner">
        <div class="item-title">{{ title }}</div>
        <div class="item-after">
          <slot name="after" />
        </div>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
export default class WItem extends Vue {
  @Prop({ type: String })
  link!: string;
  @Prop({ type: String })
  title!: string;
  @Prop({ type: String })
  subTitle!: string;
  @Prop()
  after!: any;
  @Prop({ type: String })
  text!: string;
}
</script>

<style lang="stylus">
.w-list
  .item-content
    display: flex
    justify-content: space-between
    box-sizing: border-box
    align-items: center

  .item-link
    position: relative
    overflow: hidden
    z-index: 0
    transition: all 0.3s
    cursor: pointer
    user-select: none

  .item-media
    display: flex
    flex-shrink: 0
    flex-wrap: nowrap
    align-items: center
    box-sizing: border-box

  .item-inner
    position: relative
    width: 100%
    min-width: 0
    display: flex
    justify-content: space-between
    box-sizing: border-box
    align-items: center
    align-self: stretch

.media-list
  .item-media
    align-self: flex-start

    img
      display: block
</style>
