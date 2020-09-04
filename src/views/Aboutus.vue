<template>
  <div>
    <v-container class="container" fluid>
      <!--container per dirgli che voglio una griglia -->
      <div style="height:40px"/>
      <v-card class="pt-2 pb-4" color="#00818a" dark>
        <!--card più grande, con bordi e ombre -->
        <v-card-text>
          <h4 class="display-1 font-weight-medium">About us</h4>
          <br>
          <h5
            class="font-weight-regular headline"
          >We are three friends linked by a passion for technology, videogames and nonsense.</h5>
          <br>
          <h6
            class="font-weight-light title"
          >We attend the same university and we are user-experience designers who, for the first time in their life, have created a website. Hope you enjoy!</h6>
        </v-card-text>
        <br>
        <br>
        <v-layout row align center spacer>
          <!--Marianna -->
          <v-flex xs4>
            <v-card dark class="mx-auto" max-width="344" color="#a12559" height="100%">
              <v-layout column align-center>
                <v-avatar size="80%" class="my-3">
                  <img src="https://i.ibb.co/zmvx4Pm/foto-cerchio.png" alt="foto-cerchio">
                </v-avatar>
              </v-layout>
              <v-card-text class="display-1">
                <p>Marianna</p>
              </v-card-text>
              <v-card-text
                class="font-weight-regular"
              >User-experience designer • "Front-end developer"</v-card-text>
              <p class="ml-3">Anxious, spontaneous and persistent girl.
                <br>Did I mention I'm anxious?
              </p>
              <br>
            </v-card>
          </v-flex>

          <!--Giacomo-->
          <v-flex xs4>
            <v-card dark class="mx-auto" max-width="344" color="#404b69" height="100%">
              <v-layout column align-center>
                <v-avatar size="80%" class="my-3">
                  <img src="https://i.ibb.co/FVwxwBM/jack.jpg" alt="jack">
                </v-avatar>
              </v-layout>
              <v-card-text class="display-1">
                <p>Giacomo</p>
              </v-card-text>
              <v-card-text
                class="font-weight-regular"
              >User-experience designer • "Front-end developer"</v-card-text>
              <p class="ml-3">I can resist anything,
                <br>except temptation.
              </p>
              <br>
            </v-card>
          </v-flex>

          <!--Stefano-->
          <v-flex xs4>
            <v-card dark class="mx-auto" max-width="344" color="#404b69" height="100%">
              <v-layout column align-center>
                <v-avatar size="80%" class="my-3">
                  <img src="https://i.ibb.co/kcc5Vs8/ste.jpg" alt="ste">
                </v-avatar>
              </v-layout>
              <v-card-text class="display-1">
                <p>Stefano</p>
              </v-card-text>
              <v-card-text
                class="font-weight-regular"
              >User-experience designer • "Front-end developer"</v-card-text>
              <p class="ml-3">Videogames' junkie.
                <br>Makes the best Caesar Salad in a 10km radius.
              </p>
              <br>
            </v-card>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
    <div style="height:60px"/>
  </div>
</template>

<script>
export default {
  name: "aboutus"
};
</script>

<style>
</style>