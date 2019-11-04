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
import { Header, Loading, Main, Footer, Svgs } from "@layout";
import { BackToTop } from "@widgets";

@Component({
  components: {
    Header,
    Loading,
    Main,
    Footer,
    Svgs,
    BackToTop
  }
})
export default class App extends Vue {}
</script>

<style lang="stylus" src="@/assets/css/index.styl" />
