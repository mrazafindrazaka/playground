import {createApp} from 'vue'
import App from './App.vue'
import '@/assets/scss/main.scss'
import loading from '@/store/loading'
import crypto from "@/store/crypto";
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueApexCharts from 'vue3-apexcharts'

const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)
app.use(VueApexCharts)
app.provide('loading', loading)
app.provide('cryptoStore', crypto)
app.mount('#app')
