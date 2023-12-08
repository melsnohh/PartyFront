<template>

    <header>
      <div class="logo">
      <router-link to="/landing"><img :src="'/assets/auxbox-logo-3.png'" id = "logo">
      </router-link>
      </div>

      <div class="slogan">
        <!-- <h1> <q> You Can't Have An Event Without A Playlist </q> </h1> -->
      </div>
     <div class="nav">
        <router-link to="/landing">Home</router-link>
       <router-link to="/about">About Us</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/login">DJ Login</router-link>
     </div>
    </header>

  
</template>

<script>


export default {
      name: "myHeader",
}

</script>

<style scoped>

.fa-hand-pointer{
  height: 20px;
}

header {
  height: 150px;
}



  .slogan{
    display: flex;
    align-items: center;
    font-size: 22px;

  } 



</style>