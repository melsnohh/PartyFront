<template>
  <!-- <div class="hello">
    <h1 v-if="!isloading">Loading...</h1>
  </div> -->
  <div class="gif-flex">
    <gif />
  </div>
</template>

<script>
import Gif from './GifName.vue';

export default {
  name: "spotify-auth",
  components: { Gif },


  data() {
    return {
      isLoading: false,
    };
  },

  methods: {},

  created() {
    setInterval(() => {
      window.location = `https://accounts.spotify.com/authorize?client_id=${process.env.VUE_APP_CLIENT_ID}&client_secret=${process.env.VUE_APP_CLIENT_SECRET}&response_type=code&redirect_uri=http://52.205.180.163:9000/receive-token&scope=user-read-private,playlist-modify-public,playlist-modify-private,user-read-playback-state,user-modify-playback-state,user-read-currently-playing&show_dialog=false&state=state`;
      this.isLoading = true;
    }, 4000);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello button {
  font-size: 50px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.gif-flex {
  /* width: 100vh;
  width: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; */
  justify-self: center;
  /* width: 100%; */
  /* display: flex; */
  /* justify-content: center; */
  /* flex-grow: 1; */
}

</style>
