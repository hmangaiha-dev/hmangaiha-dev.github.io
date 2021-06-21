<template>


  <div>
    <div class="topfooter" >
      <div class="submenus" >
        <p class="footerheadings">Belongs to</p>
        <div class="belongsrows">
          <img
            src="../assets/icttext.png"
            alt=""
            srcset=""
            style="width:20rem;"
          />
          <p></p>
        </div>

        <p class="footerheadings">Follow us at social media</p>
        <div class="socialmediarows">
        <a href="https://www.facebook.com/msegsdict">  <img src="../assets/fb.png" alt="" srcset="" class="socialicons" /></a>
           <a href="https://www.instagram.com/msegs_dict/"> <img src="../assets/ig.png" alt="" srcset="" class="socialicons" /></a>
         <a href="https://twitter.com/MsegsD"> <img src="../assets/tw.png" alt="" srcset="" class="socialicons" /></a>
        </div>
      </div>

      <div class="submenus">
        <p class="footerheadings ripple" style="align-items:center" v-on:click="dropdown" >Hot links <span style="position:absolute;right:30px;" :class="{arrow:arrow,right:right,down:down}"></span></p>
          <div :class="{active:isActive}">
        
       <div class="footerlinks " >
          <span  > <router-link to="/">Home </router-link></span>
          <span> <router-link to="/aboutus">About</router-link></span>
          <span> <router-link to="/services">Services</router-link></span>
          <span> <router-link to="/projects">Projects</router-link></span>
          <span> <router-link to="/resources">Resources</router-link></span></div>
          
        </div>
      </div>

      <div class="submenus">
        <p class="footerheadings ripple" style="align-items:center" v-on:click="dropdown1" >Support & Policy <span style="position:absolute;right:30px;" :class="{arrow:arrow1,right:right1,down:down1}"></span></p>
          <div :class="{active:isActive1}">

        <div class="footerlinks">
          <span><router-link to="/page404">Engaging with MSeGS</router-link></span>
          <span><router-link to="/page404">Act & Rdives</router-link></span>
          <span><router-link to="/page404">RTI</router-link></span>
        </div>
        </div>
      </div>

      <div class="submenus">
          <p class="footerheadings ripple" style="align-items:center" v-on:click="dropdown2" >Others <span style="position:absolute;right:30px;" :class="{arrow:arrow2,right:right2,down:down2}"></span></p>
          <div :class="{active:isActive2}">
        <div class="footerlinks">
          <span><router-link to="/page404">Employee Login</router-link></span>
          <span><router-link to="/page404">Tender</router-link></span>
          <span><router-link to="/page404">Career</router-link></span>
          <span><router-link to="/page404">Contact us</router-link></span>
        </div>
        </div>
      </div>

    </div>
<hr style="opacity:10%;padding:1rem;">
    <div class="bottomfooter">
      <img src="../assets/logo2.png" alt="" srcset="" class="copyrightimage" />
      <p class="copyright" style="margin:-12px;">
        An Autonomous Society under the Govt. of Mizoram
      </p>
      <p class="copyright" style="margin:1rem">© 2021 msegs. All rights reserved</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
    isActive:true,
    arrow:true,
    right:true,
    down:false,
     isActive1:true,
    arrow1:true,
    right1:true,
    down1:false,
    isActive2:true,
    arrow2:true,
    right2:true,
    down2:false,
    }
  },
  methods:{
    dropdown(){
      this.isActive = !this.isActive,
      this.right = !this.right,
      this.down = !this.down
    },
    dropdown1(){
      this.isActive1 = !this.isActive1,
      this.right1 = !this.right1,
      this.down1 = !this.down1
    },
    dropdown2(){
      this.isActive2 = !this.isActive2,
      this.right2 = !this.right2,
      this.down2 = !this.down2
    }

  }
};
</script>

<style lang="scss">
#app > div:nth-child(3) > div.topfooter > div:nth-child(2) > div > div > span:nth-child(n) > a{
  text-decoration: none;
  color: #7e7e7e;
}
#app > div > div.topfooter > div:nth-child(2) > div > div > span:nth-child(n) > a{
  text-decoration: none;
  color: #7e7e7e;
}
// footer container
#app > div > div:nth-child(3) > div.topfooter{
  margin: 0rem 12vw 0px 12vw;
  
}
.arrow {
 display: none;
}
.right {
  transform: rotate(-45deg);
  transition-delay: 1ms;
  transition-timing-function: ease-in;
  -webkit-transform: rotate(-45deg);
}

.down {
  transform: rotate(45deg);
  transition-timing-function: ease-in;
  -webkit-transform: rotate(45deg);
}
// .active{
//   // background-color:red ;
//   display:none;
// }
.topfooter {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 2rem 0 2rem 0;
}

.submenus {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  a{
      font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.81;
  letter-spacing: normal;
  text-align: left;
  color: #7e7e7e;
  // z-index:;
  }

}

.footerlinks {
  display: flex;
  flex-direction: column;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.81;
  letter-spacing: normal;
  text-align: left;
  color: #7e7e7e;
 
}

.footerheadings {
  font-family: 'Playfair Display';
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #2c3134;
  padding:1rem 0;
  
}

.socialmediarows {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.socialicons {
  width: 2rem;
  margin: 0 1rem 0 1rem;
}

.bottomfooter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.copyrightimage {
  width: 25rem;
}
.copyright {
  margin: 5.5px 41px 0 18.5px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.79;
  letter-spacing: normal;
  text-align: center;
  color: #7e7e7e;
}

@media screen and (max-width:800px) {
  #app > div > div:nth-child(3) > div.topfooter{
  margin: 0rem 8vw 0px 8vw;
  
}
  .topfooter {
    // margin:1rem 8vw 1rem 6vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 2rem 0 2rem 0;
  position: relative;
  z-index: 0;
}

.active{
  display:none
}
.arrow {
  border: solid rgb(82, 82, 82);
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  // z-index:-1;
  position: absolute;
  right:30px;

}
.copyright {
  margin: 5.5px 41px 0 18.5px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.79;
  letter-spacing: normal;
  text-align: center;
  color: #7e7e7e;
}

  /* Ripple effect */
.ripple {
  background-position: center;
  transition: background 0.4s;
  width:100%;
}
.ripple:hover {
  background: #ffffff radial-gradient(circle, transparent 0.5%, #ffffff 1%) center/15000%;
  // width:10%
}
.ripple:active {
  background-color: #eaecec;
  background-size: 100%;
  height:5rem;
  transition: background 0s;
}

/* Button style */


}
</style>
