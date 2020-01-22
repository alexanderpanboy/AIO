<template>
  <v-container>
    <!-- Header -->
    <header
      class="w3-display-container w3-content w3-wide w3-animate-zoom"
      style="max-width:1500px;"
      id="home"
    >
      <div class="w3-display-middle w3-margin-top w3-center">
        <h1 class="w3-xxlarge w3-text-white">
          <span class="w3-padding w3-black w3-opacity-min">
            <b>GIGABYTE</b>
          </span>

        </h1>
      </div>
    </header>

    <!-- Page content -->
    <div class="w3-content w3-padding" style="max-width:1564px">
      <!-- Project Section -->
      <div class="w3-container w3-padding-32" id="projects">
        <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Document</h3>
      </div>

      <div class="w3-row-padding">
        <div class="w3-col l3 m6 w3-margin-bottom">
          <router-link to="/hardware">
            <div>
              <v-btn  class="btnware">Hardware</v-btn>
            </div>
        </router-link>
        </div>
        <div class="w3-col l3 m6 w3-margin-bottom">
          <router-link to="/software">
            <div>
              <v-btn  class="btnware">Software</v-btn>
            </div>
          </router-link>
        </div>
       
      </div>

      <!-- End page content -->
    </div>
  </v-container>
</template>

<script>
export default {
  name: "aa",
  data() {return{ 
   

  };
  },
 
};
</script>
<style>

  </style>
