<template lang="">
  <nav>
    <div class="wrapper-left">
      <router-link class="link" to="/"
        ><p class="link purple">Home</p></router-link
      >
      <router-link class="link" to="/Shop"
        ><p class="link">Shop</p></router-link
      >
    </div>
    <div class="wrapper-right">
      <router-link class="link" to="/Login"
        ><p class="link">Login</p></router-link
      >
      <button @click="showCartModal = true" class="link">
        Cart <unicon name="shopping-bag"></unicon>
      </button>
      <CartListPopUp
        v-if="showCartModal"
        @close="showCartModal = false"
      ></CartListPopUp>
    </div>
  </nav>
</template>
<script>
import CartListPopUp from "./CartListPopUp.vue";
export default {
  components: {
    CartListPopUp,
  },

  data() {
    return {
      showCartModal: false,
    };
  },

  method: {},
};
</script>
<style lang="scss" scoped>
nav {
  display: flex;
  width: 90%;
  height: 3rem;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

  .wrapper-left,
  .wrapper-right {
    display: flex;
    .link {
      padding: 5px;
      color: black;
      text-decoration: none;
      font-size: 25px;
    }

    .purple {
      color: #b19cd9;
    }
  }

  button {
    display: flex;
    background: none;
    border: none;
    outline: none;
    font-size: 18px;
    align-items: center;
  }
}
</style>
