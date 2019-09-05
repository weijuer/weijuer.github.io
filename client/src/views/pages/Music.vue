<template>
  <main class="music-page">
    <div class="container">
      <div class="music">
        <aside class="sidebar">
          <Panel header="搜索">
            <div class="form-item">
              <input
                class="form-control"
                type="search"
                v-model="name"
                placeholder="请输入名称"
              />
              <button class="btn" @click="handleSearch">搜索</button>
            </div>
          </Panel>
        </aside>
        <div class="music-list">
          <Panel header="搜索结果">
            <Media
              v-for="(music, index) of musics"
              :key="`music-${index}`"
              @getMediaSong="getMusicSong(music)"
            >
              <img class="media-image" slot="header" :src="music.pic" />
              <div class="media-content">
                <h5 :data-href="music.link">{{ music.title }}</h5>
                <p>{{ music.author }}</p>
              </div>
            </Media>
            <div v-if="musics.length === 0">
              <p>
                <svg class="icon svg-icon icon-music">
                  <use xlink:href="#icon-music" />
                </svg>
                这里什么都没有哦，赶紧动手搜索试试吧~
              </p>
            </div>
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
import { Panel, Media, Player } from "@widgets";

@Component({
  components: {
    Panel,
    Media,
    Player
  }
})
export default class Music extends Vue {
  @Getter
  musics!: W.IMusic[];

  @Action("SEARCH_MUSIC")
  search_music!: (name: string) => W.IMusic[];

  @Action("GET_SONG")
  getMusicSong!: (song: any) => void;

  // data
  private name: string = "";

  private async handleSearch() {
    return await this.search_music(this.name);
  }
}
</script>
<style lang="stylus">
@import "../../assets/css/core/vars.styl"

.music
  display: grid
  grid-template-columns: 30% minmax(0, 1fr)
  gap: 2rem

.form-item
  display: flex
  font-size: 0.875rem

  .form-control
    flex: 1
    width: 60%
    height: 30px
    line-height: 30px
    outline: none
    border: 1px solid $themes[primary]

  .btn
    color: #fff
    background: $themes[primary]
    border: 1px solid $themes[primary]
    outline: none

    &:hover
      background: darken($themes[primary], 20%)
      border: 1px solid darken($themes[primary], 20%)

@media (max-width: 768px)
  .music
    grid-template-columns: auto
</style>
