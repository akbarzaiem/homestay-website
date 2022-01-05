<template>
  <nav
    class="navbar navbar-expand-lg fixed-bottom"
    style="background-color: #505050"
  >
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap"
      rel="stylesheet"
    />
    <div class="navbar-brand">
      <div class="row">
        <div class="col-4 col-sm-4 d-flex justify-content-center">
          <router-link to="/facilities" class="routerlink a"
            ><img :src="bed" alt="icon3" class="icon"
          /></router-link>
        </div>
        <div class="col-4 col-sm-4 d-flex justify-content-center">
          <router-link to="/tour" class="routerlink b"
            ><img :src="sunset" alt="icon3" class="icon"
          /></router-link>
        </div>
        <div class="col-4 col-sm-4 d-flex justify-content-center">
          <router-link to="/contact" class="routerlink c"
            ><img :src="phone" alt="icon3" class="icon"
          /></router-link>
        </div>
        <!-- <div class="w-100"></div>
        <div class="col-4 col-sm-4 text d-flex justify-content-center">
          <router-link to="/facilities" class="routerlink"
            >Facility</router-link
          >
        </div>
        <div class="col-4 col-sm-4 text d-flex justify-content-center">
          <router-link to="/tour" class="routerlink">Nearest Tour</router-link>
        </div>
        <div class="col-4 col-sm-4 text d-flex justify-content-center">
          <router-link to="/contact" class="routerlink">Contact</router-link>
        </div> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarMobile",
  data() {
    return {
      bed: "img/icon/navbar-mobile/bed.png",
      sunset: "img/icon/navbar-mobile/sunset.png",
      phone: "img/icon/navbar-mobile/phone-call.png",
    };
  },
};
</script>

<style lang="sass" scoped>
@import "../styles/general"
.navbar
  background-color: $green-cool !important
  border-radius: 25px 25px 0 0
  @media (max-width: map-get($grid-breakpoints, sm) )
    display: block
  @media (max-width: map-get($grid-breakpoints, md) )
    display: block
  @media (min-width: map-get($grid-breakpoints, lg) )
    display: none

.navbar-brand
  margin-right: 0
  width: 100%

.routerlink.a.router-link-active
  .icon
    content: url('/img/icon/navbar-mobile/bed-active.png')
    height: 30px
    margin-bottom: -15px
    margin-top: -18px

.routerlink.b.router-link-active
  .icon
    content: url('/img/icon/navbar-mobile/sunset-active.png')
    height: 30px
    margin-bottom: -15px
    margin-top: -18px

.routerlink.c.router-link-active
  .icon
    content: url('/img/icon/navbar-mobile/phone-call-active.png')
    height: 30px
    margin-bottom: -15px
    margin-top: -18px

.text
  font-size: 13px

.routerlink
  font-weight: 700
  color: $white
  text-decoration: none
  &:hover
    color: $black

.icon
  height: 30px
  margin-bottom: -15px
  margin-top: -18px

  &:hover
    opacity: 0.7
</style>

// attribution icon
// <div>Icons made by <a href="https://www.flaticon.com/authors/ilham-fitrotul-hayat" title="Ilham Fitrotul Hayat">Ilham Fitrotul Hayat</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// <div>Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>