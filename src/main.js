import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import './assets/msegs.css';
import './assets/msegsstyles.scss';

// import routes from 'routes';
import router from './routes'




createApp(App).use(router).mount('#app')