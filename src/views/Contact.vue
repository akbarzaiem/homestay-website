<template>
  <div class="contact">
    <Navbar />
    <div class="container">
      <div class="container d-flex flex-column min-vh-100">
        <h2
          data-aos="zoom-in-down"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          Contact us if you interest
        </h2>
        <div class="row">
          <div class="col-12 col-xl-3">
            <p
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
            >
              <a :href="wa" target="_blank" class="wa-btn btn btn-success">
                <img :src="waIcon" alt="icon wa" height="24" /> Whatsapp
              </a>
            </p>
          </div>
          <div class="col-12 col-xl-3">
            <p
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
            >
              <a :href="maps" target="_blank" class="maps-btn btn btn-light">
                <img :src="mapIcon" alt="icon map" height="24" /> Maps</a
              >
            </p>
          </div>
        </div>

        <!-- <a href='https://pngtree.com/so/whatsapp'>whatsapp png from pngtree.com/</a> -->
      </div>
    </div>
    <Footer />
    <NavbarMobile />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import NavbarMobile from "@/components/NavbarMobile.vue";
export default {
  name: "Contact",
  components: {
    Navbar,
    Footer,
    NavbarMobile,
  },
  data() {
    return {
      wa: "https://wa.me/6287838164799?text=Saya%20tertarik%20dengan%20homestay%20yang%20anda%20tawarkan,%20apakah%20dapat%20saya%20booking?",
      maps: "https://maps.app.goo.gl/oomzZ2LgYMLdFYWL7",
      waIcon: "img/icon/whatsapp.png",
      mapIcon: "img/icon/map.png",
    };
  },
};
</script>

<style lang="sass" scoped>
@import "../styles/general"
.col-xl-3
  @media (min-width: map-get($grid-breakpoints, lg) )
    max-width: 17%
// .col-12
//   @media (max-width: map-get($grid-breakpoints, sm) )

h2
  margin-top: 30px
  margin-left: 20px
.wa-btn
  margin-top: 30px
  margin-left: 20px
.maps-btn
  margin-top: 30px
  margin-left: 20px
</style>

// atrribution
// <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// <div>Icons made by <a href="https://www.flaticon.com/authors/najmunnahar" title="NajmunNahar">NajmunNahar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>