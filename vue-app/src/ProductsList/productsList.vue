<template>
  <div id="productList">
    <ul>
        <li 
        v-for="product in providerProducts"
        :key="product._id">
            <div id="productDescription">{{ product.nameProduct }} -- {{ product.price }}$</div>
            <br>
            <button 
                :disabled="!product.inventory"
                v-on:click="addProductToCart(product)">
                Ajouter au panier
            </button>
        </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState({
    providerProducts : state => state.products.providerProducts
    })
  },

  methods: {
    ...mapActions({
      addProductToCart : 'cart/addProductToCart'
    })
  },

  created () {
    this.$store.dispatch('products/updateProviderProducts'),
    this.$store.dispatch('products/updateAllProducts')
  }
}
</script>

<style lang="scss" scoped>
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
  }
  li {
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
    background-color: lightgray;
    width: 25%;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin: 10px 5px;
  }
  button {
    width: 100%;
    padding: 10px 10px;
    border-radius: 10px;
    border: 0px;
  }
  button:hover {
    background-color: #cc6424;
    color : beige;
  }
  #productDescription {
    padding: 10px 10px;
  }

  #productList {
    width: 100%;
  }
</style>