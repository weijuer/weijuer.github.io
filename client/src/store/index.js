import { createStore, createLogger } from 'vuex'
import base from './modules/base'
import cart from './modules/cart'
import products from './modules/products'
import chat from './modules/chat'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    chat,
    base,
    cart,
    products
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
