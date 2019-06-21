<template>
  <div id="app" class="app-page default">
    <Loading />
    <Header />
    <Main />
    <Footer />
    <BackToTop />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import Loading from "@views/layout/Loading.vue";
import Header from "@views/layout/Header.vue";
import Main from "@views/layout/Main.vue";
import Footer from "@views/layout/Footer.vue";
import BackToTop from "@components/widgets/BackToTop.vue";

@Component({
  components: {
    BackToTop,
    Loading,
    Header,
    Main,
    Footer
  }
})
export default class App extends Vue {
  @Action("INIT_DB") init_db!: () => void;

  created() {
    this.initDB();
  }

  async initDB() {
    await this.init_db();
  }
}
</script>

<style lang="stylus" src="@/assets/css/index.styl" />
