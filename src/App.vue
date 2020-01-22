<template>
  <div id="app">
    <div class="w3-top">
      <div style="display:flex" class="w3-bar w3-white w3-wide w3-padding w3-card">
        <router-link to="/">
        <a class="w3-bar-item w3-button">IPCAM</a>
        </router-link>
      
        <!-- Float links to the right. Hide them on small screens -->
        <div class="w3-right w3-hide-small" style="margin-left:auto; margin-right:0">
          <router-link to="/metalle">
          <a class="w3-bar-item w3-button">Hardware</a>
          </router-link>
          <router-link to="/computex">
          <a href="#about" class="w3-bar-item w3-button">Software</a>
          </router-link>
  
        </div>
      </div>
    </div>

    <router-view></router-view>

    <!-- Footer -->
    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="w3-dark-grey">
          <strong class="subheading">GIGABYTE Technology</strong>
        </v-card-title>
        <v-card-text class="w3-black py-2 white--text text-center">
          <v-icon>{{copyRightLogo}}</v-icon>
          {{ new Date().getFullYear() }} —
          <strong>GIGABYTE</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
import {
  mdiFacebook,
  mdiInstagram,
  mdiGithubCircle,
  mdiLinkedin,
  mdiCopyright
} from "@mdi/js";

export default {
  name: "app",
  components: {},
  data() {
    return {
      fbLogo: mdiFacebook,
      igLogo: mdiInstagram,
      gitHubLogo: mdiGithubCircle,
      linkedInLogo: mdiLinkedin,
      copyRightLogo: mdiCopyright
    };
  }
  

};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.w3-top{
  z-index: 3;
}
.projectTitle{
  z-index: 2;
}


.v-image__image--cover {
  background-size: contain !important;
}
.btnware{
  background-color: rgb(146, 170, 162) !important ;
}
</style>