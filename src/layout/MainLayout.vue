<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
        <router-view/>
    </div> 
</template>

<script>
import TheNavbar from '../components/TheNavbar.vue'
export default {
  components: { TheNavbar },

}
</script>

<style scoped>
  the-navbar{
    height: 5vh;
  }
  .container router-view{
    height: 90vh;
  }
</style>