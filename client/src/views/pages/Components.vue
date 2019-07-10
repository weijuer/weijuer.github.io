<template>
  <main class="components-page">
    <div class="container">
      <div class="popular-components">
        <aside class="sidebar"></aside>
        <div class="components"></div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component
export default class Components extends Vue {}
</script>

<style lang="stylus">
.popular-components
  display: grid
  grid-template-columns: 300px minmax(0, 1fr)
  gap: 4rem
</style>
