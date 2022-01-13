<template>
  <div class="facilities">
    <Navbar />
    <div class="container">
      <div class="container d-flex flex-column min-vh-100">
        <carousel
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          :items="1"
          s
          :nav="false"
          :autoplay="true"
          :autoplaySpeed="1000"
          :loop="true"
        >
          <img
            class="image-homestay"
            v-for="items in photos"
            :key="items.no"
            :src="items.photo"
          />
        </carousel>
        <div class="container list">
          <h2
            data-aos="fade-down"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            List Facility
          </h2>
          <div
            class="big"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <div class="row">
              <div
                v-for="items in facility"
                :key="items.no"
                class="col-12 col-xl-4 pr-2"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
              >
                <img :src="iconCheck" alt="logo-check" />{{ items.list }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <NavbarMobile />
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import NavbarMobile from "@/components/NavbarMobile.vue";

export default {
  name: "Facilities",
  components: {
    Navbar,
    carousel,
    Footer,
    NavbarMobile,
  },
  data() {
    return {
      photos: [
        { no: 1, photo: "img/photo-homestay/21.webp" },
        { no: 2, photo: "img/photo-homestay/22.webp" },
        { no: 3, photo: "img/photo-homestay/11.webp" },
        { no: 4, photo: "img/photo-homestay/12.webp" },
        { no: 5, photo: "img/photo-homestay/13.webp" },
        { no: 6, photo: "img/photo-homestay/14.webp" },
        { no: 7, photo: "img/photo-homestay/15.webp" },
        { no: 8, photo: "img/photo-homestay/16.webp" },
        { no: 9, photo: "img/photo-homestay/17.webp" },
        { no: 10, photo: "img/photo-homestay/18.webp" },
        { no: 11, photo: "img/photo-homestay/19.webp" },
        { no: 12, photo: "img/photo-homestay/20.webp" },
      ],
      iconCheck: "img/icon/check.svg",
      facility: [
        { no: 1, list: "Kapasitas 6-8 orang" },
        { no: 2, list: "Parkir bisa muat 2 mobil" },
        { no: 3, list: "Teras luas" },
        { no: 4, list: "Ruang tengah" },
        { no: 5, list: "Ruang dapur dan peralatannya" },
        { no: 6, list: "2 kamar tidur" },
        { no: 7, list: "1 kamar mandi non shower dan non panas" },
        { no: 8, list: "Meja Makan" },
        { no: 9, list: "AC" },
        { no: 10, list: "Kipas angin" },
        { no: 11, list: "TV" },
        { no: 12, list: "Dispenser" },
        { no: 13, list: "Kulkas" },
        { no: 14, list: "Tambahan 1 bed tidur" },
        { no: 15, list: "Magic com" },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
@import "../styles/general"
.owl-carousel
  .owl-item img
    @media (max-width: map-get($grid-breakpoints, sm) )
      margin-top: 30px
      height: 325px
.list
  margin-top: 50px
  h2
    font-weight: map-get($font-weight, semi-bold )
    margin-bottom: 20px
  .big
    margin-bottom: 50px
    .row
      font-weight: map-get($font-weight, medium )
</style>
