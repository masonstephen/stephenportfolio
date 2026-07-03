import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import 'aos/dist/aos.css'
import { initTheme } from '@/utils/theme'
import { resolveFavicon, applyFavicon } from '@/utils/favicon'

initTheme()

resolveFavicon().then(applyFavicon)

const app = createApp(App)
app.use(router)
app.mount('#app')
