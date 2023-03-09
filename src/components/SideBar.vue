<template lang="">
  <div
    class="sidebar"
    :style="{ backgroundImage: `url(${sidebarImg})` }"
    @click="routingAway"
  >
    <div class="text-wrapper">
      <h2>{{ sidebarText }}</h2>
    </div>
  </div>
</template>
<script>
export default {
  props: ["sidebarText", "sidebarImg"],

  data() {
    return {
      backgroundSidebar:
        "https://images.unsplash.com/photo-1605450081927-6b40c11c661f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2083&q=80",
    };
  },

  methods: {
    routingAway() {
      this.$emit("goToAnotherPage");
    },
  },
};
</script>
<style lang="scss">
.sidebar {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 25rem;
  border: 1px solid black;
  background-position: center;
  background-size: cover;
  @media only screen and (max-width: 920px) {
    width: fit-content;
    max-width: 17rem;
  }

  .text-wrapper {
    width: 90%;
    padding: 1rem;
    margin-top: 1rem;
    h2 {
      padding: 1rem;
      background: #ffffff94;
    }
  }
}
</style>
