<template>
  <transition name="fade">
    <div class="player-container">
      <div class="player-header">
        <img class="album-cover" :src="getAlbumCover" alt="图片" />
      </div>

      <div class="player-controls">
        <a class="btn btn-prev" href="javascript:;"></a>
        <a
          class="btn btn-start"
          :class="[playing ? 'btn-pause' : 'btn-start']"
          href="javascript:;"
          @click="playOrPause"
        ></a>
        <a class="btn btn-next" href="javascript:;"></a>
      </div>

      <div class="player-body">
        <div class="media-desc">
          <div class="media-basic">{{ mediaBasic }}</div>
          <div class="media-time">
            {{ currentTime | formatTime }} / {{ duration | formatTime }}
          </div>
        </div>
        <div class="media-progress">
          <div
            class="progress-bar"
            ref="$progress"
            :style="getProgressStyle"
          ></div>
          <div class="progress-track"></div>
          <div
            class="progress-pointer"
            :style="getPointerStyle"
            @click="updateCurrentTime"
          ></div>
        </div>
        <div class="player">
          <audio
            ref="$audio"
            @timeupdate="onUpdateTime"
            @loadedmetadata="onLoadedmetadata"
            :src="song.url"
          />
        </div>
      </div>

      <div class="player-controls-extra">
        <a class="btn btn-volume" href="javascript:;"></a>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop, Ref } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component({
  filters: {
    formatTime(seconds: number) {
      let mins: any = Math.floor(seconds / 60);
      let secs: any = Math.floor(seconds % 60);
      if (mins < 10) {
        mins = "0" + mins;
      }
      if (secs < 10) {
        secs = "0" + secs;
      }
      return `${mins}:${secs}`;
    }
  }
})
export default class Player extends Vue {
  @Prop({ type: String })
  source!: string;

  @Ref("$audio")
  readonly $audio!: HTMLAudioElement;

  @Ref("$progress")
  readonly $progress!: HTMLDivElement;

  @Getter("song")
  song!: W.IMusic;
  // 是否播放
  playing: boolean = false;
  // 进度条
  progress: number = 0;

  // 媒体时长，数值， 单位s
  duration: number = (this.$audio && this.$audio.duration) || 0;
  // 是否完成播放，布尔值
  ended: boolean = (this.$audio && this.$audio.ended) || false;
  // 是否播放暂停，布尔值
  paused: boolean = (this.$audio && this.$audio.paused) || false;
  // 已播放时间
  played: any = this.$audio && this.$audio.played;
  // 可播放时间
  seekable: any = this.$audio && this.$audio.seekable;

  // 指定播放位置的秒数
  currentTime: number = (this.$audio && this.$audio.currentTime) || 0;
  // 是否静音
  muted: boolean = (this.$audio && this.$audio.muted) || false;
  // 0.0-1.0 之间，设置该属性可以修改声音大小
  volume: number = (this.$audio && this.$audio.volume) || 1.0;
  //播放速度，大多数浏览器支持0.5-4， 1表示正常速度
  playbackRate: number = (this.$audio && this.$audio.playbackRate) || 1;

  mounted() {
    // debugger;
  }

  private get getAlbumCover() {
    return this.song.pic || "img/logo.png";
  }

  private get mediaBasic() {
    return (
      (this.song.author && `${this.song.title}-${this.song.author}`) ||
      "暂无信息"
    );
  }

  private get getProgressStyle() {
    return { width: `${this.progress * 100}%` };
  }

  private get getPointerStyle() {
    return { left: `${this.progress * 100}%` };
  }

  // 控制音频的播放与暂停
  playOrPause() {
    return this.playing ? this.pause() : this.play();
  }

  // 播放音频
  play() {
    this.$audio.play();
    this.playing = true;
  }

  // 暂停音频
  pause() {
    this.$audio.pause();
    this.playing = false;
  }

  // 更新进度条
  updateProgress() {
    this.progress = this.currentTime / this.duration;
  }

  updateCurrentTime() {}

  // 更新播放时间
  onUpdateTime(event: any) {
    this.currentTime = parseInt(event.target.currentTime);
    // 更新进度条
    this.updateProgress();
  }

  // 获取音频总长度
  onLoadedmetadata(event: any) {
    console.log("loadedmetadata");
    this.duration = parseInt(event.target.duration);
  }
}
</script>

<style lang="stylus">
@import "../../assets/css/core/vars.styl"

.player-container
  display: flex
  padding: 0.5rem
  position: fixed
  left: 0
  bottom: 0
  right: 0
  background: rgba(0, 0, 0, 0.8)

  .player-header
    margin-right: 2rem

    .album-cover
      width: 4rem
      height: 4rem
      border-radius: 50%

  .player-controls
    margin-right: 2rem
    display: flex
    align-items: center
    justify-content: space-between

    .btn
      margin-right: 1rem
      display: inline-flex
      width: 2rem
      height: 2rem
      position: relative
      border: 2px solid #fff
      border-radius: 50%

      &:before,
      &:after
        content: ""
        display: inline-block
        position: absolute
        left: 0
        top: 20%

      &.btn-prev
        &:before
          left: -4px
          border: 8px solid transparent
          border-right: 10px solid #fff

        &:after
          left: 4px
          border: 8px solid transparent
          border-right: 10px solid #fff

      &.btn-start
        &:before
          left: 10px
          border: 8px solid transparent
          border-left: 12px solid #fff

      &.btn-pause
        &:before
          left: 8px
          width: 0
          height: 16px
          border: 2px solid #fff

        &:after
          left: 16px
          width: 0
          height: 16px
          border: 2px solid #fff

      &.btn-next
        &:before
          left: 8px
          border: 8px solid transparent
          border-left: 10px solid #fff

        &:after
          left: 16px
          border: 8px solid transparent
          border-left: 10px solid #fff

  .player-body
    width: 40vw
    margin-right: 2rem
    color: #fff

    .media-desc
      display: flex
      justify-content: space-between

    .media-progress
      margin: 4px 0
      position: relative
      height: 4px
      cursor: pointer

      .progress-bar
        position: absolute
        top: 0
        right: 0
        bottom: 0
        left: 0
        z-index: 2018
        border-radius: 4px
        background: $themeColor

      .progress-track
        position: absolute
        top: 0
        right: 0
        bottom: 0
        left: 0
        border-radius: 4px
        background: #7d7d7d

      .progress-pointer
        display: inline-block
        position: absolute
        top: 50%
        z-index: 2019
        width: 12px
        height: 12px
        border: 2px solid $themeColor
        border-radius: 50%
        cursor: pointer
        background-color: #fff
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37)
        transform: translate(-6px, -50%)
</style>
