<template>
  <div id="index" class="app-page default">
    <Svgs />
    <Loading />
    <Header />
    <Main />
    <Footer />
    <BackToTop />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Layout from "@webLayout";
import { BackToTop } from "@webWidgets";

@Component({
  components: {
    Svgs: Layout.Svgs,
    BackToTop: BackToTop,
    Loading: Layout.Loading,
    Header: Layout.Header,
    Main: Layout.Main,
    Footer: Layout.Footer
  }
})
export default class Index extends Vue {}
</script>

<style lang="stylus" src="@/assets/css/index.styl" />
