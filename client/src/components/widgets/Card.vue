<template>
  <div class="card" :class="[cardType]">
    <div class="card-header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="card-body">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Card extends Vue {
  @Prop({ type: String }) type!: string;
  @Prop({ default: () => {}, type: Object }) header: any;

  get cardType() {
    return this.type ? `card-${this.type}` : "";
  }
}
</script>

<style lang="stylus">
$theme-color = #2ecc71;

.card {
  margin-bottom: 2.2rem;
  box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.08);
  background-color: #fff;

  .card-body {
    padding: 2.2rem 2.2rem;
    color: #575962;
  }
}
</style>
