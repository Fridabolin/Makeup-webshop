<template lang="">
  <div class="wrapper">
    <div class="round" :style="{ backgroundImage: `url(${roundPicture})` }">
      <!-- <div class="text">
        <p>{{ roundText }}</p>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  props: ["roundPicture", "roundText"],
};
</script>
<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: center;

  :last-child {
    margin-bottom: 2rem;
  }
  .round {
    margin-top: 5rem;
    border: 1px solid #232a23;
    border-radius: 50%;
    width: 20rem;
    height: 20rem;
    background-position: center;
    background-size: cover;
    @media only screen and (max-width: 800px) {
      width: 15rem;
      height: 15rem;
    }
  }

  .text {
    border: 1px solid #232a23;
    border-radius: 2px;
    min-width: 14rem;
    margin-left: 7rem;
    height: fit-content;
    left: 17rem;
    margin-top: 5rem;
    padding: 1rem;
    background: white;
  }
}
</style>
