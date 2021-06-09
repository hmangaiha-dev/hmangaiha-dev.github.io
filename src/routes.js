import { createWebHistory, createRouter } from "vue-router";
// import VueRouter from 'vue-router'
// import Vue from 'vue'
import LandingPage from './components/LandingPage'
import Services from './components/Services'
import Projects from './components/Projects'
import Resources from './components/Resources'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Pioneers from './components/Pioneers'
import Awards from './components/Awards'




import ProjectDetails from './components/Projects/ProjectDetails'




// Vue.use(VueRouter);
const routes =[
        {
            path:'/',
            name:'landingpage',
            component:LandingPage,
        },
        {
            path:'/services',
            name:'services',
            component:Services
        },
        {
            path:'/projects',
            name:'projects',
            component:Projects
        },
        {
            path:'/projectdetails',
            name:'projectdetails',
            component:ProjectDetails
        },
        {
            path:'/resources',
            name:'resources',
            component:Resources
        },
        {
            path:'/aboutus',
            name:'aboutus',
            component:AboutUs
        },
        {
            path:'/contactus',
            name:'contactus',
            component:ContactUs
        },
        {
            path:'/pioneers',
            name:'pioneers',
            component:Pioneers
        },
        {
            path:'/awards',
            name:'awards',
            component:Awards
        }
    ]

// const router = createRouter({
//     history: createWebHistory(),
//     routes,
//   });

// const router = new VueRouter({
//     mode:'history',
//     routes // short for `routes: routes`
//  });

const router = createRouter({ history: createWebHistory(), routes })


export default router




