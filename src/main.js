import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import './assets/msegs.css';
import './assets/msegsstyles.scss';
import axios from 'axios'
import VueAxios from 'vue-axios'
// var VueScrollTo = require('vue-scrollto');
// import VueAnimateOnScroll from 'vue-animate-onscroll'

import AOS from "aos";
// import routes from 'routes';
import router from './routes'
import Vue3Autocounter from 'vue3-autocounter';

const app = createApp(App)
app.use(router);
app.use(VueAxios, axios)
// app.use(AOS);
app.AOS = new AOS.init({ disable: "phone" });
app.component('vue3-autocounter', Vue3Autocounter)


app.mount('#app')
// createApp(App).use(router).mount('#app')