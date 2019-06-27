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
import Svgs from "@components/layout/Svgs.vue";
import Loading from "@components/layout/Loading.vue";
import Header from "@components/layout/Header.vue";
import Main from "@components/layout/Main.vue";
import Footer from "@components/layout/Footer.vue";
import BackToTop from "@components/widgets/BackToTop.vue";

@Component({
  components: {
    Svgs,
    BackToTop,
    Loading,
    Header,
    Main,
    Footer
  }
})
export default class App extends Vue {}
</script>

<style lang="stylus" src="@/assets/css/index.styl" />
