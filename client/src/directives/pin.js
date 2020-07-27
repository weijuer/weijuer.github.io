/**
 * 顶针
 * @example <div v-pin[direction]="20"></div>
 */
export default {
  mounted(el, binding) {
    console.log(el, binding)
    el.style.position = 'sticky'
    const direction = binding.arg === 'left' ? 'left' : 'top'
    el.style[direction] = binding.value + 'px'
  }
}
