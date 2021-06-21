<template>
  <div class="main" >
    <div class="landing1 containe" >
      <div class="texts">
        <div class="innertexts ">
        <p class="headings">In Shorts</p>
        <p class="contents" style="padding-bottom:1rem">
          Mizoram State e-Governance Society assists the state government to
          implement various e-governance projects for improvement of public
          service delivery system with quick response time, reduce waiting time,
          minimizing travelling expenses, transparency and accountability.
        </p>
          <a href="/aboutus" class="knowmorebutton" > KNOW MORE</a>
</div>
      </div>

      <!-- <div class="images"> -->
        <img
          src="../assets/landing1image.png"
          class="landing1image"

        />
          <!-- style="width:60vw; height:80vh;" -->

          <!-- style="width:52vw; height:70vh;margin-top:-1rem;margin-bottom:-0.2rem" -->

      <!-- </div> -->
    </div>

    <div class="landing2 ">
      <div class="container row">
        <div class="glimpse1 " data-aos="zoom-in">
          <img
            src="../assets/glimpse.svg"
            alt=""
            srcset=""
          
            class="glimpse1image"
          />
        </div>
        <div class="glimpse2 " data-aos="fade-left" style="color:white" >
          <p class="headings" style="color:white">Glimpse of MSeGS</p>
          <p class="contents" style="color:white" id="glimpsetext">
            Mizoram State e-Governance Society (MSeGS) is an autonomous society
            under Government of Mizoram and Non-Profit Organization setup in
            2005 with Chief Secretary to the Government of Mizoram as its
            Chairman. MSeGS is a nodal agency for implementing various
            e-Governance projects in the state of Mizoram. MSeGS does not enter
            into any revenue-generating engagements with the private sector. All
            the engagements executed by MSeGS so far have been awarded on a
            nomination basis only. As a policy and practice, MSeGS does not
            participate in any bidding process. The general practice adopted by
            all the departments/organizations is to get specific internal
            approvals by the competent authorities.
          </p>
        </div>
      </div>
    </div>

    <div class="landing3">
      <p
        class="headings"
        style="text-align:center;margin:auto;padding-top:2rem;padding-bottom:2rem;text-decoration:underline; text-decoration-color:#dc3d32;"
      >
        Services
      </p>

      <div class="container">
        <div class="servicesrows">
          <div class="servicesitems" data-aos="zoom-in-up">
            <img
              src="../assets/sd.png"
              alt=""
              srcset=""
              class="servicesimage"
            />
            <p class="servicesheading subheading">Software Development</p>
            <p class="servicescontents">
              We are sincere, experienced and dedicated team working in RAD
              tools with latest & flexible agile development model.
            </p>
            <router-link :to="{name:'services',params:{id:'sd'}}"> Read More +</router-link>
          </div>

          <div class="servicesitems" data-aos="zoom-in-up">
            <img
              src="../assets/consultancy.png"
              alt=""
              srcset=""
              class="servicesimage"
            />
            <p class="servicesheading">Consultancy Services</p>
            <p class="servicescontents">
              We are committed to provide high value to our clients and ensuring
              long term business relationship.
            </p>
            <router-link :to="{name:'services',params:{id:'cs'}}"> Read More +</router-link>
          </div>

          <div class="servicesitems" data-aos="zoom-in-up">
            <img
              src="../assets/manpower.png"
              alt=""
              srcset=""
              class="servicesimage"
            />
            <p class="servicesheading">Man Power Outsourcing</p>
            <p class="servicescontents">
              We are dedicated team of hardworking, experience, dynamic and
              professional working to provide quality and superior business
              management and technology management solutions.
            </p>
            <router-link :to="{name:'services',params:{id:'mpo'}}"> Read More +</router-link>
          </div>

          <div class="servicesitems" data-aos="zoom-in-up">
            <img
              src="../assets/datacentre.png"
              alt=""
              srcset=""
              class="servicesimage"
            />
            <p class="servicesheading">Data Centre</p>
            <p class="servicescontents">
              We have experienced in design, build, operate, maintenance, &
              management of Data Centre
            </p>
            <router-link :to="{name:'services',params:{id:'dc'}}"> Read More +</router-link>
          </div>
          
          <div class="servicesitems" data-aos="zoom-in-up">
            <img
              src="../assets/sd.png"
              alt=""
              srcset=""
              class="servicesimage"
            />
            <p class="servicesheading">Internet Networking Serices</p>
            <p class="servicescontents">
              We are dedicated team of hardcore networking professional in
              design, build, operate, maintenance and management
            </p>
            <router-link :to="{name:'services',params:{id:'ins'}}"> Read More +</router-link>
          </div>

          <div class="servicesitems" data-aos="zoom-in-up">
            <img
              src="../assets/capacitybuilding.png"
              alt=""
              srcset=""
              class="servicesimage"
            />
            <p class="servicesheading">Capacity Training</p>
            <p class="servicescontents">
              Owned training centre with state-of-the-art facilities to provide
              various e-governance training programme
            </p>
            <router-link :to="{name:'services',params:{id:'ct'}}"> Read More +</router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="landing4">
      <div class="container">
        <p
          class="headings"
          style="text-align:center;margin:auto;padding-top:2rem;padding-bottom:2rem;text-decoration:underline; text-decoration-color:#dc3d32;"
        >
          OUR PROFILE
        </p>
        <div class="ourprofilerows">
          <div class="ourprofileitems">
            <p id="ourprofilenumber">
                <vue3-autocounter ref='counter' :startAmount='0' :endAmount='15' :duration='3' prefix='' suffix='+' separator='' decimalSeparator=' ' :decimals='0' :autoinit='true' />

             </p>
           
            <p id="ourprofilecontent">years of experience</p>
          </div>
          <div class="ourprofileitems">
            <p id="ourprofilenumber">
                <vue3-autocounter ref='counter' :startAmount='0' :endAmount='500' :duration='3' prefix='' suffix='+' separator='' decimalSeparator=' ' :decimals='0' :autoinit='true' />
              
              </p>
           
            <p id="ourprofilecontent">Project lauched to GoM</p>
          </div>
          <div class="ourprofileitems">
            <p id="ourprofilenumber">
                <vue3-autocounter ref='counter' :startAmount='0' :endAmount='30' :duration='3' prefix='' suffix='+' separator='' decimalSeparator=' ' :decimals='0' :autoinit='true' />
              
              </p>
        
            <p id="ourprofilecontent">Employees</p>
          </div>
          <div class="ourprofileitems">
            <p id="ourprofilenumber">
                <vue3-autocounter ref='counter' :startAmount='0' :endAmount='6' :duration='3' prefix='0' suffix='+' separator='' decimalSeparator=' ' :decimals='0' :autoinit='true' />
              
              
              </p>
           
            <p id="ourprofilecontent">Awards</p>
          </div>
        </div>
      </div>
    </div>

    <div class="landing5">
      <div class="container">
        <p
          class="headings"
          style="text-align:center;margin:auto;padding-top:2rem;padding-bottom:2rem;text-decoration:underline; text-decoration-color:#dc3d32;"
        >
          UPDATES
        </p>

        <img src="../assets/updates.png" alt="" srcset="" class="updateimage" />
      </div>
    </div>

    <div class="landing6">
      <div class="isocontainer">
        <p
          class="headings"
          style="text-align:center;margin:auto;padding-top:2rem;padding-bottom:2rem;text-decoration:underline; text-decoration-color:#dc3d32;"
        >
          ISO CERTIFIED
        </p>
        <div class="isorows">
          <div class="isoitem">
            <img src="../assets/iso.png" alt="" srcset="" class="isoimage" />
            <p id="isonumber">ISO 27001</p>
            
            <p id="isocontent">Manage Information Security</p>
          </div>

          <div class="isoitem">
            <img src="../assets/iso.png" alt="" srcset="" class="isoimage" />
            <p id="isonumber">ISO 20000</p>
            <p id="isocontent">Service Management</p>
          </div>

          <div class="isoitem">
            <img src="../assets/iso.png" alt="" srcset="" class="isoimage" />
            <p id="isonumber">ISO 9001</p>
            
            <p id="isocontent">Quality Management</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue3autocounter from 'vue3-autocounter';

export default {
   components: {
    'vue3-autocounter': Vue3autocounter
  },
 mounted(){
    window.scrollTo(0,0);
  }
};
</script>

<style lang="scss">
@import "../assets/msegsstyles.scss";
// @import "../assets/msegs.css";


.landing1 {
  display: flex;
  flex-direction: row;
  // flex-wrap: wrap;
}
.knowmorebutton{
//  width: 91.5px;
//   height: 25px;
//   margin: 26px 158.5px 95.5px 0;
  padding: 8px 16px;

border-color: #f23d46;
  border-radius: 6px;
  background-color: #f23d46;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  text-decoration: none;
  // transition:opacity 3s;
  transition-delay: 0.09s;
  transition-timing-function: ease-in;
  
}
.knowmorebutton:hover{
    // box-shadow: 1px 2px 10px rgba($color: #000000, $alpha: 0.5);
    // opacity:95%;
    background-color: white;
    color:#f23d46;
    border:1px solid #f23d46;
}
.texts {
  width: 50%;
  // padding: 5rem 1rem 5rem 3rem;
  // margin:0 4rem 0 4rem;
  
}
.innertexts{
  margin:6rem 16rem 4rem 16rem;
  // margin:auto;
  // margin-left:38%;
  width:18rem;
  display: block;

}

.images {
  width: 50%;
  max-width:50%;
  // margin-right: 20px;
}

.landing1image{
   width:100%;
  height:80vh;
  margin-top:-1rem;
  z-index:-1;

}

.landing2 {
  background-color: #0a2458;
}
.row {
  display: flex;
  flex-direction: row;
}

.glimpse1 {
  width: 50%;
  margin: 16vh 1vw 16vh 1vw;
}
.glimpse1image{
  width:20rem;
}

.glimpse2 {
  width: 50%;
  margin: 60px 0 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#glimpsetext {
  font-family: Poppins;
  //   font-size: 8px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: normal;
  text-align: left;
  color: #b6c9ee;
}
.servicesrows {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.servicesitems {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.servicesimage {
  height: 60px;
  width: 60px;
}

.servicesheading {
  //   width: 154.5px;
  //   height: 22px;
  //   margin: 11px 49px 0.5px 189.5px;
  padding-top:1rem;
  font-family: "Playfair Display", serif;
  font-size: 18px;
  // min-width:8rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  //   line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #2c3134;
}

.servicescontents {
 
 display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;

  width: 17rem;
  min-height:4rem;

  
  margin: -5px 0 -10px 0;
  //   height: 47.5px;
  //   margin: 0.5px 41px 27px 182px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  //   line-height: 1.56;
  padding-top: 1rem;
  letter-spacing: normal;
  text-align: center;
  color: #7e7e7e;
}
.servicescontents:after{
  
}

.serviceslink {
  // width: 170px;
  //   height: 14px;
  //   margin: 1.5px 41px 14px 182px;
  // margin: auto;
  // padding-top: 1rem;
  // font-family: Poppins;
  // font-size: 12px;
  // font-weight: normal;
  // font-stretch: normal;
  // font-style: normal;
  // line-height: 1.56;
  // letter-spacing: normal;
  // text-align: center;
  // color: #0a2458;
  // text-decoration: none;
}

#app > div > div.spacing-top > div > div.landing3 > div > div > div:nth-child(n) > a{
   margin: auto;
  padding-top: 1rem;
  font-family: Poppins;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: center;
  color: #0a2458;
  text-decoration: none;
}
.landing4 {
  background-color: #f1f1f1;
  padding-bottom: 4rem;
  padding-top: 2rem;
}
.ourprofilerows {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.ourprofileitems {
  width: 20%;
  justify-content: center;
}

#ourprofilenumber {
  //      {
  //   width: 154.5px;
  //   height: 35px;
  //   margin: 21px 22.5px 19px 4px;
  font-family: Poppins;
  font-size: 30px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #2c3134;
}
#ourprofilecontent {
    // width: 120px;
  //   height: 21.5px;
  //   margin: 52.5px 19px 1px 0;
  // margin-top: -2rem;
  font-family: Poppins;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: center;
  color: #7e7e7e;
}
.landing5 {
  padding: 2rem 0 2rem 0;
}

.updateimage {
  width: 50vw;
}

.landing6 {
  padding-top: 2rem;
  padding-bottom: 1rem;
  background-color: #f1f1f1;
}

.isocontainer{
  margin:0 16vw 0 16vw;
}
.isorows {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2rem;
  padding-bottom: 3rem;
  
}

.isoitem {
  background-color: white;
  width: 25%;
  padding: 16px;
}
.isoimage {
  width: 50px;
  height: 50px;
}
#isonumber {
  //   width: 69.5px;
  //   height: 20px;
  //   margin: 7px 55px 3px 0;
  object-fit: contain;
  font-family: "Playfair Display", serif;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #0a2458;
  margin-top:1px;
}

#isocontent {
  //   width: 133.5px;
  //   height: 21px;
  //   margin: 2.5px 0 0;
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #7e7e7e;
}

@media only screen and (max-width:800px){
  .landing1 {
    // padding-top:-6rem;
  display: flex;
  flex-direction:column;
}

.texts {
  width: 100%;
  // margin:auto;
}
.innertexts{
  // margin:6rem 16rem 0 16rem;
  // margin:auto;
  margin:1rem 6rem 2rem 2rem;
  padding: auto;
  margin-bottom: 2rem;
  // width:18rem;

}

.images{
  width:100%;
}
.landing1image{
  margin-top:2rem;
  width:100%;
  // margin:auto;
  // height:62vh;
  height: auto;
  // height:16vh;
  // min-width: auto;
  // overflow-x:hidden ;
}
.row {
  display: flex;
  flex-direction:column;
  align-content: center;
  align-items: center;
  justify-content: center;
}
.glimpse1 {
  width: 100%;
  // margin: 60px 0 60px 0;
  // margin: 16vh 1vw 16vh 1vw;
  height: 16vh;
  text-align: center;

}
.glimpse1image{
  width:60vw;
  
}

.glimpse2 {
  width: 100%;
  // margin: auto;
  align-items: center;
  justify-content: center;
  // margin: 60px 0 60px 0;
}
#app > div > div.spacing-top > div > div.landing2 > div{
  margin:0 8vw;
  // width:100%;
  // font-family: Poppins;
}

.servicesrows {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
}

.serviceslink {
  // width: 170px;
  //   height: 14px;
    // margin: 1.5px 41px 14px 182px;
  // margin: auto;
  
}
#app > div > div.spacing-top > div > div.landing3 > div > div > div:nth-child(n) > a{
  // display: inline-block;
  // color:red;
  width:100vw;
  margin:0 8vw;
  // padding:0;
}

.ourprofilerows {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.ourprofileitems {
  max-width: 100%;
  margin:0 8vw;
  display: flex;
  flex-direction: column;
  // flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.isocontainer{
  margin:0 0.1rem 0 0.1rem;
}

.isorows {
  display: flex;
  flex-direction: row;
  flex-wrap:  nowrap;
  justify-content: space-between;
  margin-top: 2rem;
  padding-bottom: 3rem;

  overflow-x: auto;
  overflow:scroll;
  // overflow-x:hidden ;

}

.isorows::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}


.isoitem {
  background-color: white;
  width: 25%;
  min-width: 50%;
  padding: 16px;

  flex: 0 0 auto;
   width: auto;
  height: 100px;
  max-width: 100%;
  margin-right: 10px;
  margin-left:10px;
  
   
}

}
</style>
