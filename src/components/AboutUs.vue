<template>
  <div class="aboutus" style="margin-top:-1rem;">


    <span class="aboutusback">
      <p class="headings" style="margin:auto">Who We Are</p>
      <p style="color: #707070;font-size:12px;">About Us / Who we are</p>
    </span>

    <div class="container" style="margin-top:2rem">
      <div class="aboutrows">
        <div class="aboutimagecol">
          <img
            src="../assets/aboutuslogo.png"
            alt=""
            srcset=""
            class="aboutimage" style="width:70%"
          />
        </div>

        <div class="abouttextcol">
          <p class="headings" style="font-size:24px">Glimpse of MSeGS</p>
          <p class="aboutcontents">
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

  <div class="landing4" style="background-color:white;margin-bottom:2rem;">
      
        <p
          class="headings"
          style="text-align:center;margin:auto;padding-top:1rem;padding-bottom:1rem;text-decoration:underline; text-decoration-color:#dc3d32;font-size:24px"
        >
          OUR PROFILE
        </p>
        <div class="ourprofilerows">
          <div class="ourprofileitems">
            <p id="ourprofilenumber">15+</p>
            <p id="ourprofilecontent">years of experience</p>
          </div>
          <div class="ourprofileitems">
            <p id="ourprofilenumber">500+</p>
            <p id="ourprofilecontent">Project lauched to GoM</p>
          </div>
          <div class="ourprofileitems">
            <p id="ourprofilenumber">30+</p>
            <p id="ourprofilecontent">Employees</p>
          </div>
          <div class="ourprofileitems">
            <p id="ourprofilenumber">06</p>
            <p id="ourprofilecontent">Awards</p>
          </div>
        </div>
     
    </div>

<div class="aboutrows">
        <div class="aboutimagecol">
          <img
            src="../assets/aboutusvision.png"
            alt=""
            srcset=""
            class="aboutimage"
          />
        </div>
        <div class="abouttextcol">
          <p class="headings" style="font-size:24px">Our Vision</p>
          <p class="aboutcontents">
          To help the state government for transforming governance into citizen centric services and provide smart service delivery system.
          </p>
        </div>
      
    </div>

<div class="aboutrows">
        
        <div class="abouttextcol">
          <p class="headings" style="font-size:24px">Our Mission</p>
          <p class="aboutcontents">
              <ul class="aboutlists">
          <li> Creating enterprise architecture and provide smart solution. </li>
<li>Assists  state government in e-governance to improve public service delivery mechanism. </li>
<li>Skill development to unemployed youth in emerging technologies for employability in government and private sector.</li>
</ul>
          </p>
        </div>
        <div class="aboutimagecol">
          <img
            src="../assets/aboutusmission.png"
            alt=""
            srcset=""
            class="aboutimage"
          />
        </div>
     
    </div>

    <div class="aboutrows">
        <div class="aboutimagecol">
          <img
            src="../assets/aboutusobjectives.png"
            alt=""
            srcset=""
            class="aboutimage"
          />
        </div>
        <div class="abouttextcol">
          <p class="headings" style="font-size:24px">Our Objectives</p>
          <p class="aboutcontents">
         <ul class="aboutlists">
<li>Implementation, monitoring and evaluation of various e-governance projects in the state.</li>
<li>Provide citizen facilitation centre or common service centre in every village to delivery various services to the citizen.</li>
<li>Assist the state government to collect revenue through online and transfer the revenue collected to the concerned departments.</li>
<li>Improve government service delivery system with emerging technologies.</li>
<li>Provide share infrastructure to all government departments for network, data centre and public service delivery centres reducing the total cost of ownership.  </li>  
<li>Help the state government for implementing Right to Public Services (RTPS) to reduce corruption and to increase transparency and public accountability.</li>
<li>Provide technology and management consultancy services to the state government for implementation of e-governance in various departments.</li>
<li>Promote local IT entrepreneurs by enhancement of quality management system and business continuity to sustain in the digital world.  </li>
<li>Carrying out impact assessment and e-readiness measurement of e-governance projects of the state government.</li>
<li>Manpower outsourcing to state government departments by recruiting, deployment and HR management of specialised resources.</li>
<li>Assist the state government to setup cyber security lab enhancing safe and secure cyberspace in the state. </li>

         </ul>
          </p>
        </div>




      </div>
      </div>
  </div>



    






</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss">
.aboutusback {
  background-color: #ececec;
  background-color: #ececec;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0 3rem 0;
}

.aboutrows {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom:3rem;
}
.aboutimagecol {
  width: 50%;
   display: flex;

  justify-content: center;
  align-items: center;
}

.aboutimage {
 
  width: 60%;
//   margin: auto;
}
.abouttextcol {
  width: 50%;
  align-items: center;
}

.aboutcontents {
  display: flex;

  justify-content: center;
  align-items: center;

  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  letter-spacing: normal;
  text-align: left;
  color: #393939;
}

.aboutlists{
    margin-left:-1rem;
}
</style>
