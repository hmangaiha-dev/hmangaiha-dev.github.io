<template>
  <div style="margin:-1rem -1rem -1rem -1rem;" id="app">
    <Navbar></Navbar>
    <router-view></router-view>
    <!-- <router-view/> -->
    <!-- </router-view> -->
    <Footer></Footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./assets/msegsstyles.scss";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  // created(){
  //   this.$router.push({path:'/'})
  //   }
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
} */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
