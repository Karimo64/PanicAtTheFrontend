import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSweetAlert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import './assets/main.css'

const app = createApp(App)

app.use(VueSweetAlert2)
app.use(router)

app.mount('#app')
