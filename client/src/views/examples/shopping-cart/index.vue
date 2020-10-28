<template>
  <div class="container">
    <h1>Shopping Cart Example</h1>
    <hr />
    <h2>Products</h2>
    <ProductList />
    <hr />
    <ShoppingCart />
  </div>
</template>

<script>
import ProductList from './product-list'
import ShoppingCart from './shopping-cart'
export default {
  name: 'shopping',
  components: { ProductList, ShoppingCart },
}
</script>
