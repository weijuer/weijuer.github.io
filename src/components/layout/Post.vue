<template>
  <article class="article" :class="[postType]">
    <header class="article-header">{{ article.title }}</header>
    <div class="article-author">
      <strong>{{ article.author }}</strong>
      <time :datetime="article.lastModified">{{ article.lastModified }}</time>
    </div>
    <div class="article-content">
      <p>
        {{ article.description }}
        <a :href="article.url" class="read-more">Read more</a>
      </p>
    </div>
    <div class="article-tags">
      <a
        class="tag-item"
        v-for="(tag, index) of tags"
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
export default class Post extends Vue {
  @Prop({ type: String, default: "normal" }) type!: string;
  @Prop({ type: Object }) private article!: W.IArticle;

  private tags() {
    return this.article.tags.split(",");
  }

  private get postType() {
    return this.type ? `article-${this.type}` : "";
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
    background: linear-gradient(to right, #ff8a00, #da1b60)
    background-clip: text
    -webkit-text-fill-color: transparent
    box-decoration-break: clone
    border-bottom: 1px solid #fff
    text-shadow: none

.article
  margin: 0 0 4rem 0
  position: relative
  overflow: hidden

  &-normal
    background #fff

  &-card
    border-radius 4px

  &-bordered
    border 1px solid #eee

  .article-content
    line-height: 1.6
    color: #c2c2c2
    overflow-wrap: break-word

  .article-tags
    margin: 0
    padding: 0.5rem 0 1rem
    line-height: 1.8

    a
      color: #7a7a8c
      text-transform: uppercase
      font-weight: 700
      font-size: 0.66rem
      white-space: nowrap
      border: 3px solid #28242f
      border-radius: 2rem
      margin: 0 0.12rem
      padding: 0.2rem 0.85rem 0.25rem 0.85rem

      &:hover
        color: #03a9f4
        border-color: #fff
        position: relative
</style>
