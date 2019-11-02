<template>
  <main class="music-page">
    <div class="container">
      <div class="music">
        <aside class="sidebar">
          <Panel header="搜索">
            <div class="form-item">
              <input
                class="form-control theme"
                type="search"
                v-model.trim="name"
                placeholder="请输入名称"
              />
              <button class="w-btn w-btn-brand" @click="handleSearch">
                搜索
              </button>
            </div>

            <div v-show="searchArray.length > 0" class="toolbar">
              <div class="inner-title">历史记录</div>
              <a
                @click="tagHistoryClear"
                href="javascript:;"
                class="w-btn icon-only"
              >
                <w-icon name="delete" />
              </a>
            </div>

            <div class="tags-cloud">
              <button
                class="tag-item"
                v-for="(tag, index) of searchArray"
                :key="`tag-${index}`"
                @click="tagSearch(tag)"
              >
                {{ tag }}
              </button>
            </div>
          </Panel>
        </aside>
        <div class="music-list">
          <Panel class="music-list-panel" header="最佳匹配">
            <Media
              v-for="(music, index) of musics"
              :key="`music-${index}`"
              @getMediaSong="getMusicSong(music)"
            >
              <img class="media-image" slot="header" :src="music.pic" />
              <div class="media-content">
                <h5 class="media-title" :data-href="music.link">
                  {{ music.title }}
                </h5>
                <p class="media-author">{{ music.author }}</p>
              </div>
              <div class="media-status">
                <i
                  class="icon icon-status"
                  :class="[getMusicStatus(music.songid)]"
                ></i>
              </div>
            </Media>
            <div class="empty" v-if="musics.length === 0">
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
import { Panel, Media, Player } from "@webWidgets";
import { Icon } from "@mobileWidgets";

@Component({
  components: {
    Panel,
    Media,
    Player,
    [Icon.name]: Icon
  }
})
export default class Music extends Vue {
  @Getter
  musics!: W.IMusic[];

  @Action("SEARCH_MUSIC")
  search_music!: (name: string) => W.IMusic[];

  @Action("SEARCH_LOCAL_MUSIC")
  search_local_music!: (name: string) => W.IMusic[];

  @Action("GET_SONG")
  get_song!: (song: any) => void;

  @Action("ClEAR_MUSIC")
  clear_music!: () => void;

  // 搜索名称
  private name: string = "";

  // 当前播放曲目
  private playing: number = 0;

  // 搜索历史
  private searchHistory: string = "";

  // 搜索历史集合
  private get searchArray() {
    let searchHistory =
      this.searchHistory || localStorage.getItem("searchHistory") || "";
    return searchHistory ? searchHistory.split(",") : [];
  }

  /**
   * 历史搜索
   */
  private async tagSearch(name: string) {
    this.name = name;
    await this.search_local_music(name);
  }

  /**
   * 清空历史
   */
  private async tagHistoryClear() {
    // 清空
    await this.clear_music();
    this.searchHistory = "";
    localStorage.setItem("searchHistory", this.searchHistory);
  }

  /**
   * 音乐搜索
   */
  private async handleSearch() {
    if (!this.name) return false;

    // 处理搜索关键字
    let searchHistory = localStorage.getItem("searchHistory") || "";
    let tempArr = searchHistory ? searchHistory.split(",") : [];
    if (!tempArr.includes(this.name)) {
      tempArr.unshift(this.name);
      this.searchHistory = tempArr.join(",");
      localStorage.setItem("searchHistory", this.searchHistory);
    }

    return await this.search_music(this.name);
  }

  // 获取歌曲
  private getMusicSong(song: any) {
    this.playing = song.songid;
    this.get_song(song);
  }

  // 当前歌曲状态
  private getMusicStatus(id: number) {
    return id === this.playing ? "icon-playing" : "icon-paused";
  }
}
</script>
<style lang="stylus">
@import "../../assets/css/core/vars.styl"

.inner-title
  font-size: 0.875rem
  font-weight: bold
  color: #333

.music
  display: grid
  grid-template-columns: 30% minmax(0, 1fr)
  gap: 2rem

  .music-list-panel
    counter-reset: media 0

    .panel-body
      padding: 0

    .empty
      padding: 1.5625rem

  .media
    counter-increment: media

    &:before
      content: counter(media)
      margin-right: 12px
      display: inline-flex
      justify-content: center
      align-items: center
      color: #575962
      width: 1.25rem
      height: 1.25rem
      font-size: 14px
      font-weight: bold
      border-radius: 50%

    &:first-child
      &:before
        color: $themes[danger]

    &:nth-child(2)
      &:before
        color: $themes[warning]

    &:nth-child(3)
      &:before
        color: $themes[info]

    .media-body
      flex: 2
      display: flex

      .media-content
        flex: 2

        .media-title
          font-size: 1rem

        .media-author
          font-size: 0.75rem
          color: #777
          margin-bottom: 0

      .media-status
        .icon
          display: inline-flex
          justify-content: center
          align-items: center
          width: 1.5rem
          height: 1.5rem
          position: relative
          border: 1px solid #777
          border-radius: 50%

          &:before,
          &:after
            content: ""
            display: block
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)

          &.icon-paused
            &:before
              left: 15px
              border: 6px solid transparent
              border-left: 10px solid #737373

          &.icon-playing
            &:before
              left: 8px
              width: 0
              height: 14px
              border: 2px solid #737373

            &:after
              left: 14px
              width: 0
              height: 14px
              border: 2px solid #737373

.tags-cloud
  .tag-item
    margin: 0 0.12rem
    padding: 0.2rem 0.85rem 0.25rem 0.85rem
    font-weight: 700
    font-size: 0.66rem
    white-space: nowrap
    border: 0
    border-radius: 2rem
    cursor: pointer
    color: #fff
    background: linear-gradient(to right, #4cbf30 0%, #0f9d58 100%)
    text-transform: uppercase

    &:hover
      color: #2d2d2d

.form-item
  display: flex
  font-size: 0.875rem
  margin-bottom: 0.5rem

  .form-control
    flex: 1
    width: 60%
    height: 30px
    line-height: 30px
    text-indent: 4px
    outline: none
    border: 1px solid $themes[brand]

  .btn
    color: #fff
    outline: none

    &.btn-theme
      background $themes[brand],
      border 1px solid $themes[brand],
      &:hover
        background: darken($themes[brand], 20%)
        border: 1px solid darken($themes[brand], 20%)

@media (max-width: 768px)
  .music-page
    .music
      grid-template-columns: auto
</style>
