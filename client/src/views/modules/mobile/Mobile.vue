<template>
  <div id="mobile" class="app default">
    <w-header title="Weijuer">
      <w-link slot="left-actions">Back</w-link>
      <w-link slot="right-actions">right</w-link>
    </w-header>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Header } from "@mobileLayout";
import { Link } from "@mobileWidgets";

@Component({
  components: {
    [Header.name]: Header,
    [Link.name]: Link
  }
})
export default class Mobile extends Vue {
  mounted() {
    console.log(`[Header.name]:===> ${[Header.name]}`);
  }
}
</script>

<style lang="stylus" src="@/assets/css/mobile.styl" />
