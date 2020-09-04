<template>
  <div>
    <div style="height:60px" />
    <div>
      <h2 class="display-3 font-weight-thin">WELCOME TO GAMESHELF!</h2>
      <br>
      <h5
        class="headline font-weight-thin"
      >The place where you can find any game you want whenever you want</h5>
    </div>
    <br>
    <br>
    <Carousel />
    <div style="height:60px" />
  </div>
</template>

<script>
import Carousel from "../components/Carousel";
export default {
  name: "home",
  components: {
    Carousel
  }
};
</script>

<style scoped>
h5 {
  text-align: center;

  color: #ffffff;
}

h2 {
  text-align: center;
  color: #ffffff;
}
</style>
