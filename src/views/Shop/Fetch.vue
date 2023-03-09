<template lang="">
  <div class="wrapper">
    <CartListPopUp v-if="showCartModal" @close="closeCartModal"></CartListPopUp>
    <div class="filter">
      <div class="buttons">
        <button @click="filter = 'all'">All products</button>
        <button @click="filter = 'blush'">Blush</button>
        <button @click="filter = 'eyeliner'">Eyeliner</button>
        <button @click="filter = 'lip_liner'">Lipliner</button>
        <button @click="filter = 'lipstick'">Lipstick</button>
      </div>
    </div>
    <div class="wrapper-card">
      <div class="card" v-for="item in filteredItems" v-bind:key="item.id">
        <div class="img-buy">
          <img :src="item.image_link" alt="makeup" />
          <div><button @click="addToCart(item.id)">Buy</button></div>
        </div>
        <div class="wrapper-text">
          <div>
            <p>{{ item.name }}</p>
          </div>
          <div>
            <p>{{ item.price }}</p>
          </div>
          <router-link
            class="link"
            :to="{
              name: 'ProductDetails',
              params: { id: item.id },
            }"
            ><i>More information</i></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import CartListPopUp from "../../components/CartListPopUp.vue";

export default {
  components: {
    CartListPopUp,
  },
  data() {
    return {
      makeup: null,
      makeupItem: [],
      filter: "all",
      showCartModal: false,
      onlyThisProduct: [],
    };
  },
  mounted() {
    this.fetchMakeup;
  },

  computed: {
    fetchMakeup() {
      axios
        .get(
          "http://makeup-api.herokuapp.com/api/v1/products.json?brand=milani"
        )
        .then((response) => (this.makeup = response.data));
    },

    filteredItems() {
      var result;

      if (this.filter != "all") {
        var onlyThisProduct = this.filter;
        result = this.makeup.filter(function (products) {
          return products.product_type == onlyThisProduct;
        });
      } else {
        result = this.makeup;
      }

      return result;
    },
  },
  methods: {
    addToCart(index) {
      this.makeupItem = this.makeup.find((makeupId) => makeupId.id == index);

      this.$store.commit("ADD_TO_CART", {
        id: this.makeupItem.id,
        brandName: this.makeupItem.brand,
        productName: this.makeupItem.name,
        price: this.makeupItem.price,
        img: this.makeupItem.image_link,
        count: 1,
      });
      this.showCartModal = true;
    },
    closeCartModal() {
      this.showCartModal = false;
    },
  },
};
</script>
<style scoped lang="scss">
.wrapper {
  display: flex;
  width: 90%;

  .filter {
    width: fit-content;
    height: fit-content;
    padding: 1rem;
    margin-top: 3rem;

    .buttons {
      display: flex;
      flex-direction: column;
      button {
        margin: 1rem;
        margin-left: 0;
        padding: 1rem;
        background: unset;
        outline: unset;
        border: unset;
        font-size: 20px;
        text-align: left;
      }
    }
  }

  .wrapper-card {
    margin-top: 5rem;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
  }

  .img-buy {
    display: flex;
    justify-content: space-between;

    button {
      padding: 1rem;
      font-size: 18px;
      background: #b19cd9 !important;
      border-radius: 50%;
      color: white;
      font-weight: bold;
      border: 1px solid rgb(150 153 141 / 80%) !important;
    }
  }

  .card {
    width: 20rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background: white;
    margin-right: 1rem;
    margin-bottom: 1rem;
    border-radius: 3px;

    button {
      background: unset;
      border: unset;
      outline: unset;
    }
    p,
    i {
      padding: 5px;
    }

    .more-information {
      max-width: 10rem;
    }

    .wrapper-text {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      text-align: left;

      .link {
        color: black;
        text-decoration: unset;
        font-size: 16px;
      }
    }
  }
}
</style>
