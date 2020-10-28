import { createStore, createLogger } from 'vuex'
import base from './modules/base'
import cart from './modules/cart'
import products from './modules/products'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    base,
    cart,
    products
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
