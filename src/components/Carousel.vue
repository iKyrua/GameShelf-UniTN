<template>
  <div>
    <v-container>
      <v-carousel
        class="Carousl"
        height="10%"
        cycle
        hide-delimiter-background
        show-arrows-on-hoverhide-delimiters
      >
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          @click="$router.push(item.link)"
          style="cursor:pointer"
        ></v-carousel-item>
      </v-carousel>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      items: [
        {
          src: "https://images4.alphacoders.com/601/thumb-1920-601157.jpg",
          link: "/game/278"
        },
        {
          src: "https://images5.alphacoders.com/710/thumb-1920-710789.jpg",
          link: "/game/50738"
        },
        {
          src:
            "https://www.senzalinea.it/giornale/wp-content/uploads/2020/06/Destroy-All-Humans-Remake-Preview-01-Header-2060x982-1.jpg",
          link: "/game/326219"
        },
        {
          src:
            "https://www.vigamusmagazine.com/wp-content/uploads/2019/11/half-life-alyx.jpg",
          link: "/game/392019"
        },
        {
          src: "https://wallpaperaccess.com/full/3511118.jpg",
          link: "/game/326292"
        }
      ]
    };
  }
};
</script>

