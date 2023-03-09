<template lang="">
  <div class="home-view-wrapper">
    <div class="page-wrapper">
      <Hero
        :hero-deal="heroDeal"
        :hero-h2="heroH2"
        @goToAnotherPage="goToShop"
      ></Hero>

      <div class="main-wrapper">
        <div class="left">
          <SmallTextBox></SmallTextBox>
          <RoundTextPicture
            :round-picture="roundPicture"
            :round-text="roundTextOne"
          ></RoundTextPicture>
          <!-- <RoundTextPicture
            :round-picture="roundPicture2"
            :round-text="roundTextTwo"
          ></RoundTextPicture> -->
        </div>
        <div class="right">
          <SideBar
            :sidebar-text="sidebarText"
            :sidebar-img="sidebarImg"
            @goToAnotherPage="goToShop"
          ></SideBar>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Hero from "../components/Hero.vue";
import SideBar from "../components/SideBar.vue";
import SmallTextBox from "../components/SmallTextBox.vue";
import RoundTextPicture from "../components/RoundTextPicture.vue";
export default {
  components: {
    Hero,
    SideBar,
    SmallTextBox,
    RoundTextPicture,
  },

  data() {
    return {
      sidebarText: "Discover the classics",
      sidebarImg:
        "https://cdn.pixabay.com/photo/2019/05/15/19/06/woman-4205719_1280.jpg",
      heroDeal: "20% off basic essentials",
      heroH2: "Keeping it simple",
      roundPicture:
        "https://images.unsplash.com/photo-1594465919760-441fe5908ab0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      roundTextOne: "Dolor sit amet!",
      roundPicture2:
        "https://images.unsplash.com/photo-1542833807-ad5af0977050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      roundTextTwo: "Lorem ipsum dolor sit amet!",
    };
  },

  methods: {
    goToShop() {
      this.$router.push("/Shop");
    },
  },
};
</script>
<style lang="scss" scoped>
.page-wrapper {
  margin-top: 5rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .main-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;
    width: 90%;
    height: 100vh;

    .left {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media only screen and (max-width: 540px) {
        width: 100%;
      }
    }
    .right {
      width: 50%;
      display: flex;
      justify-content: end;
      @media only screen and (max-width: 540px) {
        display: none;
      }
    }
  }
}
</style>
