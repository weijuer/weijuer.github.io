<template>
  <section class="grid article-page">
    <article>
      <div class="articles" v-loadmore="loadOptions">
        <transition-group @:before-enter="beforeEnter" @:enter="enter" appear>
          <w-article
            v-for="(article, index) of articles"
            :article="article"
            :key="`article-${index}`"
            type="list"
            class="article-bordered"
          />
        </transition-group>
      </div>
    </article>
    <aside>
      <w-card v-pin="100" title="分类">测试</w-card>
    </aside>
  </section>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { Card, Article } from 'Widgets'
import { get_articles_by_page } from 'Api/article'

export default {
  name: 'articles',
  components: {
    [Card.name]: Card,
    [Article.name]: Article,
  },
  setup() {
    // 加载更多
    const loadOptions = reactive({
      offset: 30,
      index: 1,
      pageSize: 10,
      onLoad: onLoad,
    })

    const state = reactive({
      articles: [],
    })

    getArticles()

    // 获取文章列表
    async function getArticles() {
      const { index, pageSize } = loadOptions
      const { data } = await get_articles_by_page({ query: null, index, pageSize })
      state.articles = state.articles.concat(data)
    }

    // 滚底加载
    function onLoad() {
      console.log('到底了， 加载吧')
      loadOptions.index++
      getArticles()
    }

    function beforeEnter(el) {
      el.style.opacity = 0
    }

    function enter(el, done) {
      // console.log(el.dataset.index)
      let delay = el.dataset.index * 300
      setTimeout(() => {
        el.style.transition = 'opacity 0.3s '
        el.style.opacity = 1
        el.style.animation = 'one-in 0.3s infinite'
        el.style['animation-iteration-count'] = 1
        done()
      }, delay)
    }

    return {
      ...toRefs(state),
      getArticles,
      loadOptions,
      onLoad,
      beforeEnter,
      enter,
    }
  },
}
</script>

<style lang="stylus" scoped>
.grid {
  display: grid
  grid-template-columns: minmax(0, 1fr) 30%
  gap: 2rem
}

.articles {
  background: #fff
  border-radius: 10px
}

.v-list-enter,
.v-leave-to {
  opacity: 0
  transform: translateY(80px)
}

.v-enter-active,
.v-leave-active {
  transition: all 0.6s ease
}

.v-leave-active {
  position: absolute
}

@media (max-width: 468px) {
  .article-page {
    grid-template-columns: auto
    gap: 0.5rem

    aside {
      display: none
    }
  }
}
</style>
