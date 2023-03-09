<template lang="">
  <div class="wrapper-hero" @click="routingAway">
    <div class="picture"></div>
    <div class="text">
      <h2>{{ heroH2 }}</h2>
      <h3>{{ heroDeal }}</h3>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: ["hero-deal", "hero-h2"],
  data() {
    return {};
  },
  methods: {
    routingAway() {
      this.$emit("goToAnotherPage");
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper-hero {
  display: flex;
  height: 25rem;
  width: 90%;
  @media only screen and (max-width: 800px) {
    height: 15rem;
  }

  @media only screen and (max-width: 540px) {
    flex-direction: column;
  }

  .picture {
    flex: 2;
    border: 1px solid black;
    background-image: url("https://cdn.pixabay.com/photo/2018/01/14/00/05/makeup-3081015_1280.jpg");
    background-position: center;
    background-size: cover;
    img {
      width: 100%;
      height: 100%;
    }
    @media only screen and (max-width: 540px) {
      flex: 3;
    }
  }
  .text {
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1.5;
    @media only screen and (max-width: 540px) {
      flex: 1;
      border-top: none;
      font-size: 12px;
    }

    h2 {
      margin-bottom: 5px;
    }
  }
}
</style>
