<template lang="">
  <div class="cart-list-wrapper">
    <button @click="closeModal">close</button>
    <h1>Your items</h1>
    <div v-if="products.length === 0">
      You don't have any items in your cart
    </div>
    <div
      class="cart-item"
      v-for="(product, index) in products"
      :key="product.id"
    >
      <p>{{ product.productName }}</p>
      <p>{{ product.price }} $</p>
      <p>{{ product.count }} item</p>
      <button @click="removeFromCart(index)">
        <unicon name="trash-alt"></unicon>
      </button>
    </div>
    <router-link class="link" to="/Cart"
      ><p class="checkout">Ready for checkout</p></router-link
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: this.$store.state.cart,
    };
  },

  methods: {
    closeModal() {
      this.$emit("close");
    },

    removeFromCart(index) {
      this.$store.commit("REMOVE_FROM_CART", index);
    },
  },
};
</script>
<style scoped lang="scss">
.cart-list-wrapper {
  background-color: white;
  padding: 1rem;
  min-width: 20rem;
  border-radius: 10px;
  border: 1px solid rgb(150 153 141 / 80%);
  position: absolute;
  top: 5rem;
  right: 5rem;

  button {
    border: none;
    outline: none;
    background: none;
    font-size: 16px;
  }

  .checkout {
    color: black;
    margin-top: 1rem;
  }

  h1 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #b19cd9;
  }

  .cart-item {
    display: flex;
    p {
      padding-right: 0.5rem;
    }
  }
}
</style>
