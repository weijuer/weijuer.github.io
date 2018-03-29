<template>
  <div class="wj-timeline wj-timeline--fixed">
    <div class="wj-timeline__items">
      <div class="wj-timeline__item" v-for="item in timeline">
        <div class="wj-timeline__item-time">{{ item.date }}</div>
        <div class="wj-timeline__item-content">
          <div class="wj-timeline__item-title">
            {{ item.title }}
          </div>
          <div class="wj-timeline__item-body">
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  // 1.加载插件
  import IndexedDB from '../static/assets/global/plugins/IndexedDB'
  // 2.加载本地数据blog.json文件
  const timelineData = require('../static/assets/global/data/timeline.json')

  export default {
    name: 'index',
    data() {
      return {
        timeline: []
      }
    },
    beforeCreate () {
      console.log('beforeCreate=====>')
    },
    created() {
      console.log('-----home created')
    },
    mounted() {
      console.log('-----mounted')

      // 获取indexedDB数据
      this.get_indexedDB_data()
    },
    methods: {
      get_indexedDB_data: function (params) {
        let self = this

        // 1.1 分页参数
        if (!params) {
          params = {
            currentPage: this.currentPage,
            pageSize: this.pageSize
          }
        }

        // 2.初始化timelineDB
        const db = new IndexedDB('weijuer_db');
        db.open('timeline');
        console.log(db);

      }
    }
  }
</script>
