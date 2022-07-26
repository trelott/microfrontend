<template>
  <div id="cart">
    <h2>Votre panier :</h2>
    <p v-show="!products.length">
      <i>Please add some products to cart.</i>
    </p>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.nameProduct }} - {{ product.price }}$ x {{ product.quantity }}
        <button
        v-on:click="deleteOneFromCart(product)">
          Suprimer 1 article
        </button>
        <button 
        v-show="product.quantity > 1"
        v-on:click="deleteAllFromCart(product)">
          Suprimer tous les articles
        </button>
      </li>
    </ul>
    <p v-show="!!products.length">
      Total : {{ totalPrice }}$
    </p>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus,
      items : state => state.cart.items
    }),
    ...mapGetters('cart', {
      products: 'getCartProducts',
      totalPrice : 'cartTotalPrice'
    })
  },
  methods: {
    checkout (products) {
      this.$store.dispatch('cart/checkout', products)
    },
    ...mapActions({
      deleteOneFromCart : 'cart/deleteOneFromCart',
      deleteAllFromCart : 'cart/deleteAllFromCart'
    })
  }
}
</script>

<style lang="scss" scoped>
  button {
    border-radius: 5px;
    padding: 5px 5px;
    appearance: auto;
    writing-mode: horizontal-tb !important;
    color: #4d4d4d;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    box-sizing: border-box;
    background-color: none;
    border: none;
    margin: 2px 2px;
  }

  ul {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-radius: 10px;
    width: auto;
  }

  li {
    padding: 5px 5px;
    margin: 2px 0px;
    background-color: lightgray;
    border-radius: 10px;
    width: auto;
  }

  button:hover {
    background-color: #cc6424;
    color: beige;
  }

  #cart {
    width: 100%;
    padding-left: 20%;
  }
</style>