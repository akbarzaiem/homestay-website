<template>
  <div class="Tour">
    <Navbar />
    <div class="container">
      <div class="container d-flex flex-column min-vh-100">
        <h2
          data-aos="zoom-in-down"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          Recommended tourist spots
        </h2>
        <div class="row">
          <div
            class="col col-xl-4 d-flex justify-content-center mb-5"
            v-for="item in items"
            :key="item.number"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <div class="card" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">{{ item.tittle }}</h5>
                <p class="card-text">{{ item.message }}</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item" v-if="item.instagram">
                  <a :href="item.instagram" target="_blank" class="card-link">
                    <img
                      src="img/icon/instagram.webp"
                      alt="map-icon"
                      height="24"
                    />
                    Instagram
                  </a>
                </li>
                <li class="list-group-item">
                  <a :href="item.map" target="_blank" class="card-link">
                    <img src="img/icon/map.webp" alt="map-icon" height="24" />
                    Maps
                  </a>
                </li>
              </ul>
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
  data() {
    return {
      items: [
        {
          number: 1,
          tittle: "Heha Sky View",
          message:
            "Salah satu destinasi wisata favorit yang menawarkan pemandangan terbaik kota Yogyakarta dan sekitarnya “dari lantai 2”. Terletak di kawasan perbukitan Gunung Kidul.",
          instagram: "https://www.instagram.com/hehaskyview/",
          map: "https://g.page/hehaskyview?share",
        },
        {
          number: 2,
          tittle: "Malioboro",
          message:
            "Belum lengkap rasanya bila ke Jogja tanpa ke Malioboro. Suatu destinasi yang terletak di jantung kota Yogyakarta dengan ciri khas pedestriannya. ",
          map: "https://g.page/malioboro-jogja?share",
        },
        {
          number: 3,
          tittle: "Tamansari",
          message:
            "Sebuah situs bekas taman atau kebun istana Keraton Ngayogyakarta Hadiningrat.",
          instagram: "https://www.instagram.com/wisata_tamansari_yogyakarta/",
          map: "https://goo.gl/maps/ARhGvpfTNwHydrk46",
        },
        {
          number: 4,
          tittle: "Warung Kopi Klotok",
          message:
            "Tempat makan dengan nuansa zaman dulu dikelilingi persawahan dan dekat gunung merapi. Menu makanan berupa lodeh tempe lombok ijo, lodeh terong, tahu bacem, tempe garit, dan lain sebagainya. ",
          instagram: "https://www.instagram.com/kopiklotok/",
          map: "https://goo.gl/maps/N4z1kUw84EyZe7cK7",
        },
        {
          number: 5,
          tittle: "Hutan Pinus Mangunan",
          message:
            "Nuansa sejuk dari banyaknya pohon pinus serta terdapat panggung pertunjukan, terletak di Dlingo Bantul.",
          map: "https://goo.gl/maps/gBzMm8XVWFmECgf47",
        },
        {
          number: 6,
          tittle: "Pantai Parangtritis",
          message:
            "Salah satu pantai ikonik Yogyakarta, yang terletak di wilayah Bantul.",
          map: "https://goo.gl/maps/4qJuV4k7bC9LfLrK9",
        },
        {
          number: 7,
          tittle: "Candi Prambanan",
          message:
            "Kompleks candi hindu terbesar di Indonesia dibangun sekitar abad ke-9 dengan struktur batu atas meruncing & patung.",
          map: "https://goo.gl/maps/8A5rpT8Pi9ZidHSh8",
        },
      ],
    };
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
.card-title
  text-align: center
.card-text
  text-align: justify
</style>

// <div>Icons made by <a href="https://www.flaticon.com/authors/riajulislam" title="riajulislam">riajulislam</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>