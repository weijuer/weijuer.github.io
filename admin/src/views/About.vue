<template>
  <div class="about">
    <h1>This is an about page</h1>
    <section>
      <div>{{author}}</div>
      <div>{{ message }}</div>
      <button type="button" @click="gotoHome">go Home</button>
    </section>
    <section>
      <div>{{ count }}</div>
      <button type="button" @click="increment">increment</button>
    </section>
    <section>
      <button type="button" @click="toggleModalState">open Modal</button>
      <teleport to="#modal-wrapper">
        <w-modal v-if="modalState">
          <p>我是一个弹窗</p>
        </w-modal>
      </teleport>
    </section>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { Modal } from 'Widgets'
import { ref, reactive, toRefs, computed, watch, watchEffect } from 'vue'

export default {
  name: 'About',
  components: {
    [Modal.name]: Modal
  },
  setup() {
    // 使用vuex
    const store = useStore()
    // 使用vue-router
    const router = useRouter()

    // 定义一个ref响应对象
    const count = ref(0)
    const modalState = ref(false)

    // 定义多个，则使用reactive
    const state = reactive({
      message: 'vue 3.0 demo',
      salary: 1000,
      // 定义一个计算属性
      computedSalary: computed(() => `${state.salary}元`),
      author: computed(() => store.state.author)
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

    const gotoHome = () => {
      router.push('/')
    }

    // 弹窗状态切换
    function toggleModalState() {
      modalState.value = !modalState.value
    }

    return {
      // 使用toRefs返回展开对象
      ...toRefs(state),
      count,
      modalState,
      addSalary,
      stopWatch,
      increment,
      gotoHome,
      toggleModalState
    }
  }
}
</script>
