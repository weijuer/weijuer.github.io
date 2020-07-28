/**
 * 滚底加载
 * @example <div v-loadmore[direction]="{offset: 10, onLoad: ()=>{}}"></div>
 */
export default {
  beforeMount(el, binding, vnode, prevVnode) {
    console.log(el, binding, vnode, prevVnode)
  },
  mounted(el, binding) {
    let scroll = {
      last: 0,
      current: 0,
      direction: ''
    }
    el.addEventListener('scroll', function() {
      // A.判断向下滚动
      scroll.last = el.scrollTop
      scroll.direction = scroll.last < scroll.current ? 'up' : 'down'
      scroll.current = scroll.last

      // B.判断是否到底
      // offset
      const options = binding.value
      const offset = options.offset || 10
      const distance = el.scrollHeight - el.scrollTop - el.clientHeight
      if (scroll.direction === 'down' && distance <= offset) {
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
