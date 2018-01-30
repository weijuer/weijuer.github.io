<template>
  <div class="wj-pagination">
    <ul class="wj-content-pagination wj-theme">
      <!--first page-->
      <li :class="['wj-pager-item', 'wj-pager-item--first', {'wj-pager-item--disabled' : index === 1}]">
        <a @click="first" href="javascript:;"><i class="fa fa-fast-backward"></i></a>
      </li>
      <!--prev page-->
      <li :class="['wj-pager-item', 'wj-pager-item--prev', {'wj-pager-item--disabled' : index === 1}]">
        <a @click="prev" href="javascript:;"><i class="fa fa-backward"></i></a>
      </li>
      <li :class="['wj-pager-item', 'wj-pager-item--more']" v-if="showPrevMore">
        <a href="javascript:;">...</a>
      </li>
      <li :class="['wj-pager-item', {'wj-pager-item--active' : index === pager}]" v-for="pager in pagers">
        <a @click="go(pager)" href="javascript:;">{{ pager }}</a>
      </li>
      <li :class="['wj-pager-item', 'wj-pager-item--more']" v-if="showNextMore">
        <a href="javascript:;">...</a>
      </li>
      <!--next page-->
      <li :class="['wj-pager-item', 'wj-pager-item--next', {'wj-pager-item--disabled' : index === pages}]">
        <a @click="next" href="javascript:;"><i class="fa fa-forward"></i></a>
      </li>
      <!--last page-->
      <li :class="['wj-pager-item', 'wj-pager-item--last', {'wj-pager-item--disabled' : index === pages}]">
        <a @click="last" href="javascript:;"><i class="fa fa-fast-forward"></i></a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'pagination',
    // 通过props来接受从父组件传递过来的值
    props: {

      // 页面中的可见页码，其他的以...替代, 必须是奇数
      perPages: {
        type: Number,
        default: 5
      },

      // 当前页码
      pageIndex: {
        type: Number,
        default: 1
      },

      // 每页显示条数
      pageSize: {
        type: Number,
        default: 10
      },

      // 总记录数
      total: {
        type: Number,
        default: 1
      }

    },
    data () {
      return {
        index: this.pageIndex, // 当前页码
        limit: this.pageSize, // 每页显示条数
        size: this.total || 1, // 总记录数
        showPrevMore: false,
        showNextMore: false
      }
    },
    methods: {
      prev () {
        if (this.index > 1) {
          this.go(this.index - 1)
        }
      },
      next () {
        if (this.index < this.pages) {
          this.go(this.index + 1)
        }
      },
      first () {
        if (this.index !== 1) {
          this.go(1)
        }
      },
      last () {
        if (this.index !== this.pages) {
          this.go(this.pages)
        }
      },
      go (page) {
        if (this.index !== page) {
          this.index = page
          // 父组件通过change方法来接受当前的页码
          this.$emit('change', this.index)
        }
      }
    },
    computed: {

      // 计算总页码
      pages () {
        return Math.ceil(this.size / this.limit)
      },

      // 计算页码，当count等变化时自动计算
      pagers () {
        const array = []
        const perPages = this.perPages
        const pageCount = this.pages
        let current = this.index
        const _offset = (perPages - 1) / 2

        const offset = {
          start: current - _offset,
          end: current + _offset
        }

        // -1, 3
        if (offset.start < 1) {
          offset.end = offset.end + (1 - offset.start)
          offset.start = 1
        }
        if (offset.end > pageCount) {
          offset.start = offset.start - (offset.end - pageCount)
          offset.end = pageCount
        }
        if (offset.start < 1) offset.start = 1

        this.showPrevMore = (offset.start > 1)
        this.showNextMore = (offset.end < pageCount)

        for (let i = offset.start; i <= offset.end; i++) {
          array.push(i)
        }

        return array
      }
    },
    watch: {
      pageIndex (val) {
        this.index = val || 1
      },
      pageSize (val) {
        this.limit = val || 4
      },
      total (val) {
        this.size = val || 1
      }
    }
  }
</script>

<style scoped>
  .wj-content-pagination {
    display: inline-block;
    padding: 0;
    margin: 0;
  }

  .wj-content-pagination > .wj-pager-item {
    display: inline-block;
    list-style: none;
  }

  .wj-content-pagination > .wj-pager-item > span,
  .wj-content-pagination > .wj-pager-item > a {
    width: 40px;
    height: 40px;
    text-align: center;
    display: inline-block;
    font-size: 17px;
    color: #5c6873;
    font-weight: 400;
    padding: 7px 4px 6px 4px;
    border-radius: 40px;
    border: 1px solid #a5a5a5;
  }

  .wj-content-pagination > .wj-pager-space > span {
    border-radius: 0;
    border: 0;
  }

  .wj-content-pagination.wj-square > .wj-pager-item > span,
  .wj-content-pagination.wj-square > .wj-pager-item > a {
    border-radius: 0;
  }

  .wj-content-pagination.wj-theme > .wj-pager-item:hover > a {
    border-color: #29bd87;
    background: #29bd87;
    color: #fff;
  }

  .wj-content-pagination.wj-theme > .wj-pager-item:hover > a > i {
    color: #fff;
  }

  .wj-content-pagination.wj-theme > .wj-pager-item.wj-pager-item--active > span,
  .wj-content-pagination.wj-theme > .wj-pager-item.wj-pager-item--active > a {
    border-color: #29bd87;
    background: #29bd87;
    color: #fff;
  }

  .wj-content-pagination.wj-theme > .wj-pager-item.wj-pager-item--active > span > i,
  .wj-content-pagination.wj-theme > .wj-pager-item.wj-pager-item--active > a > i {
    color: #fff;
  }

  .wj-content-pagination.wj-theme > .wj-pager-item.wj-pager-item--disabled > span,
  .wj-content-pagination.wj-theme > .wj-pager-item.wj-pager-item--disabled > a {
    border-color: #a2a2a2;
    background: #a2a2a2;
    color: #fff;
    cursor: not-allowed;
  }

  .wj-content-pagination.wj-theme > .wj-pager-item.wj-pager-item--disabled > span > i,
  .wj-content-pagination.wj-theme > .wj-pager-item.wj-pager-item--disabled > a > i {
    color: #fff;
  }
</style>
