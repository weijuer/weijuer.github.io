<template>
  <transition name="fade">
    <div class="player-container">
      <div class="player-web">
        <div class="player-header" :class="[playing ? 'playing' : 'paused']">
          <img class="album-cover" :src="getAlbumCover" alt="图片" />
        </div>

        <div class="player-controls">
          <a class="btn btn-prev" href="javascript:;"></a>
          <a
            class="btn"
            :class="[playing ? 'btn-pause' : 'btn-start']"
            href="javascript:;"
            @click="playOrPause"
          ></a>
          <a class="btn btn-next" href="javascript:;"></a>
        </div>

        <div class="player-body">
          <div class="media-desc">
            <marquee
              class="media-marquee"
              direction="left"
              onmouseover="this.stop()"
              onmouseout="this.start()"
            >
              <div class="media-basic">{{ mediaBasic }}</div>
            </marquee>
            <div class="media-time">
              {{ currentTime | formatTime }} / {{ duration | formatTime }}
            </div>
          </div>

          <w-slider @change="updateCurrentTime" v-model="progress" />

          <div class="player">
            <audio
              ref="$audio"
              @timeupdate="onUpdateTime"
              @loadedmetadata="onLoadedmetadata"
              :src="song.url"
            />
          </div>
        </div>

        <div class="player-settings">
          <a class="btn btn-volume" href="javascript:;">音量</a>
          <w-slider @change="onVolumeChange" v-model="volume" />
        </div>
      </div>

      <div class="player-mini">
        <div class="player-header" :class="[playing ? 'playing' : 'paused']">
          <img class="album-cover" :src="getAlbumCover" alt="图片" />
        </div>
        <div class="player-body">
          <h5 class="song-title">{{ song.title }}</h5>
          <div class="song-author">{{ song.author }}</div>
        </div>

        <div class="player-controls">
          <a
            class="btn"
            :class="[playing ? 'btn-pause' : 'btn-start']"
            href="javascript:;"
            @click="playOrPause"
          >
            <w-progress :percent="(progress * 100).toFixed(0)" />
          </a>
        </div>

        <div class="timeline" :style="{ width: timelineStyle }"></div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop, Ref } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import Slider from "./Slider.vue";
import Progress from "./Progress.vue";

@Component({
  components: {
    [Slider.name]: Slider,
    [Progress.name]: Progress
  },
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

  private get timelineStyle() {
    return this.ended ? "100%" : (this.progress * 100).toFixed(2) + "%";
  }

  // 控制音频的播放与暂停
  playOrPause() {
    if (!this.song.author) return false;
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
    // 是否播放完毕
    if (this.$audio && this.$audio.ended) {
      return this.pause();
    }
    this.progress = this.currentTime / this.duration;
  }

  // 调整播放时间
  updateCurrentTime(progress: number) {
    this.currentTime = progress * this.duration;
    this.$audio.currentTime = this.currentTime;
  }

  // 调整音量大小
  onVolumeChange(volume: number) {
    this.volume = volume;
    this.$audio.volume = volume;
  }

  // 更新播放时间
  onUpdateTime(event: any) {
    this.currentTime = parseInt(event.target.currentTime);
    // 更新进度条
    this.updateProgress();
  }

  // 获取音频总长度
  onLoadedmetadata(event: any) {
    this.playing = false;
    this.duration = parseInt(event.target.duration);
    this.play();
  }
}
</script>

<style lang="stylus">
@import "../../assets/css/core/vars.styl"

.player-container
  display: flex
  justify-content: center
  padding: 1rem
  position: fixed
  left: 0
  bottom: 0
  right: 0
  background: #4a4f54
  transition: all 1s ease-in-out
  transform: translateY(100%)

  &:hover
    transform: translateY(0)

  .player-header
    position: absolute
    left: 2rem
    top: -1rem
    animation: moveAround 3s infinite linear

    &.playing
      animation-play-state: running

    &.paused
      animation-play-state: paused

    .record
      position: relative
      width: 100%
      height: 100%
      border-radius: 50%
      background: linear-gradient(30deg, transparent 40%, rgba(42, 41, 40, 0.85) 40%) no-repeat 100% 0, linear-gradient(60deg, rgba(42, 41, 40, 0.85) 60%, transparent 60%) no-repeat 0 100%, repeating-radial-gradient(#2a2928, #2a2928 4px, #ada9a0 5px, #2a2928 6px)
      background-size: 50% 100%, 100% 50%, 100% 100%

      &:after
        content: ""
        position: absolute
        top: 50%
        left: 50%
        margin: -35px
        border: 1px solid #d9a388
        width: 68px
        height: 68px
        border-radius: 50%
        box-shadow: 0 0 0 4px #da5b33, inset 0 0 0 27px #da5b33
        background: #b5ac9a

    .album-cover
      width: 4rem
      height: 4rem
      background: linear-gradient(30deg, transparent 40%, rgba(42, 41, 40, 0.85) 40%) no-repeat 100% 0, linear-gradient(60deg, rgba(42, 41, 40, 0.85) 60%, transparent 60%) no-repeat 0 100%, repeating-radial-gradient(#2a2928, #2a2928 4px, #ada9a0 5px, #2a2928 6px)
      box-shadow: 0 0 0 20px #000
      border-radius: 50%

  .player-controls
    flex: 1
    display: flex
    align-items: center
    justify-content: center
    margin-left: 6rem

    .btn
      margin: 0 1rem
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
    flex: 2
    margin: 0 1rem
    color: #fff

    .media-desc
      display: flex
      justify-content: space-between
      font-size: 1rem

      .media-marquee
        flex: 1
        margin-right: 1rem

      .media-time
        text-align: center

  .player-settings
    flex: 1
    margin: 0 1rem

    .btn-volume
      color: #fff

  .player-mini
    display: none

@keyframes moveAround
  from
    transform: rotate(0deg)

  to
    transform: rotate(360deg)

@media (max-width: 768px)
  .player-container
    flex-direction: column
    transform: translateY(0)
    padding: 10px

    .player-web
      display: none

    .player-mini
      display: flex
      height: 34px

      .player-header
        left: 1rem
        top: 0

        .album-cover
          width: 2rem
          height: 2rem
          box-shadow: 0 0 0 10px #000

      .player-body
        margin: 0 0 0 3.5rem

        .song-title
          font-size: 0.875rem
          margin-bottom: 0

        .song-author
          font-size: 0.75rem
          margin-bottom: 0

      .player-controls
        margin-left: 0
        justify-content: flex-end

        .btn
          width: 34px
          height: 34px
          margin: 0
          border: 0
          border-radius: 0

          &.btn-start
            &:before
              top: 9px
              left: 12px

          &.btn-pause
            &:before
              top: 10px
              left: 12px

            &:after
              top: 10px
              left: 19px

      .timeline
        display: block
        position: absolute
        left: 0
        bottom: 0
        width: 0
        height: 2px
        background: $themeColor
        transition: all 1s ease-in-out
</style>
