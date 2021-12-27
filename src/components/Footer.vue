<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-12">Make with ❤️ by Akbar Zaiem</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="sass" scoped>
@import "../styles/general"
footer
  background-color: $dark
  margin-top: auto
  padding-bottom: 20px
  padding-top: 20px
  text-align: center
  font-size: 14px
  color: $white
  @media (max-width: map-get($grid-breakpoints, lg) )
    padding-bottom: 80px !important
</style>