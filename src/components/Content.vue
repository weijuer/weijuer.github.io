<template>
  <div class="content">
    <h1 v-html="msg"></h1>
    <label for="r1">点我修改颜色</label><input type="checkbox" v-model="class1" id="r1">
    <div :class="{'class1': class1}">我会变色</div>
    <p>{{ 5 + 5}}</p>
    <p>{{ ok ? 'YES' : 'NO' }}</p>
    <p>{{ message | capitalize }} <button @click="reverseMessage">反转字符串</button></p>
    <p v-if="seen">现在你看到我了</p>
    <a v-bind:href="url">朕乐视频</a>

    <p>遍历数组</p>
    <ul>
      <template v-for="site in sites">
        <li>{{ site.name }}</li>
        <li>--------------</li>
      </template>
    </ul>

    <p>遍历对象</p>
    <ul>
      <li v-for="(value, key, index) in object">
        {{ index }}. {{ key }} : {{ value }}
      </li>
    </ul>

    <p>迭代整数</p>
    <ul>
      <li v-for="n in 10">
        {{ n }}
      </li>
    </ul>

    <!--自定义组件-->
    <wj></wj>

    <!--页面载入时input聚焦-->
    <input type="text" v-focus>
  </div>
</template>

<script>
var Weijuer = {
  template: '<h3>我是weijuer,我是自定义组件</h3>'
}

export default {
  name: 'content',
  data () {
    return {
      msg: 'vue-project测试',
      class1: false,
      ok: true,
      message: 'weijuer',
      id: 1,
      seen: true,
      url: 'http://www.weijuer.com',
      sites: [
        { name: 'Runoob' },
        { name: 'Google' },
        { name: 'Taobao' }
      ],
      object: {
        name: '菜鸟教程',
        url: 'http://www.runoob.com',
        slogan: '学的不仅是技术，更是梦想！'
      },
      isActice: true,
      error: null
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActice && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  },
  components: {
    // 只在父模版可用
    'wj': Weijuer
  },
  directives: {
    // 注册一个局部的自定义指令 v-focus
    focus: {
      inserted: function (el) {
        // 聚焦元素
        el.focus()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.class1 {
  background: #f00;
  color: #fff;
}
</style>
