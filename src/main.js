import { createApp } from 'vue'
import App from './App.vue'

//vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labs from 'vuetify/labs/components'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

//vuex
import store from "./store/store";

//vue-router
import router from './router/router'

const vuetify = createVuetify({
  components: {
    ...labs,
    ...components
  },
  directives,
})

const app = createApp(App)
app.use(vuetify)
app.use(store)
app.use(router)
app.mount('#app')
