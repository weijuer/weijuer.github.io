<template>
  <article class="article" :class="[postType]">
    <header class="article-header">
      <router-link
        v-if="isLinked"
        :to="{ name: 'article-detail', params: { id: article.id } }"
        >{{ article.title }}</router-link
      >
      <span v-else>{{ article.title }}</span>
    </header>
    <div class="article-author">
      <strong>{{ article.author }}</strong>
      <time :datetime="article.lastModified">{{ article.lastModified }}</time>
    </div>
    <div class="article-content">
      <p>
        {{ article.description }}
        <a v-if="isLinked" class="read-more" :href="moreLink(article)"
          >Read more
        </a>
      </p>
    </div>
    <div class="article-tags" v-if="article.tags">
      <a
        class="tag-item bg-color"
        v-for="(tag, index) of tags()"
        :key="`tag-${index}`"
        href="tag/"
        >{{ tag }}</a
      >
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ArticlePost extends Vue {
  @Prop({ type: String, default: "normal" }) type!: string;
  @Prop({ type: Object }) private article!: W.IArticle;

  private tags() {
    return this.article.tags && this.article.tags.split(",");
  }

  private get postType() {
    return this.type ? `article-${this.type}` : "";
  }

  private get isLinked() {
    return this.type && this.type === "list";
  }

  private moreLink(article: W.IArticle) {
    return `https://www.infoq.cn${article.url}`;
  }
}
</script>

<style lang="stylus">
.link-read-more,
.read-more
  background: linear-gradient(to right, #ff8a00, #da1b60)
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent
  box-decoration-break: clone
  font-weight: 700
  border-bottom: 1px solid #da1b60
  padding-bottom: 0.15rem

  &:hover
    background: linear-gradient(to right, #da1b60, #ff8a00)
    background-clip: text
    -webkit-text-fill-color: transparent
    box-decoration-break: clone
    border-bottom: 1px solid #ff8a00
    text-shadow: none

.article
  margin: 0
  padding 1.5625rem
  position: relative
  overflow: hidden

  &-normal
    background: #fff

  &-card
    border-radius: 4px

  &-bordered
    border-bottom: 1px dashed #aaa

  .article-header
    font-size: 1rem

  .article-author
    strong
      font-size: 14px
      margin-right: 0.5rem

  .article-content
    line-height: 1.6
    color: #c2c2c2
    overflow-wrap: break-word

  .article-tags
    margin: 0
    padding: 0.5rem 0 1rem
    line-height: 1.8

    .tag-item
      color: #fff
      text-transform: uppercase
      font-weight: 700
      font-size: 0.66rem
      white-space: nowrap
      border-radius: 2rem
      margin: 0 0.12rem
      padding: 0.2rem 0.85rem 0.25rem 0.85rem

      &:hover
        color: darken(#fff, 10)
        position: relative
</style>
