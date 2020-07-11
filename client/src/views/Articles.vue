<template>
  <section class="grid article-page">
    <aside>
      <w-card title="分类">测试</w-card>
    </aside>
    <article>
      <div class="articles">
        <w-article
          v-for="(article, index) of articles"
          :article="article"
          :key="`article-${index}`"
          type="list"
          class="article-bordered"
        />
      </div>
    </article>
  </section>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { Card, Article } from 'Widgets'
import { get_articles } from 'Api/article'

export default {
  name: 'Articles',
  components: {
    [Card.name]: Card,
    [Article.name]: Article
  },
  setup() {
    const state = reactive({
      articles: []
    })

    getArticles()

    // 获取文章列表
    async function getArticles() {
      try {
        const res = await get_articles()
        state.articles = res
      } catch (error) {
        console.error(error)
      }
    }

    return {
      ...toRefs(state),
      getArticles
    }
  }
}
</script>

<style lang="stylus" scoped>
.grid
  display: grid
  grid-template-columns: 30% minmax(0, 1fr)
  gap: 2rem

@media (max-width: 468px)
  .article-page
    grid-template-columns: auto
    gap: 0.5rem
</style>
