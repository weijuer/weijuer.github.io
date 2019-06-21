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
          <Post
            v-for="(article, index) of articles"
            :article="article"
            :key="`article-${index}`"
          >
          </Post>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import Post from "@components/layout/Post.vue";
import Card from "@widgets/Card.vue";

@Component({
  components: {
    Post,
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
</style>
