<template>
  <div class="notice-wrapper pt-5 pb-5 pl-5 pr-5 mt-10" v-if="this.filteredRequestList.length === 0">
    <div>
      <v-card variant="tonal">
        <v-card-title>
          <h2>Henüz Gösterilecek Bir Talep Bulunamadı!</h2>
        </v-card-title>
      </v-card>
    </div>
  </div>
  <div class="data-table-wrapper pt-5 pb-5 pl-5 pr-5 mt-10" v-else>
    <v-data-table :headers="dataTableHeaders" :items="filteredRequestList" class="elevation-1" style="font-size: 1rem;"
      :search="search">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Tedarikçi Erişim Talepleri</v-toolbar-title>
          <v-spacer>
            <v-divider class="mx-4" inset vertical></v-divider>
          </v-spacer>
          <v-text-field class="mr-4" v-model="search" label="Search" single-line hide-details style="background: none;"
            variant="outlined">
          </v-text-field>
        </v-toolbar>
      </template>
      <template  v-slot:[`item.islem`]="{ item }">
        <div v-if="$route.name !== 'home'">
          <v-btn color="purple" size="small" @click="openModal(item.raw), addNewRequest(item.raw)">
            İşlem
          </v-btn>
        </div>
        <div v-else>
          <v-btn color="blue" size="small" @click="openDetailModal(item.raw)">
            Detaylar
          </v-btn>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script>

export default {

  data: () => ({
    showNestedDialog: false,
    search: '',
    showModal: false,
    selectedItem: null,
    newRequests: [],
    dataTableHeaders: [
      {
        title: 'Talep No',
        align: 'start',
        sortable: true,
        key: 'id'
      },
      { title: 'Tedarikçi Adı', key: 'supplierName' },
      { title: 'Talep Tarihi', key: 'supplierDate' },
      { title: 'Sorumlu Kişi', key: 'personResponsibleForTheRequest' },
      { title: 'Sistem', key: 'supplierConnectSystemName' },
      { title: 'Status', key: 'status' },
      { title: 'İşlem', key: 'islem' },
    ],
  }),

  computed: {
    filteredRequestList() {
      if (this.$route.name === 'director') {
        return this.$store.state.allRequestsData.filter(item => item.status === 'İşlem Bekleniyor');
      }

      else if (this.$route.name === 'infosec') {
        return this.$store.state.allRequestsData.filter(item => item.status === 'Awaiting Info Sec Approval');
      }

      else if (this.$route.name === 'itdirector') {
        return this.$store.state.allRequestsData.filter(item => item.status === 'Awaiting IT Dir Approval');
      }
      else {
        return this.$store.state.allRequestsData;
      }
    },
  },

  methods: {
    openModal(item) {
      this.$store.dispatch('openConModal')
      this.$store.dispatch('getRequestDataToModal', item)
    },

    openDetailModal(item) {
      this.$store.dispatch('openDetailModal')
      this.$store.dispatch('getRequestDataToModal', item)
    },

    openConfirmationModal(item) {
      this.selectedItem = item;
      this.showModal = true;
    },

    addNewRequest(request) {
      this.newRequests.push(request);
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Material+Icons');
.notice-wrapper {
  display: flex;
  justify-content: center;
}

.data-table-wrapper {
  border: 2px solid #EF9A9A;
  border-radius: 9px;
}
</style>