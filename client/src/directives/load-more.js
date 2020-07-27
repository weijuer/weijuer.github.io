/**
 * 滚底加载
 * @example <div v-loadmore[direction]="{offset: 10, onLoad: ()=>{}}"></div>
 */
export default {
  beforeMount(el, binding, vnode, prevVnode) {
    console.log(el, binding, vnode, prevVnode)
  },
  mounted(el, binding) {
    el.style.overflow = 'auto'
    el.style.maxHeight = '600px'
    el.addEventListener('scroll', function() {
      // A.判断向下滚动
      // B.判断是否到底
      // offset
      const options = binding.value
      const offset = options.offset || 10
      const distance = el.scrollHeight - el.scrollTop - el.clientHeight
      if (distance <= offset) {
        options.onLoad()
      }
    })
  },
  beforeUpdate() {},
  updated() {},
  beforeUnmount(el, binding) {
    el.removeEventListener('scroll', onScroll(el, binding))
  },
  unmounted() {}
}

/**
 * 滚动处理函数
 * @param {*} el
 * @param {*} binding
 */
function onScroll(el, binding) {
  // A.判断向下滚动
  // B.判断是否到底
  // offset
  const options = binding.value
  const offset = options.offset || 10
  const distance = el.scrollHeight - el.scrollTop - el.clientHeight
  if (distance <= offset) {
    options.onLoad()
  }
}
