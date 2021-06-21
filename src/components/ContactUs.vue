<template>
<div class="contactus">
    <!-- <div id="googleMap" style="width:100%;height:400px;"></div> -->
    <!-- <div id="map"></div> -->
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6420.56316980707!2d92.71281672098596!3d23.726354004446403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374d94c7752e1de9%3A0xfabe21a09a0936d0!2sMizoram%20State%20e-Governance%20Society!5e0!3m2!1sen!2sin!4v1623352949599!5m2!1sen!2sin" width="100%" height="350" style="border:0;margin-top:-14px;margin-bottom:1rem" allowfullscreen="" loading="lazy"></iframe>
<div class="container" style="display:flex;flex-direction:row;justify-content:center;align-items:center;align-contents:center">
    <div class="inforows">
        <div class="infocols">
            <img src="../assets/address.png" alt="" srcset="" class="addressimage">
            <p class="addresstitle">Address</p>
            <p class="addressdesc">
               Old Secretariat building - I, Treasury Square
            </p>
        </div>

        <div class="infocols">
            <img src="../assets/mail.png" alt="" srcset="" class="addressimage">
            <p class="addresstitle">Email</p>
            <p class="addressdesc">info@msegs.in</p>
        </div>

        <div class="infocols">
            <img src="../assets/phone.png" alt="" srcset="" class="addressimage">
            <p class="addresstitle">Contact</p>
            <p class="addressdesc">0389-2342986</p>
        </div>
    </div>

    </div>
    <hr style="opacity:20%;margin:4rem 0 2rem 0;">

    <div class="container">

        <p class="formtitle">Share your information to keep in contact</p>
        <p class="formdesc">We would love to contact you and ask about any issues you <br>are facing about MSeGS</p>
    
    <div class="formgroups">
        <div class="fields">

            <label for="name" id="labels" class="required">Your Name</label><br>
        <input type="text" class="formclass" id="name">
        </div>
         <div class="fields">

            <label for="email" id="labels" class="required">Your email address</label><br>
        <input type="text" class="formclass" id="email">
        </div> <div class="fields">

            <label for="subject" id="labels" class="required">Subject</label><br>
        <input type="text" class="formclass" id="subject">
        </div> <div class="fields">

            <label for="contactnumber" id="labels" class="required">Your phone number</label><br>
        <input type="text" class="formclass" id="contactnumber">
        </div>
<div class="fields" style="width:84%">

            <label for="messsage" id="labels" class="required">How can we help you solve your issue</label><br>
        <textarea type="text" rows="5" cols="80" class="formclass" id="message" style="height:5rem"></textarea>
        <a href="" class="submitbutton" style="margin-top:2rem;">SUBMIT</a>
        </div>

        

    </div>
    
    </div>

</div>
    
</template>

<script>
export default {
  mounted(){
    window.scrollTo(0,0);
  }

}
</script>



<style lang="scss" scoped>

  #map {
        height: 400px;
        /* The height is 400 pixels */
        width: 100%;
        /* The width is the width of the web page */
      }
.inforows{
  
    display:flex;
    flex-flow: row;
    align-items: center;
    justify-content:stretch;
    align-content: center;

}

.infocols{
    display:flex;
    flex-flow: column;
    justify-content: center;
    align-content: center;
    border-left:1px solid rgba(black,0.1);
    border-right:1px solid rgba(black,0.1);
    padding-left:4.1rem;
    padding-right:4.21rem;
    width:8rem;

   
}


.addressimage{
    width:30%;
    margin:auto
}

.addresstitle{
    font-family: Poppins;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
//   line-height: 2;
  letter-spacing: normal;
  text-align: center;
  color: #2c3134;
  margin:0;
}

.addressdesc{
    font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
//   line-height: 1.56;
  letter-spacing: normal;
  text-align: center;
  color: #76838f;
  margin:0;
}

.formtitle{
   
  font-family: 'Playfair Display';
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: #0a2458;

}

.formdesc{
    // width:70%;
    font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: center;
  color: #76838f;
}

.formgroups{
    margin:0 4rem 4rem 4rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}

.formclass{
    // width:45%;
    // margin:1rem;
    height: 2rem;
  border-radius: 4px;
  border: solid 0.5px #bfbfbf;
  background-color: #ffffff;
  margin:0;

    
}
.fields{
    display: flex;
    flex-direction: column;
    width: 40%;
    margin:2rem 1rem 0 1rem;
    // align-items: stretch;
    // justify-content: center;
    // align-content: center;
}

#labels{
     font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
//   line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #2c3134;
//   margin:-1rem -8rem 0 0;
margin:0 0 -1rem 0;
}
.required::after{
    content: "*";
    color:#f23d46;
}
.submitbutton{
      width: 16rem;
  height: 25px;
  
  margin:auto;
  padding: 6.5px 0 5px;
//   border-radius: 2.5px;
//   background-color: #dc3d32;
//   text-align: center;
//   font-size: 16px;
//   text-decoration: none;
//   color:white;
//   font-family: Poppins;
// //   font-size: 8px;
//   font-weight: 600;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 1.56;
//   letter-spacing: normal;
//   text-align: center;
//   color: #ffffff;


border-color: #f23d46;
  border-radius: 6px;
  background-color: #f23d46;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  // line-height: 1.56;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  text-decoration: none;
  // transition:opacity 3s;
  transition-delay: 0.09s;
  transition-timing-function: ease-in;
}
.submitbutton:hover{
    // box-shadow: 1px 2px 10px rgba($color: #000000, $alpha: 0.5);
    // opacity:95%;
    background-color: white;
    color:#f23d46;
    border: 1px solid #f23d46;;
}

@media screen and (max-width:800px){

  .container{
    margin:auto;
  }
  .inforows{
    display:flex;
    flex-flow: column;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
}

.infocols{
    // display:flex;
    // flex-flow: column;
    // justify-content: center;
    // align-content: center;
    border-left:1px solid rgba(black,0.1);
    border-right:1px solid rgba(black,0.1);
    padding-left:4.1rem;
    padding-right:4.21rem;
    padding-bottom:1rem;

   
}
.formgroups{
    margin:0 1rem 4rem 1rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
}

.formclass{
    // width:45%;
    // margin:1rem;
    width: 100%;
    height: 2rem;
  border-radius: 4px;
  border: solid 0.5px #bfbfbf;
  background-color: #ffffff;
  margin:0;

    
}
.fields{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin:2rem 1rem 0 1rem;
    // align-items: stretch;
    // justify-content: center;
    // align-content: center;
}

#labels{
     font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
//   line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #2c3134;
//   margin:-1rem -8rem 0 0;
margin:0 0 -1rem 0;
}
.required::after{
    content: "*";
    color:#f23d46;
}
.submitbutton{
      // width: 15rem;
      width:100%;
  height: 25px;
  
  margin:auto;
  padding: 6.5px 0 5px;
  border-radius: 2.5px;
  background-color: #dc3d32;
  text-align: center;
  font-size: 16px;
  text-decoration: none;
  color:white;
  font-family: Poppins;
//   font-size: 8px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;

}
}
</style>