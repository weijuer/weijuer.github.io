<template>
  <div class="card" :class="[cardType]">
    <div class="card-header">
      <h3 class="card-title" v-if="$slots.title || title">
        <slot name="title">{{ title }}</slot>
      </h3>
      <div class="card-desc" v-if="$slots.desc || desc" @click="descHandler">
        <slot name="desc">{{ desc }}</slot>
      </div>
    </div>
    <div class="card-body">
      <slot />
    </div>
  </div>
</template>

<script>
import { reactive, computed, toRefs } from 'vue'

export default {
  name: 'w-card',
  props: {
    type: String,
    title: { default: () => {}, type: [Object, String] },
    desc: String
  },
  emits: ['desc-click'],
  setup(props, context) {
    const state = reactive({
      cardType: computed(() => (props.type ? `card-${props.type}` : ''))
    })

    function descHandler() {
      context.$emit('desc-click')
    }

    return {
      ...toRefs(state),
      descHandler
    }
  }
}
</script>

<style lang="stylus">
$theme-color = #2ecc71

.card
  display: flex
  flex-grow: 1
  flex-direction: column
  margin-bottom: 20px
  padding: 1rem
  box-shadow: 0 0 13px 0 rgba(82, 63, 105, 0.05)
  background-color: #fff
  border-radius: 10px

  &.card-sticky
    position: sticky

  &:after
    content: ""
    display: block
    filter: blur(1px)

  .card-header
    padding: 0.5rem 0 1rem 0
    margin-bottom: 0.5rem

    .card-title
      display: flex
      font-size: 1rem
      font-weight: 500
      margin-bottom: 0
      color: #595d6e

    .card-desc
      display: inline-block
      margin-top: 0.2rem
      color: #74788d

  .card-body
    color: #575962
</style>
