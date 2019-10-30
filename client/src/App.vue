<template>
  <Layout />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Layout } from "@layout";

@Component({
  components: {
    Layout: Layout
  }
})
export default class App extends Vue {}
</script>
