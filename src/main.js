import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'font-awesome/css/font-awesome.min.css';



createApp(App).use(router).mount('#app')
