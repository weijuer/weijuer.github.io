<template>
  <div class="w-player">
    <audio
      ref="audio"
      @pause="onPause"
      @play="onPlay"
      :src="source"
      controls="controls"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component
export default class Player extends Vue {
  @Prop({ type: String, default: "audio/mpeg" }) type!: string;
  @Prop({ type: String }) source: string;
  // data
  playing: boolean = false;

  private get $audio() {
    return this.$refs.audio as HTMLAudioElement;
  }

  private get $progress() {
    return this.$refs.$progress as HTMLDivElement;
  }

  // 控制音频的播放与暂停
  playOrPause() {
    return this.playing ? this.pause() : this.play();
  }

  // 播放音频
  play() {
    this.$audio.play();
  }

  // 暂停音频
  pause() {
    this.$audio.pause();
  }

  // 当音频播放
  onPlay() {
    this.playing = true;
  }

  // 当音频暂停
  onPause() {
    this.playing = false;
  }
}
</script>

<style lang="stylus"></style>
