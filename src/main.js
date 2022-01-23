import { createApp } from 'vue'
import App from './App.vue'
import VueCookies from 'vue3-cookies'
import '@/assets/styles/styles.scss'

const app = createApp(App)
app.use(VueCookies, {
  expireTimes: -1
})
app.mount('#app')
