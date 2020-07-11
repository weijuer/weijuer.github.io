<template>
  <article-post :article="article" type="detail"></article-post>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { get_article } from 'Api/article'

export default {
  name: 'article-detail',
  setup() {
    // 使用vue-router
    const router = useRouter()
    // 文章对象
    let article = ref({})

    onMounted(async () => {
      await getArticle()
    })

    // 获取单条文章详情
    async function getArticle() {
      const id = Number(router.params.id)
      article = await get_article(id)
      console.log(`article:==>${JSON.stringify(article)}`)
    }

    return {
      article,
      getArticle
    }
  }
}
</script>
