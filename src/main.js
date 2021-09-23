import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

// import "./assets/test.scss"
// import "./assets/test.less"

import "./assets/test.styl"

const app = createApp(App)
app.use(router)
app.mount('#app')
