<template>
  <main class="news-page">
    <div class="container">
      <div class="covid-news">
        <aside class="aside">
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
        </aside>

        <div class="news">
          <card title="各地数据" :desc="`数据截至 ${news.statisEndTime}`">
            <div class="provice-list">
              <table class="table">
                <thead>
                  <tr>
                    <th>地区</th>
                    <th>确诊</th>
                    <th>治愈</th>
                    <th>死亡</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in provinces" :key="'provice' + index">
                    <td class="text-big">{{ item.province }}</td>
                    <td class="text-primary">
                      <div class="sure-summary">
                        <span class="sure-num">{{ item.sure_cnt }}</span>
                        <badge type="no" :text="item.sure_new_cnt || '0'" />
                      </div>
                    </td>
                    <td class="text-success">{{ item.cure_cnt }}</td>
                    <td class="text-default">{{ item.die_cnt }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </card>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { Card, Pulse, Badge, Icon } from "@widgets";
import { arraySort } from "../utils/utils";

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

  get provinces() {
    let provinces = this.news.provinces;
    return provinces.sort(arraySort("sure_cnt", "desc"));
  }

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
  font-size: 12px;

  .covid-news
    display: grid;
    grid-template-columns: 30% minmax(0, 1fr);
    gap: 2rem;

    .refresh-btn
      width: 20px;
      height: 20px;
      margin-left: 0.375rem;

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

.table
  width: 100%;
  word-break: keep-all;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 14px;

  thead,
  tbody
    tr
      th,
      td
        padding: 6px 0;
        font-size: 14px;
        font-weight: 600;
        text-align: center;
        border-bottom: 1px solid #f3f3f3;

        .sure-summary
          display: flex;
          justify-content: center;

          .badge
            font-weight: normal;
            height: 12px;
            padding: 0;

          .sure-num
            margin-right: 4px;

@media (max-width: 768px)
  .news-page
    .covid-news
      grid-template-columns: auto;
      gap: 0.5rem;
</style>
