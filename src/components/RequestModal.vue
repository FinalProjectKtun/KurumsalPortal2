<template>
  <div>
    <v-dialog v-model="$store.state.isModalOpen" @input="$emit('update:value', $event)" max-width="1000px">
      <v-card>
        <v-card-title class="headline grey lighten-6" primary-title>
          Yeni tedarikçi Erişim Talebi
        </v-card-title>
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <h4>Tedarikçi Adı</h4>
                <v-text-field :counter="10" label="Tedarikçi Adı" required></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <h4>Talep Tarihi</h4>
                <v-text-field :counter="10" label="Talep Tarihi" required></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="6">
                <h4>Sorumlu Kişi</h4>
                <v-select clearable label="Sorumlu Kişi" :items="[
                  'California',
                  'Colorado',
                  'Florida',
                  'Georgia',
                  'Texas',
                  'Wyoming',
                ]"></v-select>
              </v-col>

              <v-col cols="12" md="6">
                <h4>Cep Telefonu</h4>
                <v-text-field :counter="10" label="Cep Telefonu" required></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="6">
                <h4>Tedarikçinin Bağlanacağı sistem</h4>
                <v-select clearable label="Tedarikçinin Bağlanacağı sistem " :items="[
                  'California',
                  'Colorado',
                  'Florida',
                  'Georgia',
                  'Texas',
                  'Wyoming',
                ]" multiple></v-select>
              </v-col>
              <v-col cols="12" md="6">
                <h4>Tedarikçinin Bağlanacağı Süre</h4>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field :counter="10" label="Başlangıç" required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field :counter="10" label="Bitiş" required></v-text-field>
                  </v-col>
                </v-row>
              </v-col>

              <v-col cols="12" md="12">
                <v-text-field :counter="10" label="Açıklama" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="closeModal()">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
  
<script>
export default {

  props: {
    reqDialog: {
      type: Boolean,
      default: false
    },
  },

  data: () => ({
    date: new Date().toISOString(),
    menu: false,
  }),

  methods: {
    closeModal() {
      this.$store.commit('CLOSE_MODAL')
    },
  }
};
</script>
  