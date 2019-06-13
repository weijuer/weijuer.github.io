<template>
  <div class="blog">
    <section class="container">
      <ul class="row">
        <li
          class="col-md-4 col-sm-6"
          v-for="(item, index) of blogs"
          :key="`blog-${index}`"
        >
          {{ item.title }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component
export default class Blog extends Vue {
  @Getter blogs!: any[];
  @Action("GET_BLOGS") get_blogs!: () => void;

  mounted() {
    this.init();
  }

  async init() {
    try {
      console.log("get_blogs start");
      await this.get_blogs();
      console.log("get_blogs end", this.blogs);
    } catch (ex) {
      console.error(ex);
    }
  }
}
</script>

<style lang="stylus">
.blog
  display flex
  width 100%
</style>
