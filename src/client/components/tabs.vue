<template>
  <div class="tabs tabs-linemove">
    <div class="tab-bar">
      <ul>
        <li :class="{'active': tab.index === activeTab}" v-for="tab in tabItems">
          <a href="javascript:;" data-tabName="tab">{{ tab.name }}</a>
        </li>
      </ul>
    </div>
    <div class="tab-content">
      <div :class="['tab-pane', {'active': tab.index === activeTab }]" v-for="tab in tabItems">
        {{tab.content}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tabs',
    props: {
      // tab数
      tabList: {
        type: Object,
        default: []
      }
    },
    data() {
      return {
        tabItems: this.tabList,
        activeTab: '1'
      };
    },
    methods: {
      tabClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style lang="less">
  .tabs {
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    width: 100%;
    font-weight: 300;
    font-size: 1.25em;

    .tab-bar {
      text-align: center;

      ul {
        position: relative;
        display: flex;
        margin: 0 auto;
        padding: 0;
        list-style: none;
        flex-flow: row wrap;
        justify-content: center;

        li {
          position: relative;
          z-index: 1;
          display: block;
          margin: 0;
          text-align: center;
          flex: 1;

          a {
            position: relative;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            line-height: 2.5;

            a:focus {
              outline: none;
            }
          }
        }
      }
    }
  }

</style>
