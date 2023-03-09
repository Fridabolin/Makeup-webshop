<template lang="">
  <div class="wrapper">
    <div class="cart">
      <div class="info-products">
        <div><h1>CART</h1></div>
        <div class="empty" v-if="products.length === 0">
          <h2>Empty in here!</h2>
        </div>
        <div class="product-wrapper" v-for="(product, index) in products">
          <div
            class="img"
            :style="{ backgroundImage: `url(${product.img})` }"
          ></div>
          <div class="info-product">
            <div class="brand-name">
              <b
                ><p>{{ product.BrandName }}</p></b
              >
            </div>

            <div class="product-name">
              <p>{{ product.productName }}</p>
            </div>
            <div class="price">
              <p>{{ product.price }}</p>
            </div>
          </div>
          <div class="wrapper-buttons">
            <button class="minus" @click="removeCount(product.id)">-</button>
            <p class="count">{{ product.count }}</p>
            <button class="plus" @click="addCount(product.id)">+</button>
            <button @click="removeFromCart(index)">
              <unicon name="trash-alt"></unicon>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: this.$store.state.cart,
      noProducts: false,
    };
  },
  methods: {
    removeFromCart(index) {
      this.$store.commit("REMOVE_FROM_CART", index);
    },
    addCount(index) {
      const item = this.products.find((makeupId) => makeupId.id == index);
      this.$store.commit("INCREMENT", {
        id: item.id,
        count: item.count,
      });
    },
    removeCount(index) {
      const item = this.products.find((makeupId) => makeupId.id == index);
      this.$store.commit("REDUCTION", {
        id: item.id,
        count: item.count,
      });
    },
  },
};
</script>
<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: center;

  .empty {
    h2 {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }

  .img {
    width: 4rem;
    height: 5rem;
    background-color: pink;
    background-size: cover;
    background-position: center;
  }

  .cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 3rem;
    width: 90%;
    background: white;
    .info-products {
      margin-top: 3rem;
      width: 70%;
    }

    .product-wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 5rem;
      margin-bottom: 1rem;
      padding: 1rem;
      border-bottom: 1px solid black;
      @media only screen and (max-width: 810px) {
        flex-direction: column;
      }

      .brand-name,
      .product-name {
        margin-top: 0.5rem;
      }

      .price {
        margin-top: 1rem;
      }

      .wrapper-buttons {
        display: flex;
        align-items: center;

        button {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          border: unset;
          outline: unset;
        }

        :last-child:not(svg) {
          margin-left: 0.5rem;
        }

        .plus {
          background: #98bd98;
        }
        .minus {
          background: #dfd2d2;
        }

        p {
          margin: 1rem;
        }
      }
    }
  }
}
</style>
