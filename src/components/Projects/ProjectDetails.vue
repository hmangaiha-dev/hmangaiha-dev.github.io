<template>
  <div style="margin-top:-1rem">
    <div class="details">
      <p class="headings " style="margin:auto">Project Details</p>
      <p style="color: #707070;font-size:12px;"><router-link to="/projects" style="text-decoration:underline;color:#707070">Projects</router-link> / e-District</p>
    </div>
    <div class="container">
      <div class="detailsrows">
        <div class="col1">
          <div class="detailscard">
            <p class="detailstitle">
              e-District
            </p>
            <hr style="opacity:30%">
            <div class="detailscardcontainer">
              <div class="detailscardrows">
                <div class="detailscardcol1">
                  Client
                </div>

                <div class="detailscardcol2">
                  Department of Information & Communication Technology,
                  Government of Mizoram.
                </div>
              </div>

              <div class="detailscardrows">
                <div class="detailscardcol1">
                  Hosted at
                </div>

                <div class="detailscardcol2">
                  Mizoram State Data Centre
                </div>
              </div>
            </div>
            <hr style="opacity:30%">
            <div class="detailscardcontainer">
              <div class="detailscardrows">
                <div class="detailscardcol1">
                  Products
                </div>

                <div class="detailscardcol2"></div>
              </div>
              <div class="detailscardrows">
                <div class="detailscardcol1">
                  <img
                    src="../../assets/chrome.svg"
                    alt=""
                    srcset=""
                    class="detailscardcol1image"
                  />
                </div>

                <div class="detailscardcol2">
                  Web application
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col2">
          <img
            src="../../assets/edistrict.png"
            alt=""
            srcset=""
            class="col2image"
          />
          <p class="col2heading">
            Improving district administration enabling to deliver online public
            service to the citizen through common service centre.
          </p>
          <p class="col2contents">
            This project is funded by Government of India, Ministry of
            electronics & IT (MeitY) under National e-Governance Plan (NeGP)
            with the total budget out lay of Rs. 19.23 crore and implemented
            within 4 years including 3 years operation and maintenance. This
            project is to radically improve the way districts work and provides
            services to citizens and automate the complete workflow and internal
            processes of district administration with the possibility of
            seamless integration of various departments to e-enable the delivery
            of services. Reduction of time taken to avail the services by the
            citizens. One-stop service delivery point in an efficient, reliable
            and integrated manner through authorised service centre such as
            Common Service Centres (CSCs), Rural Information Kiosks (RIKs) and
            e-District Facilitation Centres. Increase transparency in the
            delivery system - the applicant goes to the authorized service
            centre does not have to deal with the officials who actually process
            it and she/he can keep track the application online. Improve
            processing time of applications in district administration and
            subordinate offices for providing services to the citizens. Ensure
            fast processing of public cases/appeals/grievances dissemination of
            information within the defined service levels. Easy access to
            government services to common man with minimum procedural
            formalities through authorised service centre like CSC, RIK and
            e-District facilitation centre.
          </p>
           

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      texts:null,
      imagess:null
    }
  },
  created(){
    axios.get('https://jsonplaceholder.typicode.com/photos/1').then((response) => {
  console.log(response.data);
  this.texts = response.data.title;
  this.imagess = response.data.thumbnailUrl;
})

  },
  mounted(){
    window.scrollTo(0,0);
  }
};
</script>

<style lang="scss">
.details {
  background-color: #ececec;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0 3rem 0;
}

.detailsrows {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

}

.col1 {
  width: 30%;
}

.detailscard {
  margin-top:1rem;

  width: 100%;
  box-shadow: 1px 1px 4px grey;
  border-radius: 5px;
}
.detailstitle {
  // margin:auto;
  padding: 1rem 0 1rem 0;
  text-align: center;
  font-family: Poppins;
  color: #0a2458;
  font-weight: bold;
  font-size: 20px;
}

.detailscardcontainer {
  padding: 1rem;
}
.detailscardrows {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0.5rem 0 0.1rem 0;
}

.detailscardcol1 {
  width: 30%;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #2c3134;
}
.detailscardcol2 {
  width: 70%;
  padding-left: 14px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #76838f;
}

.col2 {
  width: 70%;
  padding: 1rem 1rem 1rem 2rem;
}
.col2image {
  width: 100%;
}
.col2heading {
  font-family: 'Playfair Display';
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: left;
  color: #393939;
  padding-top:16px;
}

.col2contents {
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #393939;
}

@media screen and(max-width:800px) {

.detailsrows {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

}

.col1 {
  width: 100%;
}

.detailscard {
  width: 100%;
  box-shadow: 1px 1px 4px grey;
  border-radius: 5px;
}
.detailstitle {
  // margin:auto;
  padding: 1rem 0 1rem 0;
  text-align: center;
  font-family: Poppins;
  color: #0a2458;
  font-weight: bold;
  font-size: 20px;
}

.detailscardcontainer {
  padding: 1rem;
}
.detailscardrows {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0.5rem 0 0.1rem 0;
}

.detailscardcol1 {
  width: 30%;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #2c3134;
}
.detailscardcol2 {
  width: 70%;
  padding-left: 14px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #76838f;
}

.col2 {
  width: 100%;
  padding: 1rem 0rem 1rem 0rem;
}
.col2image {
  width: 100%;
}


  
}
</style>
