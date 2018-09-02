<template>
  <div :class="['banner-container', type, {'mouse-enter': isMouseEnter}]" :style="{height: height}" @mouseenter="enter" @mouseleave="leave">
    <!--轮播图区-->
    <div class="banner-content">
      <transition-group tag="ul" class="banner">
        <li v-for="(item, index) of items" :style="setItemStyle(index)" :class="['banner-item', {'active': index === active}]" :key="index">
          <slot name="item" :item="item"></slot>
        </li>
      </transition-group>
    </div>

    <!--控制区-->
    <div class="banner-controls">
      <!--上下页按钮-->
      <section class="pagination-wrapper">
        <ul class="pagination">
          <li><a href="javascript:;" class="btn" @click="prev">上一页</a></li>
          <li><a href="javascript:;" class="btn" @click="next">下一页</a></li>
        </ul>
      </section>

      <!--分页按钮-->
      <section class="bullet-wrapper">
        <ul class="bullet">
          <li v-for="(item, index) of items" :class="['bullet-item', {'active': index === active}]"><a href="javascript:;" v-text="index + 1" @click="go(index)"></a></li>
        </ul>
      </section>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'banner',
    data() {
      return {
        itemWidth: 0,
        duration: 300,
        container: null,
        active: 0,
        time: 0,
        isMouseEnter: false
      }
    },
    props: {
      items: {
        type: Array,
        default: []
      },
      height: {
        type: [Number, String],
        default: 'auto'
      },
      type: {
        type: String,
        default: 'card'
      }
    },
    created() {
      // this.play();
    },
    mounted() {
      this.init();
    },
    computed: {

    },
    updated() {
      console.log('active:===>' + this.active);
    },
    methods: {
      init() {
        this.updateWidth();
        //this.play();
      },
      updateWidth() {
        this.itemWidth = document.querySelector('.app').offsetWidth || document.documentElement.offsetWidth;
      },
      itemStyle(index) {
        return {
          // background: this.randomColor(),
          transform: this.setItemStyle(index)
        }
      },
      // 根据当前活动子项的下标计算各个子项的X轴位置
      // 计算公式(子项的下标 - 当前活动下标) * 子项宽度 + 偏移(手指移动距离)；
      setItemStyle(index) {
        let distance = ((index - this.active) + 0.5) * 100;
        let len = this.items.length;
        let last = len - 1;
        let transform;
        let zIndex;

        // 当前激活项
        if(index === this.active) {
          transform = `translateX(${distance}%) scale(1)`;
          zIndex = 3;
        } else if (this.active === 0 && index === last ) {
          distance = ((last - len) + 0.5) * 100;
          transform = `translateX(${distance}%) scale(.8)`;
          zIndex = 1;
        } else if (this.active === last && index === 0) {
          distance = ((len - last) + 0.5) * 100;
          transform = `translateX(${distance}%) scale(.8)`;
          zIndex = 1;
        } else {
          transform = `translateX(${distance}%) scale(.8)`;
          zIndex = 1;
        }
        return {
          transform: transform,
          zIndex: zIndex
        };
      },
      // 给每一个子项添加transition过度动画
      setTransition (duration) {
        duration = duration || this.duration;
        duration = typeof duration === 'number' ? (duration + 'ms') : duration;
        return duration;
      },
      next() {
        let index = this.active + 1;
        this.go(index);
      },
      prev() {
        let index = this.active - 1;
        this.go(index);
      },
      autoPlay() {
        let index = this.active + 1;
        this.go(index);
      },
      play() {
        this.time = setInterval(this.autoPlay, 3000);
      },
      enter() {
        console.log('enter');
        this.isMouseEnter = true;
        //clearInterval(this.time);
      },
      leave() {
        console.log('leave');
        this.isMouseEnter = false;
        //this.play();
      },
      go(index) {
        this.active = index;
        if(this.active < 0) {
          this.active = this.items.length - 1;
          //this.itemStyle(this.active);
        } else if(this.active > this.items.length - 1) {
          this.active = 0;
          //this.itemStyle(this.active);
        }
        //this.$emit('change', this.active);
      },
      randomColor() {
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += (Math.random() * 16 | 0).toString(16);
        }
        return color;
      }
    }
  }
</script>

<style lang="less" scoped>
  @themeColor: #72af3a;
  @fontColor: #333;
  @bgColor: #bee897;

  ul {
    list-style: none;
  }

  .banner-container {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    .banner-content {

      .banner {
        counter-reset: item;

        .banner-item {
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 100%;
          display: flex;
          justify-items: center;
          align-items: center;
          background: #fff;
          border: 1px solid #000;
          transition: all 0.5s cubic-bezier(0.8, 0, 0.1, 1);

          &:before {
            flex: 1;
            counter-increment: item;
            content: counter(item);
            font-size: 40px;
            text-align: center;
            color: @themeColor;
          }

        }

      }
    }

    .banner-controls {
      display: flex;
      flex-flow: column nowrap;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 3;

      .pagination-wrapper {
        flex: 1;
        display: flex;
        align-items: center;

        .pagination {
          flex: 1;
          display: none;
          justify-content: space-between;

          li > a {
            background: rgba(0, 0, 0, 0.5);
            padding: 0.6rem;
            color: #fff;
          }

        }
      }

      .bullet-wrapper {
        display: flex;
        align-self: center;

        .bullet {
          display: inline-flex;
          align-self: center;

          .bullet-item {

            >a {
              display: inline-flex;
              justify-content: center;
              align-items: center;
              margin: 0 6px;
              width: 20px;
              height: 20px;
              line-height: 20px;
              font-size: 12px;
              background: @bgColor;
              color: #fff;
              border: 1px solid #000;
              border-radius: 100%;
            }

            &.active > a {
              background: @themeColor;
            }

          }
        }
      }

    }

    &.mouse-enter {

      .banner-controls {
        .pagination-wrapper {
          .pagination {
            display: flex;
          }
        }
      }
    }
  }

  .banner-item-enter, .banner-item-leave-to {
    transform:translateX(0);
    transition:all 1s ease;
  }
  .banner-item-leave-active {
    transform:translateX(50%);
    transition:all 1s ease;
  }

</style>
