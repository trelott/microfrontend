<template>
  <div id="app">
    <header>
        <h1>Mme Bistro</h1>
    </header>
    <div id="main">
      <div id="component1">
        <searchBar/>
        <providerSelection/>
      </div>
      <div id="component2">
        <productList/>
        <cart/>
      </div>
    </div>
  </div>
</template>

<script>
import productList from './ProductsList/productsList.vue'
import cart from './Cart/cart.vue'
import searchBar from './SearchBar/searchBar.vue'
import providerSelection from './ProviderSelection/providerSelection.vue'
export default {
  components: { productList, cart, searchBar, providerSelection }
}
</script>

<style lang="scss" scoped>
  #app {
    header {
      height: 10%;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-content: center;
      justify-content: center;
      color: #cc6424;
    }

    #main {
      background-color: #EEEEEE;
      width: 100%;
      height: auto;
      min-height: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    font-family: 'Raleway', sans-serif;
    width: 100%;
    height: auto;
    min-height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #component1 {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 50px;
  }

  #component2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
  }
</style>