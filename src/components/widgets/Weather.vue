<template>
  <div class="weather" v-if="weather" v-cloak>
    <div class="weather-bubble bubble">
      <div class="temp">{{ weather.now.tmp }}</div>
    </div>
    <div class="weather-info">
      <div class="weather-header">
        <time v-text="weather.basic.update.loc"></time>
        <div class="city">{{ weather.basic.city }}</div>
        <div class="temp">{{ weather.now.tmp }}</div>
        <div class="condition">
          <svg class="icon svg-icon">
            <use :xlink:href="getWeatherIcon(weather.now.cond.code)" />
          </svg>
          <div class="cond-text">{{ weather.now.cond.txt }}</div>
        </div>
        <div class="wind">{{ weather.now.wind.dir }}</div>
      </div>
      <div class="weather-body">
        <div class="forecast scrollbar">
          <article
            class="forecast-item"
            v-for="(forecast, index) of weather.daily_forecast"
            :key="`forecast-${index}`"
          >
            <time>{{ getLocalDate(forecast.date) }}</time>
            <div class="tmp">
              {{ forecast.tmp.min + "~" + forecast.tmp.max }}
            </div>
            <div class="condition">{{ forecast.cond.txt_d }}</div>
            <div class="hum">{{ forecast.hum }}</div>
            <div class="wind">{{ forecast.wind.dir }}</div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import moment from "moment";

@Component
export default class Weather extends Vue {
  @Getter city!: string;
  @Getter weather!: W.IWeather;
  @Action("GET_CITY") get_city!: () => string;
  @Action("GET_WEATHER") get_weather!: (city: string) => W.IWeather;

  private async created() {
    // 设定moment区域为中国
    moment.locale("zh-cn-new", {
      weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
      calendar: {
        sameDay: "[今天]",
        nextDay: "[明天]",
        nextWeek: "ddd",
        lastDay: "[昨天]",
        lastWeek: "[上]ddd",
        sameElse: "L"
      }
    });

    await this.get_city();
    await this.get_weather(this.city);
  }

  private getLocalDate(date: string): string {
    return moment(date).calendar();
  }

  private getWeatherIcon(code: string) {
    return `#icon-tianqi-${code}`;
  }
}
</script>

<style lang="stylus">
$theme-color = #2ecc71

.weather
  position: fixed
  top: 160px
  right: 2rem
  margin-bottom: 2.2rem
  box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.08)
  background-color: #fff
  border-radius: 4px

  .weather-bubble
    display: flex
    justify-content: center
    align-items: center
    width: 4rem
    height: 4rem
    border-radius: 50%
    position: fixed
    top: 100px
    right: 2rem

    &:hover
      &~.weather-info
        display: flex
        flex-direction: column

    .temp
      font-size: 1.625rem
      position: relative

      &:after
        content: "℃"
        font-size: 1rem
        vertical-align: text-top

  .weather-info
    display: none

    .weather-header
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      padding: 1rem
      border-bottom: 1px dashed $theme-color

      .city
        font-size: 1.25rem

      .temp
        font-size: 3.75rem
        position: relative

        &:after
          content: "℃"
          font-size: 30px
          vertical-align: text-top

    .weather-body
      padding: 1rem
      color: #575962

      .forecast
        display: flex
        justify-content: space-between
        overflow-x: auto
        -webkit-overflow-scrolling: touch
        scroll-snap-points-x: repeat(250px)
        scroll-snap-type: mandatory

        .forecast-item
          display: flex
          flex-direction: column
          align-items: center
          font-size: 14px
          padding: 1rem
          margin: 0.5rem
          position: relative

          &:after
            content: ""
            display: inline-block
            width: 1px
            height: 80%
            background: linear-gradient(to right, #4cbf30 0%, #0f9d58 100%)
            vertical-align: middle
            position: absolute
            left: 100%
            margin-left: 8px

          &:last-child:after
            width: 0
            height: 0
</style>
