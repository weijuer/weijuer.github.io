<template>
  <div class="panel" :class="[panelType]">
    <header class="panel-header" v-if="$slots.header || header">
      <div class="panel-header-label">
        <h3 class="panel-header--title">{{ header }}</h3>
      </div>
    </header>
    <div class="panel-body">
      <slot>panel-body</slot>
    </div>
    <div class="panel-footer" v-if="$slots.footer || footer">
      <slot name="footer">{{ footer }}</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Panel extends Vue {
  @Prop({ type: String }) type!: string;
  @Prop({ type: String }) header: any;
  @Prop({ default: () => {}, type: Object }) footer: any;

  get panelType() {
    return this.type ? `panel-${this.type}` : "";
  }
}
</script>

<style lang="stylus" scoped>
.panel
  display: flex
  flex-grow: 1
  flex-direction: column
  box-shadow: 0 0 13px 0 rgba(82, 63, 105, 0.05)
  background-color: #fff
  margin-bottom: 20px
  border-radius: 4px

  &.panel-bordered
    box-shadow: none
    border: 1px solid #ebedf2

  .panel-header
    position: relative
    display: flex
    align-items: stretch
    justify-content: space-between
    position: relative
    padding: 0 1.5625rem
    min-height: 60px
    border-bottom: 1px solid #ebedf2
    transition: height 0.3s

    .panel-header-label
      display: flex
      align-items: center
      align-content: flex-start

      .panel-header--title
        margin: 0
        padding: 0
        font-size: 1.1rem
        font-weight: 500

  .panel-body
    padding: 1.5625rem
    color: #575962

  .panel-footer
    padding: 1.5625rem
    border-top: 1px solid #ebedf2
</style>
