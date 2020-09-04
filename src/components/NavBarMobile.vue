<template>
   <div id="navigation-mobile">
    <Searchbar class="search"/>
    <ul v-for="item in tabs"
            :key="item.path"
            :to="item.path"
            active-class
            @click="$router.push(item.path)"            
    >
      <li>{{item.name}}</li>
    </ul>
   </div>
</template>

<script>
import Searchbar from "./Searchbar.vue";

export default {
  name: "NavBarMobile",
  components: { Searchbar },
  data() {
    return {

      tabs: [
        { path: "/main", name: "Home" },
        { path: "/AllGames", name: "All Games" },
        { path: "/Popular", name: "Popular" },
        { path: "/RetroGaming", name: "RetroGaming" },
        { path: "/Aboutus", name: "About us" },
        { path: "/Contactus", name: "Contact us"} 
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#navigation-mobile{
  padding: 20px 0 0 0;
  overflow: hidden;
  height: 100vh;

  ul{
    list-style: none;
    width: 200px;
    padding-left: 40px;

    li{
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 20px;
      cursor: pointer;

      &:hover {
        color: #111;
      }
    
    }

  }

  .search{
    position: relative;
    width: 210px;
    margin-bottom: 20px;
    margin-left: 20px;
  }
  
}
</style>