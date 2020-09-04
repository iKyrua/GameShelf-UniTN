<template>
  <div>
    <v-container grid-list-xl>
      <v-layout row wrap>
        <v-flex xs12 sm6 md3 v-for="(game, index) in list" :key="index">
          <router-link
            style="text-decoration: none; color: inherit;"
            :to="{name:'game', params: {gameId: game.id}}"
          >
            <v-hover v-slot:default="{ hover }">
              <v-card
                class="mx-auto my-12"
                max-width="700"
                color="#444444"
                dark
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <v-img :src="game.background_image" height="200px"></v-img>
                    </v-flex>
                  </v-layout>
                </v-container>
                <v-card-title primary-title style="overflow-y: auto; height:105px">
                  <div>
                    <h3 class="title mb-0, font-weight-light">{{game.name}}</h3>
                  </div>
                </v-card-title>
                <div>
                  <h4 class="headline mb-0"></h4>
                </div>
              </v-card>
            </v-hover>
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "Retrogameslist",
  data() {
    return {
      list: []
    };
  },
  mounted() {
    Vue.axios
      .get(
        "https://api.rawg.io/api/games?dates=1980-01-01,1990-12-31&ordering=-rating"
      )
      .then(resp => {
        this.list = resp.data.results;
        console.warn(resp.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.v-card {
  transition: opacity 0.2s ease-in-out;
}
.v-card:not(.on-hover) {
  opacity: 0.7;
}
</style>