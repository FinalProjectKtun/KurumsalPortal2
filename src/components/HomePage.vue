<template>
  <v-layout class="d-flex justify-center">
    <!-- <nav>
      <v-app-bar color="white" prominent>
         <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>  
        <RouterLink :to="{name: 'home'}">
          <v-toolbar-title><v-img src="../assets/alisan-logo.png" :width="150" aspect-ratio="16/9" /></v-toolbar-title>
        </RouterLink>
        <v-spacer></v-spacer>
        <RouterLink :to="{name: 'director'}">
          <v-btn variant="text" color="red-darken-4">Yönetici Onay</v-btn>
        </RouterLink>
         <RouterLink :to="{ name: 'info-sec-approval' }"> -->
    <!-- </RouterLink> -->
    <!-- <RouterLink :to= "{ name: 'it-director-approval' }"> 
          <v-btn variant="text" color="red-darken-4">IT Yönetici Onay</v-btn>
        </RouterLink>
      </v-app-bar>
    </nav> -->
    <div>
      {{ console() }}
      <!-- <v-card style="height: 300px;"> -->
      <v-layout class="d-flex justify-center pt-10 pl-10">
        <!-- <DirectorPage v-model="dialog"></DirectorPage>
        <SecurityPage v-model="dialogSec"></SecurityPage>
        <ItDirector v-show="dialogIt"></ItDirector> -->
        <div>
          <RequestAdd v-show=this.$store.state.isModalOpen></RequestAdd>
        </div>
        <!-- <v-main> -->
        <div v-if="$route.name === 'home'">
          <v-btn block color="red-darken-4" @click="openModal(), increment()">
            Talep Ekle
          </v-btn>
        </div>
        <!-- <v-card-text>
            <DenemePage></DenemePage>
          </v-card-text> -->
        <!-- </v-main> -->
      </v-layout>
      <!-- </v-card> -->
    </div>
  </v-layout>
</template>

<script>
// import DenemePage from './DenemePage.vue';
// import DirectorPage from './DirectorPage.vue';
// import ItDirector from './ItDirector.vue';
// import SecurityPage from './SecurityPage.vue';
import RequestAdd from './RequestModal.vue';

export default {

  components: {
    // DirectorPage,
    // ItDirector,
    // SecurityPage,
    // DenemePage,
    RequestAdd
  },

  data: () => ({
    // dialog: false,
    // dialogSec: false,
    // dialogIt: false,
    // drawer: false,
    // reqDialog: false,
    items: [],
  }),

  methods: {
    console() {
      console.log("Hello World!!");
    },

    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    },

    openModal() {
      this.$store.commit('OPEN_MODAL')
    }

  }
};
</script>

<style>
a:active,
a:link,
a:visited {
  text-decoration: none;
}

a:hover {
  background-color: #E0F7FA;
}
</style>