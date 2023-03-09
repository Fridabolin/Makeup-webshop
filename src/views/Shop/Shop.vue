<template lang="">
  <div class="wrapper-shop">
    <Fetch></Fetch>
  </div>
</template>
<script>
import Fetch from "./Fetch.vue";
import NavbarShop from "./NavbarShop.vue";
export default {
  components: {
    Fetch,
    NavbarShop,
  },
};
</script>
<style scoped lang="scss">
.wrapper-shop {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
