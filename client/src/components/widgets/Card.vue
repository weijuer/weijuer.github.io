<template>
  <div class="card" :class="[cardType]">
    <div class="card-header">
      <h3 class="card-title" v-if="$slots.title || title">
        <slot name="title">{{ title }}</slot>
      </h3>
      <span class="card-desc">{{ desc }}</span>
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
  @Prop({ type: String })
  type!: string;

  @Prop({ default: () => {}, type: Object })
  title: any;

  @Prop({ type: String })
  desc!: string;

  get cardType() {
    return this.type ? `card-${this.type}` : "";
  }
}
</script>

<style lang="stylus">
$theme-color = #2ecc71;

.card
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 1rem;
  box-shadow: 0 0 13px 0 rgba(82, 63, 105, 0.05);
  background-color: #fff;
  border-radius: 10px;

  &:after
    content: '';
    display: block;
    filter: blur(1px);

  .card-header
    padding: 0.5rem 0 1rem 0;
    margin-bottom: 0.5rem;

    .card-title
      display: flex;
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 0;
      color: #595d6e;

    .card-desc
      display: inline-block;
      margin-top: 0.2rem;
      color: #74788d;

  .card-body
    color: #575962;
</style>
