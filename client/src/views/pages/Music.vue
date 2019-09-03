<template>
  <main class="article-page">
    <div class="container">
      <div class="music">
        <aside class="sidebar">
          <Panel header="搜索">
            <input type="search" v-model="name" placeholder="请输入名称" />
            <button @click="handleSearch">搜索</button>
          </Panel>
        </aside>
        <div class="music-list">
          <Panel header="搜索结果">
            <Media v-for="(music, index) of musics" :key="`music-${index}`">
              <img class="media-image" slot="header" :src="music.pic" />
              <div class="media-content">
                <a :href="music.link">{{ music.title }}</a>
                <p>{{ music.author }}</p>
              </div>
            </Media>
            <p v-if="musics.length === 0">这里什么都没有哦~</p>
          </Panel>
        </div>
      </div>
      <Player />
    </div>
  </main>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import Panel from "@widgets/Panel.vue";
import { Media, Player } from "@widgets";

@Component({
  components: {
    Panel,
    Media,
    Player
  }
})
export default class Music extends Vue {
  @Getter musics!: W.IMusic[];
  @Action("SEARCH_MUSIC") search_music!: (name: string) => W.IMusic[];
  // data
  private name: string = "";

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

@media (max-width: 768px)
  .music
    grid-template-columns: auto
</style>
