<template>
  <div class="container">
    <div class="hero">
      <div class="row float-left">
        <div
          class="col"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <p class="tittle">
            HOMESTAY <br />
            BERBAH<br />
            SYARIAH<br />
            JOGJA
          </p>

          <vue-typed-js :strings="['Nyaman', 'Tentram']" :loop="true">
            <h4 class="type">Terasa <span class="typing"></span></h4>
          </vue-typed-js>
          <p class="address d-none d-sm-block">
            <img :src="home" alt="logo-home" />
            Klampok Karangasem Sendangtirto, Berbah, Sleman, DIY
          </p>
          <p class="address d-block d-sm-none">
            <img :src="homeMobile" alt="logo-home" />
            Klampok Karangasem Sendangtirto, Berbah, Sleman, DIY
          </p>
          <h3 class="d-none d-sm-block">
            <img :src="dollar" alt="logo-dollar" />Rp.450.000 / night
          </h3>
          <h3 class="d-block d-sm-none">
            <img :src="dollarMobile" alt="logo-dollar" />Rp.450.000 / night
          </h3>
          <router-link to="/facilities" class="check btn btn-success"
            >Check for detail
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- Photo Attribution -->
  <!-- <a href="https://www.freepik.com/photos/background">Background photo created by freepik - www.freepik.com</a> -->
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import Vue from "vue";
import VueTypedJs from "vue-typed-js";
Vue.use(VueTypedJs);

export default {
  name: "Hero",
  data() {
    return {
      home: "img/icon/home.svg",
      homeMobile: "img/icon/home-mobile.svg",
      dollar: "img/icon/dollar-sign.svg",
      dollarMobile: "img/icon/dollar-sign-mobile.svg",
    };
  },
};
</script>

<style lang="sass" scoped>
@import "../styles/general"
.container
  @media (max-width: map-get($grid-breakpoints, sm) )
    padding: 0
  @media (max-width: map-get($grid-breakpoints, md) )
    padding: 0
    margin: 0
.row
  @media (min-width: map-get($grid-breakpoints, xl) )
    margin-left: 20px
  @media (max-width: map-get($grid-breakpoints, md) )
    display: flex !important
    float: left !important
.hero
  background-image: url("../assets/hero2.webp")
  height: 100vh
  background-repeat: no-repeat
  background-size: cover
  @media (max-width: map-get($grid-breakpoints, sm) )
    background-image: none
    background-color: $grey
  @media (max-width: map-get($grid-breakpoints, md) )
    background-image: none
    background-color: $grey
    height: 110vh
    width: 100vw
    padding: 0
    float: left
  .col
    @media (max-width: map-get($grid-breakpoints, sm) )
      margin-top: 20px
    .tittle
      font-weight: map-get($font-weight,bold )
      padding-right: 50px
      padding-top: 20px
      font-size: 80px
      // color: $oxford-blue
      line-height: 130%
      background-image: linear-gradient(#2193b0, #6dd5ed)
      -webkit-background-clip: text
      -webkit-text-fill-color: transparent
      @media (max-width: map-get($grid-breakpoints, md) )
        padding-left: 20px
        padding-top: 20px
        font-size: 50px
        color: $oxford-blue
        line-height: 130%
    .type
      @media (max-width: map-get($grid-breakpoints, md) )
        padding-left: 20px
    .address
      font-weight: map-get($font-weight,semi-bold )
      font-size: 15px
      color: $oxford-blue
      margin-bottom: 20px
      @media (max-width: map-get($grid-breakpoints, md) )
        margin-top: 20px
        padding-left: 20px
        padding-right: 20px
    h3
      margin-bottom: 20px
      color: $oxford-blue
      font-weight: map-get($font-weight,semi-bold )
      @media (max-width: map-get($grid-breakpoints, md) )
        padding-left: 20px
    .check
      border-radius: 20px
      @media (max-width: map-get($grid-breakpoints, sm) )
        margin-left: 20px
      @media (max-width: map-get($grid-breakpoints, md) )
        margin-left: 20px
</style>