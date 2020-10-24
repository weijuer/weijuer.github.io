<template>
  <button
    class="w-btn"
    @click="handleClick"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      btnType,
      btnSize,
      btnOutline,
      btnBlock,
      {
        'is-disabled': disabled,
        'is-round': round,
      },
    ]"
  >
    <i :class="icon" v-if="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'w-button',
  props: {
    size: String,
    type: String,
    nativeType: {
      type: String,
      default: 'button',
    },
    outline: String,
    block: Boolean,
    disabled: Boolean,
    round: Boolean,
    autofocus: Boolean,
    icon: {
      type: String,
      default: '',
    },
  },
  computed: {
    btnType() {
      return this.type ? `w-btn-${this.type}` : ''
    },
    btnSize() {
      return this.size ? `w-btn-${this.size}` : ''
    },
    btnOutline() {
      return this.outline ? `w-btn--outline-${this.outline}` : ''
    },
    btnBlock() {
      return this.block === 'true' ? 'w-btn-block' : ''
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    },
  },
  mounted() {
    this.$emit('click', event)
  },
}
</script>

<style src="@/assets/style/core/_buttons.styl" lang="stylus"></style>
