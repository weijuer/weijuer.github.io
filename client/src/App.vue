<template>
  <div id="app" class="app-page default">
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
import Layout from "@layout";
import Widgets from "@widgets";

@Component({
  components: {
    Svgs: Layout.Svgs,
    BackToTop: Widgets.BackToTop,
    Loading: Layout.Loading,
    Header: Layout.Header,
    Main: Layout.Main,
    Footer: Layout.Footer
  }
})
export default class App extends Vue {}
</script>

<style lang="stylus" src="@/assets/css/index.styl" />
