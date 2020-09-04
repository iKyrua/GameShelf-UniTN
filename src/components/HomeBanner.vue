<template>
  <v-container fluid fill-height class="HomeBanner" style="max-height: 100vh;">
    <v-layout justify-center align-center column pa-5>
      <div
        class="display-3 font-weight-black white--text text-xs-center"
      >Assassin's Creed: Black Flag</div>
      <br>
      <div
        class="display-1 font-weight-bold white--text text-xs-center"
      >Disponibile da oggi.</div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style scoped>
.HomeBanner {
  background: url("https://wallpapercave.com/wp/wp2709278.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
