<template>
  <div id="mobile" class="app default">
    <w-header title="test">
      <a slot="left-actions" href>left</a>
      <a slot="right-actions" href>right</a>
    </w-header>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Header } from "@mobileLayout";

@Component({
  components: {
    [Header.name]: Header
  }
})
export default class Mobile extends Vue {
  mounted() {
    console.log(`[Header.name]:===> ${[Header.name]}`);
  }
}
</script>

<style lang="stylus" src="@/assets/css/mobile.styl" />
