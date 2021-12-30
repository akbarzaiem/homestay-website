<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <router-link class="navbar-brand tittle" to="/home"
          >Homestay Berbah Syariah Jogja</router-link
        >
        <button
          class="navbar-toggler d-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon d-none"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0 nav">
            <li class="nav-item">
              <router-link to="/facilities" class="nav-link"
                >Facility</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/tour" class="nav-link"
                >Nearest Tour</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="sass" scoped>
@import "../styles/general"
.tittle
  font-size: 18px
  font-weight: map-get($font-weight, medium )
  background-image: linear-gradient(#360033, #0b8793)
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent
a.router-link-active
  border-bottom: 5px solid $green-young
</style>