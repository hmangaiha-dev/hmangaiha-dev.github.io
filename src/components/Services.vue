<template>
  <div style="margin-top:-1rem">
    <div class="ourservices">
      <p class="headings " style="margin:auto">Our Services</p>
    </div>
    <div class="services1 container">
      <div class="sdtext">
        <p class="headings sdheadings">Software Development</p>
        <p id="sdcontents">
          We are sincere, experienced and dedicated team working in RAD tools
          with latest & flexible agile development model. We have scalable data
          centre infrastructure support for your business necessities. We
          provide quality assurance and standard testing before delivery of
          software. We use version control system to manage and document changes
          to source code over time. Our expertise include:
        </p>
        <ul id="sdcontents">
          <li>UX/UI Design</li>
          <li>Responsive Web Application Development</li>
          <li>Mobile Apps Development</li>
          <li>IoT based Application Software</li>
          <li>Enterprise Resource Planning (ERP)</li>
        </ul>
      </div>
      <div class="sdimage">
        <img src="../assets/sdbig.png" alt="" srcset="" class="sdimage" />
      </div>
    </div>

    <div class="services1 container">
      <div class="sdimage">
        <img src="../assets/consultbig.png" alt="" srcset="" class="sdimage" />
      </div>
      <div class="sdtext">
        <p class="headings sdheadings " id="blues">Consultancy Services</p>
        <p id="sdcontents">
          We are committed to provide high value to our clients and ensuring
          long term business relationship. We partner with top consulting firms
          to develop the best e-governance solutions for our clients. Our teams
          work with clients at all levels to gauge what solutions will get them
          the desired outcomes. Below are some of our strategic consulting
          areas:
        </p>
        <ul id="sdcontents">
          <li>
            <strong>Management Domain:</strong><br />
            <text>BPR, FRS, PM, DPR, RFP & Bid evaluation, etc. </text>
          </li>
          <li>
            <strong>Functional Domain: </strong><br />
            <text
              >Finance & Accounts, eProcurement, HRM, CB & Legal matters, etc.
            </text>
          </li>
          <li>
            <strong>Technology Domain: </strong><br />
            <text
              >Software Architecture, Compute, Storage, Networking,
              Virtualization, & Data Centre Management.
            </text>
          </li>
        </ul>
      </div>
    </div>

    <div class="services1 container">
      <div class="sdtext">
        <p class="headings sdheadings">Manpower Outsourcing</p>
        <p id="sdcontents">
          We are dedicated team of hardworking, experience, dynamic and
          professional working to provide quality and superior business
          management and technology management solutions. We strongly stand to
          mediate between the jobs creators and the job seekers. Our commitment,
          to promote close relationship between the employers and the employees
          makes our organization one of the best manpower outsourcing sources.
          We always keeps your requisites at the forefront when selecting ideal
          candidates for the job. We assure you our best of services at all
          times
        </p>
        <!-- <ul id="sdcontents">
          <li>UX/UI Design</li>
          <li>Responsive Web Application Development</li>
          <li>Mobile Apps Development</li>
          <li>IoT based Application Software</li>
          <li>Enterprise Resource Planning (ERP)</li>
        </ul> -->
      </div>
      <div class="sdimage">
        <img src="../assets/manpowerbig.png" alt="" srcset="" class="sdimage" />
      </div>
    </div>

    <div class="services1 container">
      <div class="sdimage">
        <img
          src="../assets/datacentrebig.png"
          alt=""
          srcset=""
          class="sdimage"
        />
      </div>
      <div class="sdtext">
        <p class="headings sdheadings" id="blues">Data Center</p>
        <p id="sdcontents">
          We have experienced in design, build, operate, maintenance, &
          management of Data Centre (DC). Our data centre is ISO20000-1 and
          ISO27001 certification and compliance. We provide efficient and timely
          service delivery and ensure data security and safety with industry
          best uptime SLA of 99.85%. Our data centre is supported by
          uninterrupted power supply ensuring zero downtime since inception and
          provide 24x7 customer support with enable data recovery site.
        </p>
      </div>
    </div>

    <div class="services1 container">
      <div class="sdtext">
        <p class="headings sdheadings">Internetworking Service</p>
        <p id="sdcontents">
          We are dedicated team of hard core networking professional in design,
          build, operate, maintenance and management of state-wide area
          networking using G-PON & wireless technologies. As per the customer
          requirement, we can provide open standard, scalable, high speed
          network with triple play services (IPTV, internet, telephone) using IP
          MPLS (Internet Protocol Multi-Protocol Label Switching) & GPON
          (Gigabit Passive Optic Network) technologies.
        </p>
      </div>
      <div class="sdimage">
        <img
          src="../assets/internetworkingbig.png"
          alt=""
          srcset=""
          class="sdimage"
        />
      </div>
    </div>

    <div class="services1 container">
      <div class="sdimage">
        <img
          src="../assets/capacitybuildingbig.png"
          alt=""
          srcset=""
          class="sdimage"
        />
      </div>
      <div class="sdtext">
        <p class="headings sdheadings" id="blues">
          Capacity Building & Trainning
        </p>
        <p id="sdcontents">
          We have our owned training centre with state-of-the-art facilities and
          has been tied-up with NISG, NeGD, IIPA, ATI for providing various
          e-governance training programme like change management, business
          model, e-governance life cycle, project management, e-procurement,
          preparation of BPR, FRS, SRS, DPR and RFP. We can also customise
          training programme as per the requirement of our customer in the field
          of e- emerging technologies like IoT, AI, Blockchain, Big Data
          Analytics, etc.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/msegsstyles.scss";
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap");
.ourservices {
  background-color: #ececec;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0 3rem 0;
}

.services1 {
  padding: 3rem 0 3rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.sdtext {
  width: 45%;
}
#blues {
  color: #0a2458;
}
.sdheadings {
  width: 30rem;
  font-family: "Playfair Display", serif; //   font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #dc3d32;
}
#sdcontents {
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
.sdimage {
  width: 55%;
  text-align: center;
  margin: auto;
  height: 35vh;
  width: 30vw;
}


@media screen and (max-width:900px){
  .services1 {
  padding: 3rem 0 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
}

.sdimage {
  width: 100%;
  text-align: center;
  margin: auto;
  height: auto;
  width: 100%;
}

.sdtext {
  width: 100%;
}
}
</style>
