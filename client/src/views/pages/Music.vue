<template>
  <div class="music">
    <h1>This is an about page</h1>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
@Component
export default class Music extends Vue {}
</script>
<style lang="stylus">
.normal-articles
  display: grid
  grid-template-columns: 30% minmax(0, 1fr)
  gap: 2rem
</style>
