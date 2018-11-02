<template>
  <div class="blog">
    <div class="w-container">

      <div class="row">
        <div class="col-8">
          <panel>
            <div slot="header" class="panel-header">
              <div class="caption">
                <div class="panel-header--title">
                  <h3 class="panel-header--title-text">标题</h3>
                </div>
              </div>
            </div>
            <div slot="main" class="panel-body">内容</div>
          </panel>

          <panel>
            <div slot="header" class="panel-header">
              <div class="caption">
                <div class="panel-header--title">
                  <h3 class="panel-header--title-text">标题</h3>
                </div>
              </div>
            </div>
            <div slot="main" class="panel-body">内容</div>
          </panel>
          <panel>
            <div slot="header" class="panel-header">
              <div class="caption">
                <div class="panel-header--title">
                  <h3 class="panel-header--title-text">标题</h3>
                </div>
              </div>
            </div>
            <div slot="main" class="panel-body">内容</div>
          </panel>
        </div>
        <div class="col-4">
          <panel>
            <div slot="header" class="panel-header">
              <div class="caption">
                <div class="panel-header--title">
                  <h3 class="panel-header--title-text">标题</h3>
                </div>
              </div>
            </div>
            <div slot="main" class="panel-body">内容</div>
          </panel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import panel from '@/components/panel'

  export default {
    name: 'blog',
    data() {
      return {
        timeline: []
      }
    },
    components: {
      panel
    },
    props: ['blog'],
    beforeCreate() {
      console.log('beforeCreate=====>')
    },
    created() {
      console.log('-----home created')
    },
    mounted() {
      console.log('-----mounted')

      // 获取indexedDB数据
      // this.get_indexedDB_data()
    },
    methods: {
      get_indexedDB_data: function (params) {
        // 1.1 分页参数
        if (!params) {
          params = {
            currentPage: this.currentPage,
            pageSize: this.pageSize
          }
        }

        // 2.初始化timelineDB
        db.find('timeline', 'title').then((res) => {
          this.timeline = res;
          console.log(res);
        });
      }
    }
  }
</script>
