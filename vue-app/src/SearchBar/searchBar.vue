<template>
    <div id="search-bar">
        <input type="text" v-model="input" v-on:change="updateSearchInput(input);updateProviderProducts()" placeholder="chercher un produit">
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState({
            searchInput: state => state.search.searchInput
        }),
    },

    methods: {
        ...mapActions({
            updateSearchInput : 'search/updateSearchInput',
            updateProviderProducts: 'products/updateProviderProducts'
        })
    },

    created () {

    }
}
</script>

<style lang="scss" scoped>
  #search-bar {
    width: 100%;
    display: flex;
    height: 100%;
    margin: 2px;
  }
  
  input {
    width: 100%;
    height: 100%;
    writing-mode: horizontal-tb !important;
    color: grey;
    display: flex;
    text-align: start;
    cursor: text;
    background-color: none;
    margin: 0em;
    padding: 1px 2px;
    border: none;
    border-image: initial;
    border-radius: 5px;
  }

  input:focus {
    border: 2px;
    border-color: #cc6424;
  }


</style>