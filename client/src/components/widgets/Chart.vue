<template>
  <div class="w-chart" id="wChart" style="height:400px;" ref="$chart"></div>
</template>

<script lang="ts">
import { Component, Vue, Ref, Prop, Watch } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import "echarts/map/js/china";

// enumerating ECharts events for now
const ACTION_EVENTS = [
  "legendselectchanged",
  "legendselected",
  "legendunselected",
  "datazoom",
  "datarangeselected",
  "timelinechanged",
  "timelineplaychanged",
  "restore",
  "dataviewchanged",
  "magictypechanged",
  "geoselectchanged",
  "geoselected",
  "geounselected",
  "pieselectchanged",
  "pieselected",
  "pieunselected",
  "mapselectchanged",
  "mapselected",
  "mapunselected",
  "axisareaselected",
  "brush",
  "brushselected"
];
const MOUSE_EVENTS = [
  "click",
  "dblclick",
  "mouseover",
  "mouseout",
  "mousedown",
  "mouseup",
  "globalout"
];

@Component
export default class WChart extends Vue {
  @Prop({ type: Object })
  options!: object;

  @Prop({ type: String })
  theme!: string;

  @Prop({ type: Object })
  initOptions!: object;

  @Prop({ type: String })
  group!: string;

  @Prop({ type: Boolean })
  autoResize!: boolean;

  @Prop({ type: Array })
  modules!: [];

  @Ref("$chart")
  readonly $chart!: HTMLDivElement;

  // chart
  chart: any = null;

  private get width() {
    return this.chart.getWidth();
  }

  private get height() {
    return this.chart.getHeight();
  }

  private get isDisposed() {
    return this.chart.isDisposed();
  }

  private mounted() {
    // init
    if (this.options) {
      this.echartInit();
    }
  }

  // 通过监听参数：options、group进行重绘
  @Watch("options", { deep: true })
  onOptionsChange(newVal: object, oldVal: object) {
    if (!this.chart && newVal) {
      this.echartInit();
    } else {
      this.chart.setOption(this.options, true);
    }
  }

  @Watch("group")
  onGroupChange(newVal: string, oldVal: string) {
    this.chart.group = newVal;
  }

  // init echarts
  echartInit() {
    // 按需引入
    if (this.chart) return false;

    import("echarts")
      .then(({ init }) => {
        const {
          theme,
          initOptions,
          group,
          options,
          autoResize,
          _resizeHanlder
        } = this;
        let chart = init(this.$chart, theme, initOptions);

        if (group) {
          chart.group = group;
        }

        chart.setOption(options, true);

        // 自定义点击事件回调
        ACTION_EVENTS.forEach(event => {
          chart.on(event, params => {
            this.$emit(event, params);
          });
        });

        // 自定义鼠标事件回调
        MOUSE_EVENTS.forEach(event => {
          chart.on(event, params => {
            this.$emit(event, params);
          });
        });

        // 改变屏幕尺寸
        if (autoResize) {
          window.addEventListener("resize", _resizeHanlder, false);
        }

        this.chart = chart;
        console.log("加载成功", chart);
      })
      .catch(_ => {
        console.log("加载失败");
      });
  }

  // 绑定方法
  _delegateMethod(name, ...args) {
    if (!this.chart) {
      return;
    }
    return this.chart[name](...args);
  }

  // 设置数据
  mergeOptions(options) {
    this._delegateMethod("setOption", options);
  }

  // 是否重新绘制
  resize(options) {
    this._delegateMethod("resize", options);
  }

  dispatchAction(payload) {
    this._delegateMethod("dispatchAction", payload);
  }

  convertToPixel(finder, value) {
    return this._delegateMethod("convertToPixel", finder, value);
  }

  convertFromPixel(finder, value) {
    return this._delegateMethod("convertFromPixel", finder, value);
  }

  containPixel(finder, value) {
    return this._delegateMethod("containPixel", finder, value);
  }

  showLoading(type, options) {
    this._delegateMethod("showLoading", type, options);
  }

  hideLoading() {
    this._delegateMethod("hideLoading");
  }

  getDataURL(options) {
    return this._delegateMethod("getDataURL", options);
  }

  getConnectedDataURL(options) {
    return this._delegateMethod("getConnectedDataURL", options);
  }

  clear() {
    this._delegateMethod("clear");
  }

  dispose() {
    this._delegateMethod("dispose");
  }

  _resizeHanlder() {
    window.setTimeout(() => {
      this.chart.resize();
    }, 100);
  }

  connect(group) {
    const { chart } = this;
    if (typeof group !== "string") {
      group = group.map(chart => chart.chart);
    }
    this.chart.connect(group);
  }

  disconnect(group) {
    this.chart.disConnect(group);
  }

  registerMap(...args) {
    this.chart.registerMap(...args);
  }

  registerTheme(...args) {
    this.chart.registerTheme(...args);
  }

  private beforeDestroy() {
    if (!this.chart) {
      return;
    }
    if (this.autoResize) {
      window.removeEventListener("resize", this._resizeHanlder, false);
    }
    this.dispose();
  }
}
</script>

<style lang="stylus">
@import '../../assets/css/core/vars.styl';

.w-chart
  width: 100%;
  height: 100%;
</style>
