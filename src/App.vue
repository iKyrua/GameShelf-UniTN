<template>
  <v-app id="app">
    <NavBarMobile v-if="mobileView"/>
    <div class="content" :class="{'open': showNav}">
      <div style="height:20px"></div>
      <div id="navigation-icon" v-if="mobileView"
      @click="showNav = !showNav"
      >
        <div class="model" v-if="showNav" v-scroll-lock="true"></div>
        <v-icon medium dark>menu</v-icon>
      </div>
      <NavBar v-if="!mobileView"></NavBar>
      <v-content class="pa-0" transition="slide-x-transition"></v-content>
      <Footer v-if="!mobileView"></Footer>
      <router-view></router-view>
    </div>
  </v-app>
</template>


<script>
import NavBar from "./components/NavBar";
import NavBarMobile from "./components/NavBarMobile";
import Footer from "./components/Footer";

export default {
  name: "App",
  methods: {
    handleView(){
      this.mobileView = window.innerWidth <= 990;
    }
  },
  components: {
    NavBar,
    NavBarMobile,
    Footer,
  },
  created(){
    this.handleView();
    window.addEventListener('resize', this.handleView);
  },
  data() {
    return {
      mobileView: false,
      showNav: false,
      showFooter: false,
      page: 1,
    };
  },
    watch: {
    $route(to, from) {
      this.showNav = false      
    }
  }
};
</script>

<style>
#app {
  color: #ffffff;
  margin-top: 0px;
  margin-bottom: 0px;
  background-color: #1e1e1e;
}
#navigation-icon{
  padding: 10px 10px 20px;
  margin-right: 10px;
  cursor: pointer;
}
.content{
  position: absolute;
  width: 100%;
  top: 10px;
  border-radius: 20px;
  background-color: #1e1e1e;
  transition: 1s transform cubic-bezier(0,.12,.14,1);


}
.open{
  transform: translateX(250px);
}
</style>