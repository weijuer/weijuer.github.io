<template>
  <main class="news-page">
    <div class="container">
      <card :desc="`数据截至 ${news.statisEndTime}`">
        <template slot="title">
          <span>全国实时动态</span>
          <pulse>
            <w-icon class="refresh-btn" slot="icon" name="refresh" />
          </pulse>
        </template>
        <div class="summary" v-cloak>
          <div class="summary-item large">
            <div class="summary-label">确诊</div>
            <div class="summary-num">{{ news.total.china.sure_cnt }}</div>
            <div class="summary-line">
              <div class="summary-text">较昨日</div>
              <badge type="info" :text="news.total.china.sure_cnt_incr" />
            </div>
          </div>
          <div class="summary-item">
            <div class="summary-label">疑似</div>
            <div class="summary-num">{{ news.total.china.like_cnt }}</div>
            <div class="summary-line">
              <badge type="info" :text="news.total.china.like_cnt_incr" />
            </div>
          </div>
          <div class="summary-item">
            <div class="summary-label">治愈</div>
            <div class="summary-num">{{ news.total.china.cure_cnt }}</div>
            <div class="summary-line">
              <badge type="info" :text="news.total.china.cure_cnt_incr" />
            </div>
          </div>
          <div class="summary-item">
            <div class="summary-label">死亡</div>
            <div class="summary-num">{{ news.total.china.die_cnt }}</div>
            <div class="summary-line">
              <badge type="info" :text="news.total.china.die_cnt_incr" />
            </div>
          </div>
        </div>
      </card>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { Card, Pulse, Badge, Icon } from "@widgets";

@Component({
  components: {
    Card,
    Pulse,
    Badge,
    wIcon: Icon
  }
})
export default class News extends Vue {
  @Getter
  news!: W.INews;

  @Action("GET_NEWS")
  get_news!: () => W.INews;

  private mounted(): void {
    this.init();
  }

  private init(): void {
    this.get_news();
  }

  private refresh(): void {
    debugger;
    this.get_news();
  }
}
</script>

<style lang="stylus">
.news-page
  font-size: 0.32rem;

  .summary
    display: flex;
    justify-content: space-between;

    .summary-item
      text-align: center;
      padding-top: 14px;

      &.large
        margin-top: -1rem;
        text-align: left;

        .summary-num
          font-size: 1.875rem;

      .summary-label
        font-size: 0.875rem;

      .summary-num
        font-size: 1.25rem;

      .summary-line
        display: flex;

        .summary-text
          margin-right: 0.375rem;
          color: #999;

  .refresh-btn
    width: 20px;
    height: 20px;
</style>
