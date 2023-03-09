<template lang="">
  <div class="navbarShop">
    <router-link class="link" to="/Login"
      ><p class="link">Milani</p></router-link
    >
    <router-link class="link" to="/Login"
      ><p class="link">Maybelinne</p></router-link
    >
    <router-link class="link" to="/Login"
      ><p class="link">Covergirl</p></router-link
    >
  </div>
</template>
<script>
export default {
  components: {},
};
</script>
<style scoped lang="scss">
.navbarShop {
  width: 90%;
  padding: 1rem;
  height: 5rem;
  display: flex;

  .link {
    padding: 1rem;
    color: black;
    text-decoration: unset;
  }
}
</style>
