<template>
  <footer class="app-footer">
    <div class="container">
      <section class="app-footer-section">
        <div class="copyright">Powered By Weijuer @2018-2019</div>
        <a
          class="ICP btn-link"
          href="http://www.beian.miit.gov.cn/"
          target="_black"
        >苏ICP备19065586号-1</a>
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 0;
  font-size: 14px;

  .copyright,
  .ICP
    padding: 0 6px;

@media (max-width: 768px)
  .app-footer-section
    flex-direction: column;
</style>
