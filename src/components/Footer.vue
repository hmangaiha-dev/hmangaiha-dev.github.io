<template>
  <div>
    <div class="topfooter">
      <div class="submenus">
        <p class="footerheadings">Belongs to</p>
        <div class="belongsrows">
          <img
            src="../assets/icttext.png"
            alt=""
            srcset=""
            style="width:15rem;"
          />
          <p></p>
        </div>

        <p class="footerheadings">Follow us at social media</p>
        <div class="socialmediarows">
          <img src="../assets/fb.png" alt="" srcset="" class="socialicons" />
          <img src="../assets/ig.png" alt="" srcset="" class="socialicons" />
          <img src="../assets/tw.png" alt="" srcset="" class="socialicons" />
        </div>
      </div>

      <div class="submenus">
        <p class="footerheadings"  style="align-items:center" v-on:click="dropdown" >Hot links <span style="position:absolute;right:80px;" :class="{arrow:arrow,right:right,down:down}"></span></p>
          <div :class="{active:isActive}">
        
        <div class="footerlinks" >
          <span >Home</span>
          <span>About</span>
          <span>Services</span>
          <span>Projects</span>
          <span>Resources</span></div>
        </div>
      </div>

      <div class="submenus">
        <p class="footerheadings" style="align-items:center" v-on:click="dropdown1" >Support & Policy <span style="position:absolute;right:80px;" :class="{arrow:arrow1,right:right1,down:down1}"></span></p>
          <div :class="{active:isActive1}">

        <div class="footerlinks">
          <span>Engaging with MSeGS</span>
          <span>Act & Rdives</span>
          <span>RTI</span>
        </div>
        </div>
      </div>

      <div class="submenus">
          <p class="footerheadings" style="align-items:center" v-on:click="dropdown2" >Others <span style="position:absolute;right:80px;" :class="{arrow:arrow2,right:right2,down:down2}"></span></p>
          <div :class="{active:isActive2}">
        <div class="footerlinks">
          <span>Employee Login</span>
          <span>Tender</span>
          <span>Career</span>
          <span>Contact us</span>
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
      <p class="copyright">© 2021 msegs. All rights reserved</p>
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
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #2c3134;
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
  .topfooter {
    margin:1rem 0 1rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 2rem 0 2rem 0;
}
.active{
  display:none
}
.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

  
}
</style>
