<template>
  <w-article :article="article" type="detail" />
</template>

<script>
import { Article } from 'Widgets'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { get_article } from 'Api/article'

export default {
  name: 'article-detail',
  components: {
    [Article.name]: Article
  },
  setup() {
    // 使用vue-router
    const route = useRoute()
    // 文章对象
    let article = ref({})

    // 获取单条文章详情
    async function getArticle() {
      const { id } = route.query
      article = await get_article({ id: id })
      console.log(`article:==>${JSON.stringify(article)}`)
    }

    getArticle()

    return {
      article,
      getArticle
    }
  }
}
</script>
