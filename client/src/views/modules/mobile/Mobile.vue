<template>
  <div id="mobile" class="app default">
    <w-svg />
    <w-header title="Title">
      <w-link slot="left-actions" type="icon-only">
        <w-icon name="menu" />
      </w-link>
      <w-link slot="right-actions" type="icon-only">
        <w-icon name="search" />
      </w-link>
    </w-header>
    <w-main />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Header, Main, Svg } from "@mobileLayout";
import { Link, Icon } from "@mobileWidgets";

@Component({
  components: {
    [Header.name]: Header,
    [Main.name]: Main,
    [Svg.name]: Svg,
    [Link.name]: Link,
    [Icon.name]: Icon
  }
})
export default class Mobile extends Vue {
  mounted() {
    console.log(`[Header.name]:===> ${[Header.name]}`);
  }
}
</script>

<style lang="stylus" src="@/assets/css/mobile.styl" />
