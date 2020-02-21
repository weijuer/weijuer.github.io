<template>
  <article-post :article="article" type="detail"></article-post>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import ArticlePost from "./article-post.vue";

@Component({
  components: {
    ArticlePost
  }
})
export default class ArticleDetails extends Vue {
  @Getter article!: W.IArticle;
  @Action("GET_ARTICLE") get_article!: (id: number) => W.IArticle;

  private id!: number;

  mounted() {
    this.getArticle();
  }

  private async getArticle() {
    this.id = Number(this.$route.params.id);
    console.log(`id:===>${this.id}`);
    await this.get_article(this.id);
    console.log(`article:==>${JSON.stringify(this.article)}`);
  }
}
</script>

<style lang="stylus"></style>
