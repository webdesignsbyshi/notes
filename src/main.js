import { createApp } from 'vue'
import App from './App.vue'
import VueCookies from 'vue3-cookies'
import VueClickAway from 'vue3-click-away'

import '@/assets/styles/styles.scss'

const app = createApp(App)
app.use(VueCookies, {
  expireTimes: -1
})
app.use(VueClickAway)
app.mount('#app')
