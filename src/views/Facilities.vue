<template>
  <div class="facilities">
    <Navbar />

    <div class="container">
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
        <img class="image-homestay" :src="photo11" />
        <img class="image-homestay" :src="photo12" />
        <img class="image-homestay" :src="photo1" />
        <img class="image-homestay" :src="photo2" />
        <img class="image-homestay" :src="photo3" />
        <img class="image-homestay" :src="photo4" />
        <img class="image-homestay" :src="photo5" />
        <img class="image-homestay" :src="photo6" />
        <img class="image-homestay" :src="photo7" />
        <img class="image-homestay" :src="photo8" />
        <img class="image-homestay" :src="photo9" />
        <img class="image-homestay" :src="photo10" />
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
            <div class="col-12 col-xl-4">
              <img :src="iconCheck" alt="logo-check" />Kapasitas 6-8 orang
            </div>
            <div class="col-12 col-xl-4">
              <img :src="iconCheck" alt="logo-check" />Parkir bisa muat 2 mobil
            </div>
            <div class="col-12 col-xl-4">
              <img :src="iconCheck" alt="logo-check" />Teras luas
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-xl-4">
              <img :src="iconCheck" alt="logo-check" />Ruang tengah
            </div>
            <div class="col-12 col-xl-4">
              <img :src="iconCheck" alt="logo-check" />Ruang dapur dan
              perlatannya
            </div>
            <div class="col-12 col-xl-4">
              <img :src="iconCheck" alt="logo-check" />2 kamar tidur
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-xl-4">
              <img :src="iconCheck" alt="logo-check" />1 kamar mandi non shower
              dan non panas
            </div>
            <div class="col-12 col-xl-4">
              <img :src="iconCheck" alt="logo-check" />Meja Makan
            </div>
            <div class="col-12 col-xl-4">
              <img :src="iconCheck" alt="logo-check" />AC
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-xl-4">
              <img :src="iconCheck" alt="logo-check" />Kipas angin
            </div>
            <div class="col-12 col-xl-4">
              <img :src="iconCheck" alt="logo-check" />TV
            </div>
            <div class="col-12 col-xl-4">
              <img :src="iconCheck" alt="logo-check" />Dispenser
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-xl-4">
              <img :src="iconCheck" alt="logo-check" />Kulkas
            </div>
            <div class="col-12 col-xl-4">
              <img :src="iconCheck" alt="logo-check" />Tambahan 1 bed tidur
            </div>
            <div class="col-12 col-xl-4">
              <img :src="iconCheck" alt="logo-check" />Magic com
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
      photo1: "img/photo-homestay/11.jpg",
      photo2: "img/photo-homestay/12.jpg",
      photo3: "img/photo-homestay/13.jpg",
      photo4: "img/photo-homestay/14.jpg",
      photo5: "img/photo-homestay/15.jpg",
      photo6: "img/photo-homestay/16.jpg",
      photo7: "img/photo-homestay/17.jpg",
      photo8: "img/photo-homestay/18.jpg",
      photo9: "img/photo-homestay/19.jpg",
      photo10: "img/photo-homestay/20.jpg",
      photo11: "img/photo-homestay/21.jpg",
      photo12: "img/photo-homestay/22.jpg",
      iconCheck: "img/icon/check.svg",
    };
  },
};
</script>

<style lang="sass" scoped>
@import "../styles/general"
.owl-carousel
  .owl-item img
    @media (max-width: map-get($grid-breakpoints, sm) )
      height: 450px
.list
  margin-top: 50px
  h2
    font-weight: map-get($font-weight, semi-bold )
    margin-bottom: 20px
  .big
    margin-bottom: 50px
    .row
      max-width: 90%
      font-weight: map-get($font-weight, medium )
</style>
