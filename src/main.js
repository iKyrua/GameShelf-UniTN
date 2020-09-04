import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import Axios from "axios";
import VueAxios from "vue-axios";
import infiniteScroll from "vue-infinite-scroll";
import VScrollLock from "v-scroll-lock";


import "vuetify/dist/vuetify.css";

import home from "./views/home.vue";
import AllGames from "./views/AllGames.vue";
import Popular from "./views/Popular.vue";
import RetroGaming from "./views/RetroGaming.vue";
import game from "./views/game.vue";
import Aboutus from "./views/Aboutus.vue";
import Contactus from "./views/Contactus.vue";

Vue.use(infiniteScroll);
Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(VueAxios, Axios);
Vue.use(VScrollLock);

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      redirect: "/main"
    },
    { name: "Home", path: "/main", component: home },
    { name: "All Games", path: "/AllGames", component: AllGames },
    { name: "Popular", path: "/Popular", component: Popular },
    { name: "RetroGaming", path: "/RetroGaming", component: RetroGaming },
    { name: "game", path: "/game/:gameId", component: game, props: true },
    { name: "About us", path: "/Aboutus", component: Aboutus },
    { name: "Contact us", path: "/Contactus", component: Contactus }
  ],

  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
