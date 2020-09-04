<template>
  <v-autocomplete
    v-model="id"
    clearable
    :loading="isLoading"
    :items="games"
    :search-input.sync="search"
    hide-details
    item-text="name"
    item-value="id"
    label="Search for a Game..."
    solo-inverted
    dark
  ></v-autocomplete>
</template>

<script>
import _ from "lodash";

export default {
  data: () => ({
    id: null,
    games: [],
    isLoading: true,
    search: null,
    maxwidth: 10
  }),
  methods: {
    getGames(params = "") {
      this.axios
        .get("https://api.rawg.io/api/games" + params)
        .then(resp => {
          let tempGames = [...this.games.slice(0), ...resp.data.results];
          this.games = _.uniqBy(tempGames, "id");
          this.isLoading = false;
        })
        .catch(e => {
          console.error(e);
        });
    },
    searchGames(query) {
      // call getGames() with the search query formatted as an API parameter
      let searchQuery = encodeURI("?search=" + query); // URI encode the query so it is able to be fetched properly
      this.getGames(searchQuery);
    }
  },
  watch: {
    id(id) {
      // runs every time `id` changes
      if (id !== undefined) {
        console.log(id);
        this.$router.push({ name: "game", params: { gameId: id } });
      }
    },
    search: _.debounce(function(query) {
      this.searchGames(query);
    }, 250)
  },
  created() {
    this.getGames(); // first 20 games
  }
};
</script>
