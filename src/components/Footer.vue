<template>
  <div>
    <v-container class="container" fluid>
      <v-footer absolute class="font-weight-medium mt-4" color="#252525" height="60px" dark>
        <v-layout>
          <v-flex class="mr-4 text-xs-right caption">
            {{ new Date().getFullYear() }} —
            <strong>University Project.</strong>
            <br>
            <p class="subtitle-1">
              All rights reserved to ©
              <a
                href="https://rawg.io/"
                style="text-decoration: none; color: inherit;"
              >Rawg.io</a>
            </p>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-container>
  </div>
</template>


<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>


<style>
.footer {
  bottom: 0, width= 0;
}
</style>
