<template>
    <div id="dropdown" @mouseover="changeDisplaySubmenu(true)" @mouseleave="changeDisplaySubmenu(false)">
        <a id="actual-provider" href="#">
            {{ selectedProvider.name }}
        </a>
        <ul id="submenu" v-show="displaySubmenu">
            <li
            v-for="provider in allProviders"
            :key="provider.idProduit"
            v-on:click="changeProvider(provider);updateProviderProducts()">
            <a href="#">{{ provider.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState({
            allProviders: state => state.providers.allProviders,
            selectedProvider : state => state.providers.selectedProvider,
            displaySubmenu : state => state.providers.displaySubmenu
        })
    },

    methods: {
        ...mapActions({
            changeProvider: 'providers/changeProvider',
            updateProviderProducts: 'products/updateProviderProducts',
            changeDisplaySubmenu : 'providers/changeDisplaySubmenu'
        }),
    },

    created () {
        this.$store.dispatch('providers/apiGetAllProviders')
    }
}
</script>

<style lang="scss" scoped>
  #dropdown {
    width: 100%;
    height: 100%;
    display: block;
    margin: 2px;
    z-index: 100;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  #actual-provider {
    background-color: lightgrey;
  }

  #actual-provider:hover {
    background-color: #cc6424;
    color: beige;
  }

  li {
    padding: 10px 10px;
    background-color: lightgrey;
    border-radius: 5px;
    border-top: 1px solid grey;
  }

  li:hover {
    background-color: #cc6424;
    color: beige;

    a {
        color: beige;
    }
  }

</style>