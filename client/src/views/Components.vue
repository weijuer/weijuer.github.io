<template>
  <main class="components-page">
    <div class="container">
      <div class="popular-components">
        <aside class="sidebar"></aside>
        <div class="components">
          <w-list media-list>
            <w-item
              v-for="item of 3"
              :key="`Item${item}`"
              :title="`Item${item}`"
            />
          </w-list>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { List, Item } from "@widgets";

@Component({
  components: {
    [List.name]: List,
    [Item.name]: Item
  }
})
export default class Components extends Vue {}
</script>

<style lang="stylus">
.popular-components
  display: grid
  grid-template-columns: 30% 70%
  gap: 4rem

@media (max-width: 768px)
  .popular-components
    grid-template-columns: auto
    gap: 0.5rem
</style>
