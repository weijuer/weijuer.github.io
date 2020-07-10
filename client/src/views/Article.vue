<template>
  <section class="grid article-page">
    <aside>
      <w-card title="分类">测试</w-card>
    </aside>
    <article>
      <router-view />
    </article>
  </section>
</template>

<script>
import { Card } from 'Widgets'

export default {
  name: 'Article',
  components: {
    [Card.name]: Card
  }
}
</script>

<style lang="stylus" scoped>
.grid
  display: grid
  grid-template-columns: 30% minmax(0, 1fr)
  gap: 2rem
</style>
