<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
   <div class="containing">
 
 <nav>
      <div class="logo">Brand</div>
      <input type="checkbox" id="click">
      <label for="click" class="menu-btn">
        <i class="fas fa-bars"></i>
      </label>
      <ul>
          <li class="items"> <router-link to="/">Home </router-link></li>
        <li class="items"><router-link to="/services">Services</router-link> </li>
        <li class="items"><router-link to="/projects">Projects</router-link> </li>
        <li class="items"> <router-link to="/resources">Resources</router-link> </li>
        <li class="items"> <router-link to="/aboutus">About us</router-link> </li>
        <li class="items"><router-link to="/contactus">Contact Us</router-link></li>
      </ul>
    </nav>
    </div>
   
</template>

<script>
// import './assets/msegsstyles.scss'
// <li class="items"> <router-link to="/">Home </router-link></li>
//         <li class="items"><router-link to="/services">Services</router-link> </li>
//         <li class="items"><router-link to="/projects">Projects</router-link> </li>
//         <li class="items"> <router-link to="/resources">Resources</router-link> </li>
//         <li class="items"> <router-link to="/aboutus">About us</router-link> </li>
//         <li class="items">Contact Us</li>
export default {
    
}
</script>

<style lang="scss" >
@import "../assets/msegsstyles.scss";
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
} 
nav{
  display: flex;
  height: 80px;
  width: 100%;
  top:10px;
  // overflow:auto;
    background-color:$primarycolor;
  align-items: center;
  justify-content: space-between;
  padding: 0 16vw 0 16vw;
  // position: fixed;
    // margin:0 16vw 0px 16vw;

  flex-wrap: wrap;
}
nav .logo{
  color: #fff;
  font-size: 35px;

  font-weight: 600;
}
nav ul{
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}
nav ul li{
  margin: 0 5px;
}
nav ul li a{
  color: #f2f2f2;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  padding: 8px 15px;
  border-radius: 5px;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}
nav ul li a.active,
nav ul li a:hover{
  color: #111;
  background: #fff;
}
nav .menu-btn i{
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  display: none;
}
input[type="checkbox"]{
  display: none;
}
@media (max-width: 1000px){
  nav{
    padding: 0 40px 0 50px;
  }
}
@media (max-width: 920px) {
.containing{
  position: fixed;
  width: 100%;
}
  nav{
    // position: fixed;
  }
  nav .menu-btn i{
    display: block;
    
    // position: fixed;
  }
  #click:checked ~ .menu-btn i:before{
    content: "\f00d";
  }
  nav ul{
    position: fixed;
    top: 60px;
    left: -100%;
    background-color:$primarycolor;
    height: 100vh;
    width: 100%;
    text-align: center;
    display: block;
    transition: all 0.3s ease;
  }
  #click:checked ~ ul{
    left: 0;
  }
  nav ul li{
    width: 100%;
    margin: 40px 0;
  }
  nav ul li a{
    width: 100%;
    margin-left: -100%;
    display: block;
    font-size: 20px;
    transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  #click:checked ~ ul li a{
    margin-left: 0px;
  }
  nav ul li a.active,
  nav ul li a:hover{
    background: none;
    color: cyan;
  }
}
.content{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: -1;
  width: 100%;
  padding: 0 30px;
  color: #1b1b1b;
}
.content div{
  font-size: 40px;
  font-weight: 700;
}

</style>