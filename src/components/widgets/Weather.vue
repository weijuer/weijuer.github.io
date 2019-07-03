<template>
  <div class="weather" v-if="weather">
    <div class="weather-header" v-cloak>
      <time>{{ weather.basic.update.loc }}</time>
      <div class="city">{{ weather.basic.city }}</div>
      <div class="temp">{{ weather.now.tmp }}</div>
      <div class="condition">
        <svg class="icon svg-icon" aria-hidden="true">
          <use :xlink:href="getWeatherIcon(weather.now.cond.code)" />
        </svg>
        {{ weather.now.cond.txt }}
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
          <div class="tmp">{{ forecast.tmp.min + "~" + forecast.tmp.max }}</div>
          <div class="condition">{{ forecast.cond.txt_d }}</div>
          <div class="hum">{{ forecast.hum }}</div>
          <div class="wind">{{ forecast.wind.dir }}</div>
        </article>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import moment from "moment";
import "moment/locale/zh-cn";

@Component
export default class Weather extends Vue {
  @Getter city!: string;
  @Getter weather!: any;
  @Action("GET_CITY") get_city!: () => string;
  @Action("GET_WEATHER") get_weather!: (city: string) => any;

  private async created() {
    // 设定moment区域为中国
    moment.locale("zh-cn", {
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
  margin-bottom: 2.2rem
  box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.08)
  background-color: #fff
  border-radius: 4px

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
        border: 1px solid #aaa
</style>
