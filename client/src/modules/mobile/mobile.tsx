import '@assets/css/index.styl'
import { createComponent } from '@vue/composition-api'

export default createComponent({
  name: 'Mobile',
  setup() {
    return () => <div id="mobile">mobile</div>
  }
})
