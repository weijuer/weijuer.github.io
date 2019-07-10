<template>
  <div class="clock-container" :class="[cardType]">
    <svg id="clock-demo" class="clock hidden">
      <desc>Clock</desc>
      <defs></defs>
      <g class="circles">
        <circle cx="80" cy="80" r="3" fill="#ff6400"></circle>
        <circle cx="80" cy="80" r="80" fill="none"></circle>
      </g>
      <g class="pins">
        <rect
          x="79"
          y="78"
          width="3"
          height="55"
          class="hour-pin"
          transform="rotate(360 80 80)"
        >
          <animateTransform
            attributeName="transform"
            dur="216000s"
            type="rotate"
            from="0 80 80"
            to="360 80 80"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
        <rect
          x="79"
          y="76"
          width="2"
          height="70"
          class="minute-pin"
          transform="rotate(360 80 80)"
        >
          <animateTransform
            attributeName="transform"
            dur="3600s"
            type="rotate"
            from="0 80 80"
            to="360 80 80"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
        <rect
          x="80"
          y="74"
          width="1"
          height="80"
          class="seconds-pin"
          transform="rotate(360 80 80)"
        >
          <animateTransform
            attributeName="transform"
            dur="60s"
            type="rotate"
            from="0 80 80"
            to="360 80 80"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
      </g>
    </svg>

    <svg id="clock"></svg>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Snap from "imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js";

@Component
export default class Clock extends Vue {
  @Prop({ type: String }) type!: string;
  private svg: any;
  private hour: any;
  private minute: any;
  private second: any;
  private clockTimer: number = 0;

  get cardType() {
    return this.type ? `clock-${this.type}` : "";
  }

  mounted() {
    this.init();
    this.activeClock();
  }

  init() {
    // init clock
    let svg = Snap("#clock");
    this.svg = svg;

    this.hour = this.svg.rect(79, 35, 3, 55).attr({
      fill: "#282828",
      transform: `r${10 * 30},80,80`
    });
    this.minute = this.svg.rect(79, 20, 3, 70).attr({
      fill: "#535353",
      transform: `r${10 * 6},80,80`
    });
    this.second = this.svg.rect(80, 10, 1, 80).attr({
      fill: "#ff6400",
      transform: `r${10 * 6},80,80`
    });
    this.svg.circle(80, 80, 2).attr({ fill: "#ff6400" });
    this.svg.circle(80, 80, 79).attr({ fill: "none", stroke: "#000" });
    // 数字时间
    // this.svg.rect(40, 20, 80, 20).attr({ fill: "#fff" });
    // this.second.text = svg.paper.text(40, 36, "12");
    // this.minute.text = svg.paper.text(70, 36, "04");
    // this.hour.text = svg.paper.text(100, 36, "00");

    // 生成刻度
    this.initClockTimer();
  }

  initClockTimer() {
    let path = "",
      numbers,
      table;

    numbers = this.svg
      .text(300, 300, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
      .attr({
        font: "300 20px Helvetica Neue",
        textAnchor: "middle"
      });

    // 初始化表盘
    for (var i = 0; i < 72; i++) {
      var r = i % 6 ? (i % 3 ? 247 : 240) : 230,
        sin = Math.sin(Snap.rad(5 * i)),
        cos = Math.cos(Snap.rad(5 * i));
      path +=
        "M" +
        [80 + 75 * cos, 80 + 75 * sin] +
        "L" +
        [80 + r * cos, 80 + r * sin];

      // 标记12刻度
      if (!(i % 6)) {
        numbers.select("tspan:nth-child(" + (i / 6 + 1) + ")").attr({
          x: 80 + 65 * Math.cos(Snap.rad(5 * i - 60)),
          y: 80 + 65 * Math.sin(Snap.rad(5 * i - 60)) + 8
        });
      }
    }

    table = this.svg
      .g(
        numbers,
        this.svg.path(path).attr({
          fill: "none",
          stroke: "#000",
          strokeWidth: 1
        })
      )
      .attr({
        transform: "t1, 0"
      });

    this.svg.g(table).attr({
      clip: this.svg.circle(80, 80, 80)
    });
  }

  activeClock() {
    this.clockTimer = setInterval(
      () => this.updateTime(this.hour, this.minute, this.second),
      1000
    );
  }

  // CLOCK Timer
  updateTime(hour: any, minute: any, second: any) {
    let currentTime: Date, _hour: number, _minute: number, _second: number;
    // 1.获取当前时间
    currentTime = new Date();
    _second = currentTime.getSeconds();
    _minute = currentTime.getMinutes();
    _hour = currentTime.getHours();
    _hour = _hour > 12 ? _hour - 12 : _hour;
    _hour = _hour === 0 ? 12 : _hour;

    // 2.秒针每秒旋转6°
    if (_second == 0) {
      //got to 360deg at 60s
      second = 60;
    } else if (_second == 1 && second) {
      // reset rotation transform(going from 360 to 6 deg)
      second.attr({ transform: "r0,80,80" });
    }

    if (_minute == 0) {
      _minute = 60;
    } else if (_minute == 1) {
      minute.attr({ transform: "r0,80,80" });
    }

    hour.animate({ transform: `r${_hour * 30},80,80` }, 200);
    minute.animate({ transform: `r${_minute * 6},80,80` }, 200);
    second.animate({ transform: `r${_second * 6},80,80` }, 500);
  }

  private destroyed() {
    clearInterval(this.clockTimer);
  }
}
</script>

<style lang="stylus">
$theme-color = #2ecc71

.hidden
  display none

.clock-container
  position: relative
  display: flex
  width: 160px
  height: 160px
  background: $theme-color
  border-radius: 50%;

  .clock
    width: 100%
    height: 100%
    position: absolute
    top: 0
    left: 0

    .circles
      stroke: #fff
      fill: #bada55

    .pins
      fill: #ff6400
      stroke-width: 4
      stroke-linecap: round
      stroke-miterlimit: 10

      .second-pin
        fill: #ff6400

      .minute-pin
        fill: #535353

      .hour-pin
        fill: #282828
        transform: rotate(0 80 80)
</style>
