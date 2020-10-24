<template>
  <div class="learning">
    <h1>This is an learning test</h1>
    <section>
      <div>{{ author }}</div>
      <div>{{ message }}</div>
      <button type="button" @click="gotoHome">go Home</button>
    </section>
    <section>
      <div>{{ count }}</div>
      <button type="button" @click="increment">increment</button>
    </section>
    <section>
      <h5>弹窗</h5>
      <button type="button" @click="toggleModalState">open Modal</button>
      <teleport to="#modal-wrapper">
        <w-modal v-if="modalState">
          <p>我是一个弹窗</p>
        </w-modal>
      </teleport>
    </section>
    <section>
      <h5>w-tooltip</h5>
      <w-tooltip tip="我是正常模式">我是一行文字</w-tooltip>
      <w-tooltip direction="top" tip="我在上方">我是一行文字</w-tooltip>
      <w-tooltip direction="bottom" tip="我下方">我是一行文字</w-tooltip>
    </section>

    <section>
      <w-uploader
        @on-success="onUploaded"
        url="/api/files/uploadfile"
        extensions="png,jpg"
        tips="上传测试"
      />
    </section>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { Modal, Tooltip, Uploader } from 'Widgets'
import {
  ref,
  reactive,
  toRefs,
  computed,
  watch,
  watchEffect,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue'

export default {
  name: 'learning',
  components: {
    [Modal.name]: Modal,
    [Tooltip.name]: Tooltip,
    [Uploader.name]: Uploader,
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
      message: 'vue learning',
      salary: 1000,
      // 定义一个计算属性
      computedSalary: computed(() => `${state.salary}元`),
      author: computed(() => store.state.author),
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
      debugger
      modalState.value = !modalState.value
    }

    const onUploaded = (e) => {
      console.log(e)
    }

    // 3.x生命周期
    console.log('setup')

    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onMounted(() => {
      console.log('onMounted')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })

    return {
      // 使用toRefs返回展开对象
      ...toRefs(state),
      count,
      modalState,
      addSalary,
      stopWatch,
      increment,
      gotoHome,
      toggleModalState,
      onUploaded,
    }
  },
}
</script>
