import { createStore, createLogger } from 'vuex'
import base from './modules/base'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    base
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
