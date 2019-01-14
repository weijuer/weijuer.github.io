<template>
  <div id="app" :class="['app-page', 'default', isSideMenuActive ? 'app-side-menu-active' : '']">
    <pageHeader/>
    <pageMain/>
    <pageFooter/>
    <backTop/>
  </div>
</template>

<script>
import pageHeader from "./Header";
import pageMain from "./Main";
import pageFooter from "./Footer";
import backTop from "@/components/backTop";
import { mapState } from "vuex";

export default {
  name: "app-layout",
  computed: {
    ...mapState(["isSideMenuActive"])
  },
  components: {
    pageHeader,
    pageMain,
    pageFooter,
    backTop
  }
};
</script>

<style lang="less" src="@/assets/global/less/index.less" />

