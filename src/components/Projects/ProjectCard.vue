<template>
 
        <div class="card">
          <img
            :src="require('../../assets/'+imgsrc)"
            alt=""
            srcset=""
            class="cardimage"
          />
          <div class="cardcontainer" >
            <!-- <span class="carddate">12 Dec</span><br /> -->
            <span class="cardtitle">{{title}}</span>
            <p class="cardtexts">
              {{subtitle}}
            </p>
          </div>
          <div class="cardbutton">
            <p class="seeproject" ><router-link  to='/projectdetails' > SEE PROJECT <i class="fas fa-long-arrow-alt-right"></i></router-link></p>
          </div>
        </div>

   
</template>

<script>
export default {
 props:['title','subtitle','imgsrc'
 ],
 data(){
     return{

     }
 }
};
</script>

<style lang="scss">
.projects {
  margin-top: -1rem;
  z-index: 0;
}
.projectsback {
  background-color: #ececec;
  padding-top:3rem;
  padding-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.projectsrows {
  padding: 2rem 0 2rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.card {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.0);
  transition: 0.3s;
  width: 16rem;
  margin:0.5rem;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.cardimage {
  width: 100%;
}
.cardcontainer {
  padding: 2px 16px;
}

.carddate {
  font-family: Poppins;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #a1a1a1;
}

.cardtitle {
  margin: -2rem 0 -2rem 0;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: left;
  color: #2c3134;
}

.cardtexts {
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

.cardbutton {
  background-color: rgba(10, 10, 10, 0.04);
  height: 50px;
  margin-top: 1rem;
  // margin-top:-1.8rem;
}

.seeproject {
  padding: 10px 16px;

  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #f23d46;
}


#app > div > div.spacing-top > div > div > div > span:nth-child(n) > div > div.cardbutton > p > a{
  text-decoration: none;
    color: #f23d46;
    margin:auto
}

@media screen and (max-width:800px){
  .card{
    width:90%;
    margin-bottom:12px;
  }
  
}
</style>
