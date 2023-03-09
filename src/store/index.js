import { createStore } from "vuex";

const store = createStore({
  state: {
    cart: [],
  },
  getters: {
    cart() {
      return this.$store.state.cart;
    },
  },
  mutations: {
    ADD_TO_CART(state, product) {
      let item = state.cart.find((i) => i.id == product.id);

      if (item) {
        item.count++;
      } else {
        state.cart.push({ ...product, count: 1 });
      }
    },
    REMOVE_FROM_CART(state, item) {
      state.cart.splice(item, 1);
    },
    INCREMENT(state, product) {
      let item = state.cart.find((i) => i.id == product.id);
      item.count++;
    },
    REDUCTION(state, product) {
      let item = state.cart.find((i) => i.id == product.id);
      item.count--;
    },
  },
  actions: {},
  modules: {},
});

export default store;
