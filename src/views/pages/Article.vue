<template>
  <main class="article-page">
    <div class="container">
      <div class="popular-articles"></div>
      <div class="normal-articles">
        <aside class="sidebar">
          <Card v-for="(item, index) of articles" :key="`article-${index}`">{{
            item.title
          }}</Card>
        </aside>
        <div class="articles">
          <article
            class="article article-card"
            v-for="(item, index) of articles"
            :key="`article-${index}`"
          >
            <h2 class="article-header">{{ item.title }}</h2>
            <div class="article-author">
              <strong>{{ item.author }}</strong>
              <time :datetime="item.lastModified">{{ item.lastModified }}</time>
            </div>
            <div class="article-content">
              <p>
                {{ item.description }}
                <a :href="item.url" class="read-more">Read more</a>
              </p>
            </div>
            <div class="article-tags">
              <a
                class="tag-item"
                v-for="(tag, index) of getTags(item.tags)"
                :key="`tag-${index}`"
                href="tag/"
                >{{ tag }}</a
              >
            </div>
          </article>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import Card from "@widgets/Card.vue";

@Component({
  components: {
    Card
  }
})
export default class Article extends Vue {
  @Getter articles!: any[];
  @Action("GET_ARTICLES") get_articles!: () => void;

  mounted() {
    this.init();
  }

  async init() {
    try {
      console.time("get_articles");
      await this.get_articles();
      console.timeEnd("get_articles");
    } catch (ex) {
      console.error(ex);
    }
  }

  getTags(tags: string) {
    return tags.split(",");
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

.normal-articles
  display: grid
  grid-template-columns: 300px minmax(0, 1fr)
  gap: 4rem

  .articles
    display: flex
    flex-direction: column
    width: 100%

    .article
      margin: 0 0 6rem 0
      position: relative
      overflow: hidden

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
