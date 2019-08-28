<template>
  <main class="article-page">
    <div class="container">
      <div class="music">
        <aside class="sidebar">
          <Panel header="最新">
            <input
              type="search"
              v-model="name"
              name="name"
              placeholder="请输入名称"
            />
            <button @click="handleSearch">搜索</button>
          </Panel>
        </aside>
        <div class="music-list">
          <ul class="nav nav-column">
            <li v-for="(music, index) of musics" :key="`music-${index}`">
              <a href>{{ music.title }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import Panel from "@widgets/Panel.vue";
@Component({
  components: {
    Panel
  }
})
export default class Music extends Vue {
  @Getter musics!: W.IMusic[];
  @Action("SEARCH_MUSIC") search_music!: (name: string) => W.IMusic[];
  private name!: string;

  private async handleSearch() {
    return await this.search_music(this.name);
  }
}
</script>
<style lang="stylus">
.music
  display: grid
  grid-template-columns: 30% minmax(0, 1fr)
  gap: 2rem
</style>
