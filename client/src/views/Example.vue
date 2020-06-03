<template>
  <main class="example-page">
    <button @click="test">{{ state.message }}</button>
    <div class="virtual-list-example">
      <virtual-list :listData="state.dataList" itemSize="20" />
    </div>
  </main>
</template>

<script>
import { reactive, onMounted, onUnmounted } from 'vue'
import VirtualList from 'Widgets/VirtualList.vue'

const dataStorage = {
  fetch() {
    const dataList = []
    for (let i = 0; i < 10000; i++) {
      dataList.push({
        id: i + 1,
        value: `第${i + 1}个冰淇淋`,
        price: Math.random() * 10000
      })
    }
    dataStorage.uid = dataList.length
    return dataList
  }
}

export default {
  name: 'example',
  components: {
    VirtualList
  },
  setup() {
    const state = reactive({
      dataList: dataStorage.fetch(),
      message: 'test'
    })

    onMounted(() => {
      console.log(`onMounted`)
    })

    onUnmounted(() => {
      console.log(`onUnmounted`)
    })

    function test() {
      alert(state.message)
    }

    return {
      state,
      test
    }
  }
}
</script>

<style lang="stylus" scoped>
.virtual-list-example
  height: 300px
</style>>
