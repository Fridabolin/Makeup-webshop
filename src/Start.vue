<template lang="">
  <div class="nav-wrapper">
    <Header></Header>
  </div>
  <router-view></router-view>
</template>
<script>
import { RouterLink, RouterView } from "vue-router";

import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>
<style scoped lang="scss">
.nav-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
