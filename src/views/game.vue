<template>
  <v-app fluid v-if="game !== null">
    <v-container class="container" fluid>
      <v-card class="pb-4 mx-auto" max-width="1000" color="#3b3b3b" dark>
        <v-img class="white--text align-end" :src="game.background_image">
          <v-card-title>
            <h1 style="font-size: 3rem" class="color my-2 ml-2 font-weight-medium display-1">{{game.name}}</h1>
          </v-card-title>
        </v-img>

        <v-layout row fill-height>
          <v-flex md12>
            <v-card class="cardColor" color="#3b3b3b" dark>
              <v-card-text grey lighten-1--text>
                <h5 class="color my-2 ml-4 font-weight-medium headline">Description</h5>
                <h4 class="ml-4 subheading font-weight-regular">{{game.description_raw}}</h4>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <v-card class="mx-auto">
          <v-card-title class="hidden-sm-and-down">
            <v-layout row class="justify-space-between">
              
              <v-flex md3>
                <v-card class="cardColor2">
                  <v-card-text align="center">
                    <h5 class="color my-2 font-weight-medium headline" align="center">Genre</h5>
                    {{genreNames}}
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex md3>
                <v-card class="cardColor2">
                  <v-card-text align="center">
                     <h5 class="color my-2 ml-4 font-weight-medium headline" align="center">Released date</h5>
                    {{game.released}}
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex md3>
                <v-card class="cardColor2">
                  <v-card-text align="center">
                    <h5 class="color my-2 ml-4 font-weight-medium headline">Metacritic score</h5>
                     <div v-if="metacritc == null">ND</div>
                     <div v-else>{{metacritic}}/100</div>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-card-title>
        </v-card>
        <v-layout row fill-height>
          <v-flex md6>
            <v-card class="cardColor" color="#3b3b3b" dark>
              <v-card-text>
                <div class="hidden-md-and-up">
                  <h2>Genre</h2>
                  
                  <p>{{genreNames}} </p>
                  <br>
                  <br>

                  <h2>Released date</h2>
                  <p>{{game.released}}</p>
                  <br>
                  <br>

                  <h2>Metacritic score</h2>
                  <div v-if="metacritc == null">ND</div>
                  <div v-else>{{metacritic}}/100</div>
                  <br>
                  <br>
                </div>
                <h5 class="color font-weight-medium headline">Website</h5>
                <div v-if="website == '' "> We are sorry but no data ara avaible</div>
                <a v-bind:href="game.website" target="_blank">{{website}}</a>
                <br>
                <br>
                <br>
                
                <h5 class="color font-weight-medium headline">Stores</h5>
                <div v-if="stores ==''">We are sorry but no data ara avaible</div>
                <div v-else>
                  <p v-for="(store, index) in stores" :key="index">
                    <a :href="store.url" target="_blank">{{store.url}}</a>
                  </p>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
    <div style="height:60px"/>
  </v-app>
</template>


<script>
export default {
  name: "game",
  props: ["gameId"], // do whatever you want with gameID
  data() {
    return {
      title: "game",
      game: null,
      myData: null
    };
  },
  watch: {
    gameId: {
      handler() {
        if (this.gameId !== undefined) {
          this.axios
            .get("https://api.rawg.io/api/games/" + this.gameId)
            .then(resp => {
              this.game = resp.data;
              console.log(resp.data);

              console.warn(resp.data.results);
            })
            .catch(error => {
              console.log(error);
            });
        }
      },

      immediate: true 
    }
  },
  computed: {
    genreNames() {
      return this.game.genres.map(({ name }) => name).join(" "); 
    },
    website() {
      return this.game.website;
    },
    stores() {
      return this.game.stores;
    },
    metacritic() {
      return this.game.metacritic;
    }
  }
};
</script>

<style>
.cardColor {
  border-color: white;
  box-shadow: none;
}

.cardColor2 {
  background-color: rgba(59, 59, 59, 0.7) !important;
  
  
}
</style>