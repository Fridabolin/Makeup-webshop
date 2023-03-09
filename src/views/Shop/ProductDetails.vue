<template lang="">
  <div class="wrapper">
    <CartListPopUp v-if="showCartModal" @close="closeCartModal"></CartListPopUp>
    <div class="right">
      <div
        class="round"
        :style="{ backgroundImage: `url(${makeupItem.image_link})` }"
      ></div>
    </div>

    <div class="left">
      <div class="info">
        <div class="brand-name">
          <h1>
            <b>{{ makeupItem.brand }}</b>
          </h1>
        </div>
        <div class="product-name">
          <h2>{{ makeupItem.name }}</h2>
        </div>
        <div class="price-buy">
          <div class="price">
            <b>{{ makeupItem.price }} $</b>
          </div>
          <div class="add-product">
            <button @click="count--">-</button>
            <div>{{ count }}</div>
            <button @click="count++">+</button>
          </div>
          <button class="buy" @click="addToCart()">BUY</button>
        </div>
        <div class="description">
          <p>{{ makeupItem.description }}</p>
        </div>
        <div class="taglist">
          <ul v-for="tag_list in makeupItem.tag_list">
            <p>This product is:</p>
            <li class="tag">{{ tag_list }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import CartListPopUp from "../../components/CartListPopUp.vue";
export default {
  props: ["id"],
  components: {
    CartListPopUp,
  },
  data() {
    return {
      makeup: null,
      makeupItem: [],
      count: 1,
      showCartModal: false,
    };
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      axios
        .get(
          `http://makeup-api.herokuapp.com/api/v1/products.json?brand=milani`
        )
        .then((response) => {
          this.makeup = response.data;
          this.makeupItem = this.makeup.find(
            (makeupId) => makeupId.id == this.id
          );
        });
    },
    addToCart() {
      this.$store.commit("ADD_TO_CART", {
        id: this.makeupItem.id,
        brandName: this.makeupItem.brand,
        productName: this.makeupItem.name,
        price: this.makeupItem.price,
        img: this.makeupItem.image_link,
        count: this.count,
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
  margin: auto;
  margin-bottom: 2rem;
  padding: 1rem;
  margin-top: 3rem;
  background: white;
  border-radius: 3px;

  @media only screen and (max-width: 1100px) {
    flex-direction: column;
  }

  .right,
  .left {
    display: flex;
    justify-content: center;
    flex: 1;
    padding: 1rem;
  }

  .round {
    margin-top: 5rem;
    margin-bottom: 5rem;
    height: 30rem;
    width: 30rem;
    border-radius: 50%;
    border: 1px solid rgb(150 153 141 / 80%);
  }

  .left {
    flex-direction: column;

    justify-content: unset;
  }
  .info {
    display: flex;
    flex-direction: column;
    margin-top: 5rem;

    .product-name,
    .price-buy {
      margin-top: 3rem;
    }

    h1 {
      color: #b19cd9;
    }

    a {
      text-decoration: none;
    }

    .price-buy {
      display: flex;
      align-items: center;

      .price {
        width: 10rem;
      }
      button,
      .add-product {
        width: 10rem;
        height: 3rem;
        background: white;
        border: 0.5px solid grey;
        outline: none;
        border-radius: 50px;

        button {
          border: none;
          outline: none;
          background: none;
        }
      }
      .buy {
        background-color: #b19cd9 !important;
        color: white;
        font-size: 18px;
      }
      .add-product {
        width: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 1rem;
      }
    }
  }
  .description {
    margin-top: 2rem;
  }

  .taglist {
    margin-top: 2rem;

    .tag {
      display: flex;
      font-weight: bold;
    }
  }
}
</style>
