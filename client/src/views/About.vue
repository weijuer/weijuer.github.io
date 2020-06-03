<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ message }}</div>
    <button type="button" @click="increment">increment</button>
    <div>{{ count }}</div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, computed, watch, watchEffect } from 'vue'

export default {
  name: 'About',
  setup() {
    // 定义一个ref响应对象
    const count = ref(0)
    // 定义多个，则使用reactive
    const state = reactive({
      message: 'vue 3.0 demo',
      salary: 1000,
      author: 'weijuer',
      // 定义一个计算属性
      computedSalary: computed(() => `${state.salary}元`)
    })

    // 如果响应性的属性有变更，就会触发这个函数, 但他是惰性的
    watchEffect(() => {
      console.log(`effect 触发了！${state.salary}`)
    })

    // 监听
    const stop = watch(state, (val, oldVal) => {
      console.log('watch ', oldVal.salary)
    })

    // 增加薪水
    const addSalary = () => state.salary++

    // 手动停止监听
    const stopWatch = () => stop()

    // 定义一个方法
    function increment() {
      count.value++
    }

    return {
      // 使用toRefs返回展开对象
      ...toRefs(state),
      count,
      addSalary,
      stopWatch,
      increment
    }
  }
}
</script>
