<template>
  <div class="show-box">
    <div class="w-container">
      <section class="document">
        <aside class="aside">
          <h3 class="inner-title">布局</h3>
          <ul class="w-nav">
            <li class="w-nav--item"><a href="">Sticky Header</a></li>
            <li class="w-nav--item"><a href="">Sticky Footer</a></li>
            <li class="w-nav--item"><a href="">Sidebar</a></li>
            <li class="w-nav--item"><a href="">Fixed-Width Sidebar</a></li>
            <li class="w-nav--item"><a href="">Sticky Sidebar</a></li>
          </ul>
        </aside>
        <article class="article">

          <section class="example">
            <code>
              <header>HEADER</header>
              <article>CONTENT</article>
              <footer>FOOTER</footer>
            </code>
          </section>

        </article>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'show-box',
    data() {
      return {
        timeline: [],
        dbInit: false
      }
    },
    components: {
    },
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

<style lang="less">
  @themeColor: #72af3a;

  .document {
    display: flex;
    flex: auto;
    min-height: 100vh;
    height: 100%;
  }

  .aside,
  aside {
    flex: 1 1 auto;
    position: relative;
    margin: 1.2rem;

    &:after {
      display: table;
      content: '';
      position: absolute;
      top: 0;
      left: 100%;
      width: 1px;
      height: 100%;
      background: @themeColor;
    }

    .inner-title {
      font-size: 1.1rem;
    }
  }

  .article,
  article {
    flex: 12 1 auto;
    margin: 1.2rem;
  }

  .w-nav {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .w-nav {
    display: flex;
    flex-flow: column nowrap;
  }

  .default {
    .document {
      background: #fff;
    }
  }

</style>
