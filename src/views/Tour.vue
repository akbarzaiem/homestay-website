<template>
  <div class="Tour">
    <Navbar />
    <div class="container">
      <h2
        data-aos="zoom-in-down"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
      >
        Recommended tourist spots
      </h2>
      <div class="row">
        <div
          class="col d-flex justify-content-center"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <div class="card" style="width: 18rem">
            <img src="../assets/hero.jpg" class="card-img-top" alt="image" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <a href="#" class="card-link">Card link</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="col d-flex justify-content-center"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <div class="card" style="width: 18rem">
            <img src="../assets/hero.jpg" class="card-img-top" alt="image" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <a href="#" class="card-link">Card link</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="col d-flex justify-content-center"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <div class="card" style="width: 18rem">
            <img src="../assets/hero.jpg" class="card-img-top" alt="image" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <a href="#" class="card-link">Card link</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col d-flex justify-content-center"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <div class="card" style="width: 18rem">
            <img src="../assets/hero.jpg" class="card-img-top" alt="image" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <a href="#" class="card-link">Card link</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="col d-flex justify-content-center"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <div class="card" style="width: 18rem">
            <img src="../assets/hero.jpg" class="card-img-top" alt="image" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <a href="#" class="card-link">Card link</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="col d-flex justify-content-center"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <div class="card" style="width: 18rem">
            <img src="../assets/hero.jpg" class="card-img-top" alt="image" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <a href="#" class="card-link">Card link</a>
              </li>
            </ul>
          </div>
        </div>
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
  name: "Tour",
  components: {
    Navbar,
    Footer,
    NavbarMobile,
  },
};
</script>
<style lang="sass" scoped>
@import "../styles/general"
h2
  margin-top: 30px
  margin-left: 30px
.row
  margin-top: 30px
  margin-bottom: 30px
  .col
    @media (max-width: map-get($grid-breakpoints, sm) )
      margin-bottom: 30px
</style>