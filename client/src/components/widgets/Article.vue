<template>
  <div class="article" :class="[articleType]">
    <header class="article-header">
      <router-link
        :data-id="article._id"
        v-if="isLinked"
        :to="{ name: 'article-detail', query: { id: article._id } }"
        target="_blank"
        >{{ article.title }}</router-link
      >
      <span v-else>{{ article.title }}</span>
    </header>
    <div class="article-author">
      <strong>{{ article.author }}</strong>
      <time :datetime="article.lastModified">{{ article.lastModified }}</time>
    </div>
    <div class="article-content">
      <p class="article-description">{{ article.description }}</p>
      <a v-if="isLinked" class="read-more" :href="moreLink(article)">Read more</a>
    </div>
    <div v-if="article.tags" class="article-tags">
      <a
        v-for="(tag, index) of tags()"
        :key="`tag-${index}`"
        class="tag-item bg-color"
        href="tag/"
        >{{ tag }}</a
      >
    </div>
  </div>
</template>

<script>
import { reactive, computed, toRefs } from 'vue'

export default {
  name: 'w-article',
  props: {
    type: { type: String, default: 'normal' },
    article: { default: () => {}, type: Object }
  },
  emits: ['desc-click'],
  setup(props) {
    const state = reactive({
      tags: computed(() => props.article.tags && props.article.tags.split(',')),
      articleType: computed(() => (props.type ? `article-${props.type}` : '')),
      isLinked: computed(() => props.type && props.type === 'list')
    })

    function moreLink(article) {
      return `https://www.infoq.cn${article.url}`
    }

    return {
      ...toRefs(state),
      moreLink
    }
  }
}
</script>

<style lang="stylus">
.link-read-more, .read-more {
  background: linear-gradient(to right, #ff8a00, #da1b60);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  box-decoration-break: clone;
  font-weight: 700;
  border-bottom: 1px solid #da1b60;
  padding-bottom: 0.15rem;

  &:hover {
    background: linear-gradient(to right, #da1b60, #ff8a00);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    box-decoration-break: clone;
    border-bottom: 1px solid #ff8a00;
    text-shadow: none;
  }
}

.article {
  margin: 0;
  padding: 1.5625rem;
  position: relative;
  overflow: hidden;

  &-normal {
    background: #fff;
  }

  &-card {
    border-radius: 10px;
  }

  &-bordered {
    border-bottom: 1px dashed #e4e4e4;
  }

  .article-header {
    font-size: 1rem;
  }

  .article-author {
    strong {
      font-size: 14px;
      margin-right: 0.5rem;
    }
  }

  .article-content {
    font-size: 0.875rem;
    line-height: 1.6;
    color: #c2c2c2;
    overflow-wrap: break-word;

    .article-description {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
  }

  .article-tags {
    margin: 0;
    padding: 0.5rem 0 1rem;
    line-height: 1.8;

    .tag-item {
      color: #fff;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 0.66rem;
      white-space: nowrap;
      border-radius: 2rem;
      margin: 0 0.12rem;
      padding: 0.2rem 0.85rem 0.25rem 0.85rem;

      &:hover {
        color: darken(#fff, 10);
        position: relative;
      }
    }
  }
}
</style>
