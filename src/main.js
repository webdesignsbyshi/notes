import { createApp } from 'vue'
import App from './App.vue'
// import axios from 'axios'
import VueCookies from 'vue3-cookies'

import '@/assets/styles/styles.scss'

const app = createApp(App)
// app.config.globalProperties.axios = axios
app.use(VueCookies)
app.mount('#app')

// createApp(App).mount('#app')
