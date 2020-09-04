<template>
  <div>
    <Observer @intersect="intersected"/>
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
                    <h3 class="title mb-0, display-2">{{game.name}}</h3>
                    <!-- title 20 sp-->
                  </div>
                </v-card-title>
              </v-card>
            </v-hover>
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>
    <Observer @intersect="intersected"/>
  </div>
</template>






<script>
import Observer from "./Observer";

export default {
  name: "GameList",
  data() {
    return {
      list: [],
      page: 1
    };
  },
  components: {
    Observer
  },
  methods: {
    async intersected() {
      const res = await this.axios.get(
        `https://api.rawg.io/api/games?page=${this.page}&_limit=50`
      );

      this.page++;
      const items = await res.data; // you can remove the .json(); part becuase axios automatically converts JSON for you, and puts it in res.data
      this.list = [...this.list, ...items.results];
    }
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