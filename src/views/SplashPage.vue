<template>
  <div class="splash">
    <!-- <img class="main-logo" alt="Aux Box logo" src="../assets/auxbox-logo-1.png"> -->
    <spotify-auth />
  </div>
</template>

<script>
// @ is an alias to /src
import SpotifyAuth from '../components/SpotifyAuth.vue'

export default {
  name: 'SplashPage',
  components: {
    SpotifyAuth
  }
}
</script>

<style>
.main-logo {
  width: 200px;
}

.splash{
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  

}
</style>
