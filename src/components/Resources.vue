<template>
  <div style="margin-top:auto">
    <div class="ourservices">
      <p class="headings " style="margin:auto">Resources</p>
    </div>

    <div class="container" style="padding:2rem 0 2rem 0 ;">
      <div class="rows1">
        <div class="resourcescol">

          <div class="resourcesitems">
            <div class="resourcescontents">
              <p class="resourcescontentsdate">20th May 2020</p>
              <p class="resourcescontentstexts">
                Notice for Empanelment of Service provider agencies for
                organizing Virtual Events
              </p>
            </div>

            <div class="resourcesprinter">
             <a href="../assets/biometric.pdf" download="biometric.pdf"> <img src="../assets/pdficon.svg" alt="" srcset="" class="pdficon"/></a>
            </div>
          </div>


          <div class="resourcesitems">
            <div class="resourcescontents">
              <p class="resourcescontentsdate">20th May 2020</p>
              <p class="resourcescontentstexts">
                Notice for Empanelment of Service provider agencies for
                organizing Virtual Events
              </p>
            </div>

            <div class="resourcesprinter">
              <img src="../assets/pdficon.svg" alt="" srcset="" class="pdficon"/>
            </div>
          </div>


        </div>

        <div class="archivecol">
          <p class="archivetitle">Archive</p>
          <p class="archivedates">2021</p>
          <p class="archivedates">2020</p>
          <p class="archivedates">2019</p>
          <p class="archivedates">2018</p>
          <p class="archivedates">2017</p>
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
};
</script>

<style lang="scss">
.ourservices {
  background-color: #ececec;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0 3rem 0;
}

.rows1 {
  display: flex;
  flex-direction: row;
}

.resourcescol {
  width:80%;
  display: flex;
  flex-direction: column;
}

.archivecol {
  width:20%;
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
//   justify-content: center;
  align-items: center;
}

.resourcesitems {
  display: flex;
  flex-direction: row;
  padding: 6px 10.5px 8.5px 24.5px;
  border-radius: 2.5px;
  border: solid 0.5px #e8e8e8;
  background-color: #ffffff;
  align-items: center;
  margin-bottom:10px;
  // justify-content: center;
}

.resourcesitems:hover {
  box-shadow: 1px 2px 5px rgba($color: #000000, $alpha: 0.2);
}
.resourcescontents {
  width: 95%;
  padding:1rem;
}

.resourcesprinter {
  width: 5%;
  padding-right: 1rem;
  
}

.resourcescontentsdate {
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #a1a1a1;
}

.resourcescontentstexts {
  font-family: "Playfair Display";
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.39;
  letter-spacing: normal;
  text-align: left;
  color: #272727;
}

.archivetitle {
  font-family: PlayfairDisplay;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #2c3134;
}

.archivedates {
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 18px;
  letter-spacing: normal;
  text-align: left;
  color: #2c3134;
  padding-top:1rem;
}


@media screen and(max-width:800px){
 #app > div > div.spacing-top > div > div.container {
   margin:0 8vw;
 }
.rows1 {
  display: flex;
  flex-direction: column;
}
.resourcescol {
  width:100%;
}
.pdficon{
  margin-right:2rem;
}

.archivecol{
  display: none;

}


}
</style>
