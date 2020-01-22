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
        <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Software</h3>
      </div>

      <v-container>
        <v-layout
          text-center
          wrap
        >
    
          <v-flex
            mb-5
            xs12
          >
            <h2 class="headline font-weight-bold mb-3">中文</h2>
    
            <v-layout justify-center>
              <a
                v-for="(chi, i) in chinese"
                :key="i"
                :href="chi.href"
                class="subheading mx-3"
                target="_blank"
                style="margin-right: 10px"
              >
                {{ chi.text }}
              </a>
            </v-layout>
          </v-flex>

          <div>
            <br>
            <br>

          更新程式(Update Software)　流程:<br>
          <ol>
　　<li>由對外網路下載更新程式</li>
　　<li>手動放至內網資料夾</li>
　　<li>透由web介面將更新程式上傳, 上傳Server後會自動更新程式至各AIO機器(Client端)</li>
</ol>
         </div>

    
          <v-flex
            xs12
            mb-5
          >
            <h2 class="headline font-weight-bold mb-3">English</h2>
    
            <v-layout justify-center>
              <a
                v-for="(eng, i) in english"
                :key="i"
                :href="eng.href"
                class="subheading mx-3"
                target="_blank"
                style="margin-right: 10px"
              >
                {{ eng.text }}
              </a>
            </v-layout>
          </v-flex>
    
        </v-layout>
      </v-container>

      <!-- End page content -->
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'hello',

  data: () => ({
    chinese: [
      {
        text: '使用者管理',
        href: '',
      },
      {
        text: '使用者手冊',
        href: '/assets/UsermanualCHG.pdf',
      },
      {
        text: 'API文件',
        href: '/assets/APIDocumentationCHG.pdf',
      },
      {
        text: '雙向門禁管理',
        href: '/assets/Anti-PassbackManagementCHG.pdf',
      },
      {
        text: '陌生人管理',
        href: '/assets/unknownuserCHG.pdf',
      },
      {
        text: '軟體更新下載',
        href: '/#/hello',
      },
    ],
    english: [
      {
        text: 'GFManagement',
        href: '',
      },
      {
        text: 'User Manual',
        href: '',
      },
      {
        text: 'API Documentation',
        href: '',
      },
      {
        text: 'Anti-Passback Management',
        href: '',
      },
      {
        text: 'Unknown User Management',
        href: '',
      },
      {
        text: 'Update Software',
        href: '',
      },
    ],
   
  }),
};
</script>
