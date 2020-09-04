<template>
  <div>
    <v-toolbar height="70" color="#252525" dark fixed>
      <v-toolbar-title
        class="teal--text text--accent-3"
        style="cursor: pointer"
        @click="$router.push('/main')"
        title="hover text"
      >GameShelf</v-toolbar-title>

      <v-spacer></v-spacer>
      <Searchbar/>
      <v-spacer></v-spacer>
      <v-toolbar-items fixed-tabs class="hidden-sm-and-down">
        <v-tabs height="70" color="#252525" slider-color="#ffffff">
          <v-tab v-for="item in tabs" :key="item.path" :to="item.path" active-class >{{item.name}}</v-tab>
        </v-tabs>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import Searchbar from "./Searchbar.vue";

export default {
  name: "NavBar",
  components: { Searchbar },
  data() {
    return {
      appTitle: "ShowCase" /* credo si possa rimuovere */,

      tabs: [
        { path: "/main", name: "Home" },
        { path: "/AllGames", name: "All Games" },
        { path: "/Popular", name: "Popular" },
        { path: "/RetroGaming", name: "RetroGaming" },
        { path: "/Aboutus", name: "About us" },
        { path: "/Contactus", name: "Contact us" }
      ]
    };
  }
};
</script>

<style>
</style>