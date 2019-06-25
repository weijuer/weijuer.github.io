<template>
  <div class="normal-articles">
    <aside class="sidebar">
      <Card v-for="(item, index) of articles" :key="`article-${index}`">{{
        item.title
      }}</Card>
    </aside>
    <div class="articles">
      <article-post
        v-for="(article, index) of articles"
        :article="article"
        :key="`article-${index}`"
        type="list"
        class="article-bordered"
      >
      </article-post>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import ArticlePost from "./article-post.vue";
import Card from "@widgets/Card.vue";

@Component({
  components: {
    ArticlePost,
    Card
  }
})
export default class Article extends Vue {
  @Getter articles!: any[];
  @Action("GET_ARTICLES") get_articles!: () => void;

  private mounted(): void {
    this.init();
  }

  private async init() {
    try {
      console.time("get_articles");
      await this.get_articles();
      console.timeEnd("get_articles");
    } catch (ex) {
      console.error(ex);
    }
  }
}
</script>

<style lang="stylus">
.normal-articles
  display: grid
  grid-template-columns: 30% minmax(0, 1fr)
  gap: 4rem

@media (max-width: 768px)
  .normal-articles
    grid-template-columns auto
</style>
