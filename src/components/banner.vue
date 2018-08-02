<template>
  <div class="banner-container">
    <!--轮播图区-->
    <div class="banner-content">
      <ul class="banner">
        <li v-for="(item, index) of 6" :style="bannerStyle(index)" :class="['banner-item', {'active': index === active}]"><a :href="item" v-text="item"></a></li>
      </ul>
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
          <li v-for="(item, index) of 6" :class="['bullet-item', {'active': index === active}]"><a href="javascript:;" v-text="index + 1" @click="setPage(index)"></a></li>
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
        active: 0,
        bannerList: []
      }
    },
    mounted() {

    },
    computed: {

    },
    updated() {
      console.log('active:===>' + this.active);
    },
    methods: {
      next() {
        if(this.active < this.bannerList.length - 1) {
          this.active += 1;
        } else {
          this.active = 0;
        }
      },
      prev() {
        if(this.active > 0) {
          this.active -= 1;
        } else {
          this.active = this.bannerList.length - 1;
        }
      },
      setPage(number) {
        this.active = number;
      },
      bannerStyle(index) {
        return {
          background: this.randomColor(),
          transform: this.getTransform(index)
        }
      },
      randomColor() {
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += (Math.random() * 16 | 0).toString(16);
        }
        return color;
      },
      getTransform(index) {
        let transform = '';
        //let offsetWidth = document.querySelector('#app').offsetWidth;
        //let itemWidth = offsetWidth * .5;
        if(index === this.active) {
          transform = 'translateX(' + index +'px)' +  'scale(1)';
        } else {
          transform = 'translateX(' + index +'px)' +  'scale(.8)';
        }

        return transform;
      }
    }
  }
</script>

<style lang="less" scoped>
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
        height: 350px;
        position: relative;

        .banner-item {
          width: 50%;
          height: 100%;
          display: inline-flex;
          justify-items: center;
          align-items: center;
          background: #fff;
          border: 1px solid #000;
          transition: all 0.3s linear;
          transform: translateX(0px) scale(0);

          &.active {
            transform: translateX(0px) scale(0);
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

      .pagination-wrapper {
        flex: 1;
        display: flex;
        align-items: center;

        .pagination {
          flex: 1;
          display: flex;
          justify-content: space-between;

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
              background: #00dfff;
              color: #fff;
              border: 1px solid #000;
              border-radius: 100%;
            }

            &.active > a {
              background: #0da971;
            }

          }
        }
      }

    }


  }

</style>
