<template>
  <main class="news-page">
    <div class="container">
      <card @desc-click="refresh()">
        <template slot="title">
          <span>全国实时动态</span>
          <pulse />
        </template>
        <template slot="desc">
          <span>{{ `数据截至 ${news.statisEndTime}` }}</span>
          <w-icon class="refresh-btn" slot="icon" name="refresh" />
        </template>
        <div class="summary" v-cloak>
          <div class="summary-item large">
            <div class="summary-label">确诊</div>
            <div class="summary-num text-primary">{{ news.total.china.sure_cnt }}</div>
            <div class="summary-line">
              <div class="summary-text">较昨日</div>
              <badge type="primary" :text="news.total.china.sure_cnt_incr" />
            </div>
          </div>
          <div class="summary-item">
            <div class="summary-label">疑似</div>
            <div class="summary-num text-warning">{{ news.total.china.like_cnt }}</div>
            <div class="summary-line">
              <badge type="warning" :text="news.total.china.like_cnt_incr" />
            </div>
          </div>
          <div class="summary-item">
            <div class="summary-label">治愈</div>
            <div class="summary-num text-success">{{ news.total.china.cure_cnt }}</div>
            <div class="summary-line">
              <badge type="success" :text="news.total.china.cure_cnt_incr" />
            </div>
          </div>
          <div class="summary-item">
            <div class="summary-label">死亡</div>
            <div class="summary-num text-default">{{ news.total.china.die_cnt }}</div>
            <div class="summary-line">
              <badge type="default" :text="news.total.china.die_cnt_incr" />
            </div>
          </div>
        </div>
      </card>

      <card title="疫情分布图" :desc="`数据截至 ${news.statisEndTime}`">
        <img :src="news.chinaInfectMapImg" />
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

  refresh(): void {
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
      padding: 14px 6px;
      display: flex;
      flex-direction: column;
      align-items: center;

      &.large
        align-items: start;
        margin-top: -1rem;

        .summary-num
          font-size: 1.875rem;

      .summary-label
        font-size: 0.875rem;

      .summary-num
        font-size: 1.25rem;
        margin: 0.25rem 0;

      .summary-line
        display: flex;

        .summary-text
          margin-right: 0.375rem;
          color: #999;

  .refresh-btn
    width: 20px;
    height: 20px;
    margin-left: 0.375rem;
</style>
