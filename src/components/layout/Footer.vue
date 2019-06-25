<template>
  <footer class="app-footer">
    <div class="container">
      <section class="app-footer-section">
        @Weijuer | Powered By Weijuer @2018-2019
      </section>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>

<style lang="stylus">
.app-footer-section
  display: flex
  justify-content: center
  font-size: 14px
</style>
