<template>
  <div class="tabs tabs-linemove">
    <div class="tab-bar">
      <slot name="tab-bar"/>
      <!--<ul>
        <li :index="index" :class="{'active': index === activeTab}" v-for="(tab, index) in tabList">
          <a href="javascript:;" data-tabName="tab" @click="tabClick(index)">{{ tab.name }}</a>
        </li>
      </ul>-->
    </div>
    <div class="tab-content">
      <slot name="tab-pane"/>
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
      }
    },
    data() {
      return {
        activeTab: 0
      };
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

  .tabs {
    position: relative;
    overflow: hidden;
    margin: 0 auto 20px;
    width: 100%;
    font-weight: 300;
    font-size: 1rem;

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
  }


  /*****************************/
  /* Moving Line */
  /*****************************/

  .tabs-linemove .tab-bar {
    background: #fff;
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
    -webkit-transform: translate3d(-100%,0,0);
    transform: translate3d(-100%,0,0);
  }

  .tabs-linemove .tab-bar li:nth-child(2).active ~ li:last-child:before {
    -webkit-transform: translate3d(-100%,0,0);
    transform: translate3d(-100%,0,0);
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
