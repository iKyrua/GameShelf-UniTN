<template>
  <div class="container">
    <br>
    <v-layout row>
      <v-flex xs12 class="text-xs-left display-1 font-weight-black my-2 ml-4">
        <h3 class="color display-2">Popular Games</h3>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs12>
        <h5 class="color my-2 ml-4 font-weight-regular headline">Here's a list of the most popular games.</h5>
      </v-flex>
    </v-layout>
    <br>
    <PopularList/>
    <div style="height:60px"/>
  </div>
</template>

<script>
import PopularList from "../components/PopularList.vue";
export default {
  components: {
    PopularList
  }
};
</script>

<style lang="scss" scoped>
.color {
  color: #ffffff;
}
</style>