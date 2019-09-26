<template>
  <div class="normal-articles">
    <aside class="sidebar">
      <Panel header="标签云">
        <div class="tags-cloud">
          <a
            class="nav-link tag-item"
            v-for="(tag, index) of tags"
            :key="`tag-${index}`"
            :to="{ name: 'tag-detail', params: { id: tag.code } }"
            >{{ tag.code }}</a
          >
        </div>
      </Panel>
    </aside>
    <div class="articles">
      <article-post
        v-for="(article, index) of articles"
        :article="article"
        :key="`article-${index}`"
        type="list"
        class="article-bordered"
      ></article-post>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import ArticlePost from "./article-post.vue";
import { Panel } from "@webWidgets";

@Component({
  components: {
    ArticlePost,
    Panel
  }
})
export default class Article extends Vue {
  @Getter articles!: any[];
  @Action("GET_ARTICLES") get_articles!: () => void;

  private tags: Array<any> = [
    { id: 1, path: "js", code: "javascript", desc: "脚本" },
    { id: 2, path: "html", code: "html", desc: "页面" }
  ];

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
  gap: 2rem

  .articles
    background: #fff

    .article
      &:last-child
        border: 0

  .tags-cloud
    .tag-item
      margin: 0 0.12rem
      padding: 0.2rem 0.85rem 0.25rem 0.85rem
      font-weight: 700
      font-size: 0.66rem
      white-space: nowrap
      border-radius: 2rem
      cursor: pointer
      color: #fff
      background: linear-gradient(to right, #4cbf30 0%, #0f9d58 100%)
      text-transform: uppercase

      &:hover
        color: #2d2d2d

@media (max-width: 768px)
  .normal-articles
    grid-template-columns: auto
</style>
