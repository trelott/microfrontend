const state = () => ({
    items : [],
    checkoutStatus: null
})

const getters = {
    getCartProducts(state, getters, rootState) {
        const providerProducts = rootState.products.allProducts
        const cartProducts = []
        state.items.forEach(item => {
            const product = providerProducts.find(product => product._id === item._id)
            cartProducts.push({
                '_id' : item._id,
                'nameProduct' : product.nameProduct,
                'price' : product.price,
                'quantity' : item.quantity
            })
        });
        return cartProducts
    },

    cartTotalPrice(state, getters, rootState) {
        const cartProducts = getters.getCartProducts
        var total = 0
        cartProducts.forEach(product => {
            total += parseInt(product.price) * parseInt(product.quantity)
        })
        return total
    }
}

const actions = {
    async checkout ({commit, state}, products) {
        const savedCartItems = [...state.items]
        commit('setCheckoutStatus', null)
        commit('setCartItems', { items : []})
        try {
            await shop.buyProducts(products)
            commit('setCheckoutStatus', 'succesful')
        } catch(e) {
            console.error(e)
            commit('setCheckoutStatus', 'failed')
            commit('setCartItems', {items : savedCartItems})
        }
    },

    addProductToCart({state, commit}, product) {
        var cartProduct = null
        var productInventory
        var itemQuantity
        state.items.forEach(item => {
            if (product._id === item._id) {
                cartProduct = product
                productInventory = product.inventory
                itemQuantity = item.quantity
            }
        })
        if (cartProduct === null) {
            commit('pushProductToCart', product)
        } else if (itemQuantity < productInventory) {
            commit('incrementItemQuantity', product)
        }
    },

    deleteOneFromCart({state, commit}, itemToDelete) {
        if ( itemToDelete.quantity > 1 ) {
            commit('decrementItemQuantity', itemToDelete)
        } else {
            commit('deleteCartItem', itemToDelete)
        }
    },

    deleteAllFromCart({state, commit}, product) {
        commit('deleteCartItem', product)
    }
}

const mutations = {
    pushProductToCart (state, product) {
        state.items.push({
            '_id' : product._id,
            'quantity' : 1
        })
    },

    incrementItemQuantity (state, product) {
        const cartItem = state.items.find(item => item._id === product._id)
        cartItem.quantity++
    },

    decrementItemQuantity (state, itemToDelete) {
        const cartItem = state.items.find(item => item._id === itemToDelete._id)
        cartItem.quantity--
    },

    deleteCartItem (state, itemToDelete) {
        var index = null
        for (let i = 0; i < state.items.length; i++) {
          if(state.items[i]._id === itemToDelete._id) {
            index = i
          }
            
        }
        state.items.splice(index,1,)
    },

    setCartItems (state, { items }) {
        state.items = items
    },

    setCheckoutStatus (state, status) {
        state.checkoutStatus = status
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }