<template>
  <div class="components">
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
    name: 'components',
    data() {
      return {
        dbInit: false
      }
    },
    components: {
    },
    mounted() {
      // console.log('-----mounted')

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
        /* db.find('timeline', 'title').then((res) => {
          this.timeline = res;
          console.log(res);
        }); */
      }
    }
  }
</script>

<style lang="less" src="@/assets/global/less/componets.less" />
<style lang="less" src="@/assets/global/less/widgets.less" />

<style lang="less" scoped>


</style>
