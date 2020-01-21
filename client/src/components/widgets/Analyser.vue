<template>
  <canvas ref="$analyser" class="analyser"></canvas>
</template>

<script lang="ts">
import { Component, Vue, Prop, Ref, Emit } from "vue-property-decorator";
import { Getter, Action, Mutation } from "vuex-class";

@Component
export default class Analyser extends Vue {
  @Ref("$analyser")
  readonly $analyser!: HTMLCanvasElement;

  @Prop()
  audio!: HTMLAudioElement;

  audioContext: any;

  analyser: any;

  output: any;

  canvasCtx: any;

  mounted() {
    this.$on("connect", () => {
      console.log("OK");
    });
  }

  /**
   * 连接：source → analyser → destination
   */
  connect() {
    // 创建audioContext
    this.audioContext = this.audioContext || new AudioContext();
    // 创建节点
    let source = this.audioContext.createMediaElementSource(this.audio);
    // 创建分析器
    this.analyser = this.audioContext.createAnalyser();
    this.analyser.fftSize = 256;

    // 连接到音频播放器
    source.connect(this.analyser);
    this.analyser.connect(this.audioContext.destination);

    // 获取canvas
    this.canvasCtx = this.$analyser.getContext("2d");
    this.canvasCtx.fillStyle = "rgba(255,255,255,.5)";

    // 计算出采样比率44100所需的缓冲区长度
    let bufferLength = this.analyser.frequencyBinCount;
    console.log(bufferLength);
    // 创建数据
    this.output = new Uint8Array(bufferLength);
    // 绘制
    this.draw();
  }

  draw() {
    let width = this.$analyser.width;
    let height = this.$analyser.height - 2;
    let meterWidth = 5;
    let gap = 2;
    let minHeight = 2;
    let meterNum = width / (meterWidth + gap);

    // 获取音频缓冲区的数据
    this.analyser.getByteFrequencyData(this.output);
    let step = Math.round(this.output.length / meterNum);

    // 将缓冲区的数据绘制到Canvas上
    this.canvasCtx.clearRect(0, 0, width, height);
    for (var i = 0; i < meterNum; i++) {
      var value = this.output[i * step];
      console.log("value", value);
      this.canvasCtx.fillRect(
        i * (meterWidth + gap),
        height - value + minHeight,
        meterWidth,
        height || minHeight
      );
    }

    // 请求下一帧
    requestAnimationFrame(this.draw);
  }
}
</script>
<style lang="stylus">
.analyser
  width: 100%
  height: 100%
</style>
