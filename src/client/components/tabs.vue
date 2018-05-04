<template>
  <div :class="['tabs', localType]">
    <div class="tab-bar">
      <!--<ul>
        <slot name="tab-bar-item" :index="index" :activeTab="activeTab" :tab="item" v-for="(item, index) in tabList" />
      </ul>-->
      <ul>
        <li :index="index" :class="{'active': index === activeTab}" v-for="(item, index) in tabList">
          <a href="javascript:;" data-tabName="tab" @click="tabClick(index)">{{ item.name }}</a>
        </li>
      </ul>
    </div>
    <div class="tab-content">
      <slot name="tab-pane" :tab="{item, activeTab, index}" v-for="(item, index) in tabList" />
      <!--<div :index="index" :class="['tab-pane', {'active': index === activeTab }]" v-for="(tab, index) in tabList">
        {{tab.content}}
      </div>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tabs',
    props: {
      // tab数
      tabList: {
        type: Array,
        default: []
      },
      tabType: {
        type: String,
        default: 'linemove'
      }
    },
    data() {
      return {
        activeTab: 0
      };
    },
    computed: {
      localType() {
        return 'tabs-' + this.tabType;
      }
    },
    methods: {
      tabClick(index) {
        this.activeTab = index;
      }
    }
  };
</script>

<style lang="less">
  @fontColor: #29bd87;
  @bgColor: #fff;

  .tabs {
    position: relative;
    overflow: hidden;
    margin: 0 auto 20px;
    width: 100%;
    font-weight: 300;
    font-size: 1rem;
    background: @bgColor;

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

            a:focus {
              outline: none;
            }
          }

          &.active {

            a {
              color: @fontColor;
            }
          }
        }
      }
    }

    .tab-content {
      position: relative;

      .tab-pane {
        display: none;
        margin: 0 auto;
        padding: 1em;

        &.active {
          display: block;
        }
      }
    }
  }


  /*****************************/
  /* Moving Line */
  /*****************************/

  .tabs-linemove .tab-bar {
    background: @bgColor;
    border-bottom: 1px solid @fontColor;
  }

  .tabs-linemove .tab-bar li:last-child:before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: @fontColor;
    content: '';
    -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.35, 0, 0.25, 1), -webkit-transform 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.1s;
    transition: transform 0.3s cubic-bezier(0.35, 0, 0.25, 1), transform 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.1s;
  }

  /* Move the line */
  .tabs-linemove .tab-bar li:first-child.active ~ li:last-child:before {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  .tabs-linemove .tab-bar li:nth-child(2).active ~ li:last-child:before {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  .tabs-linemove .tab-bar a {
    padding: .625rem 0;
    line-height: 1;
    -webkit-transition: color 0.3s;
    transition: color 0.3s;
  }

  .tabs-linemove .tab-bar li.active a {
    color: @fontColor;
  }

  .tabs-linemove .tab-bar a span {
    font-weight: 700;
  }

</style>
