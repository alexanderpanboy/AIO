<template>
  <v-container>
    <!-- Header -->
    <header class="w3-display-container w3-content w3-wide w3-animate-zoom" style="max-width:1500px;" id="home">
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
        <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Hardware</h3>
      </div>

      <v-container>
        <v-layout text-center wrap>

          <v-flex mb-5 xs12>
            <h2 class="headline font-weight-bold mb-3">中文</h2>

            <v-layout justify-center>
              <a v-for="(chi, i) in chinese" :key="i" :href="chi.href" class="subheading mx-3" target="_blank"
                style="margin-right: 10px">
                {{ chi.text }}
              </a>
            </v-layout>
          </v-flex>

          <v-flex xs12 mb-5>
            <h2 class="headline font-weight-bold mb-3">English</h2>

            <v-layout justify-center style="display: flex;">
              <a v-for="(eng, i) in english" :key="i" :href="eng.href" class="subheading mx-3" target="_blank"
                style="margin-right: 10px">
                {{ eng.text }}
              </a>
            </v-layout>
            <div>
              <br>
              <br>

              保固條款:<br>
              <ul>
                　　　　<a href="https://www.gigabyte.com/tw/Support/Warranty/All-in-One-Barebone">
                  <li>AIO-M2</li>
                </a>
                　　<a href=" https://service.gigabyte.tw/Home/Content/72?type=v&menuid=85">
                  <li>AIO-S1</li>
                </a>
                　
              </ul>
            </div>
          </v-flex>

        </v-layout>
      </v-container>

      <!-- End page content -->
    </div>
  </v-container>
  <!-- Header -->

</template>

<script>
  export default {
    name: "metalle",

    data() {
      return {
        chinese: [
          {
            text: '安裝前',
            href: '',
          },
          {
            text: '快速安裝(一頁)',
            href: '/assets/quickstartguideCHG.pdf',
          },
          {
            text: '故障排除',
            href: "/assets/troubleshootingCHG.pdf",
          },
        ],
        english: [
          {
            text: 'POC',
            href: '',
          },
          {
            text: 'Quick Guide',
            href: '',
          },
          {
            text: 'Troubleshooting',
            href: '',
          },
        ],



      };
    },

  };
</script>