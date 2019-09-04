<template>
  <div class="media-progress">
    <div class="progress-bar" ref="$progress"></div>
    <div class="progress-pointer"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Ref } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
export default class Slider extends Vue {}
</script>

<style lang="stylus" scoped></style>
