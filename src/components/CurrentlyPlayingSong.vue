<template>
  <div class="currently-playing">
    <h3 id="active" v-show="currentlyPlaying.is_playing">
      <div id="cp-text">Currently<br />Playing:</div>
      <img id="image" v-bind:src="`${currentlyPlaying.image_url}`" />
      <div id="track-info">
        {{ currentlyPlaying.name }} <br />
        by {{ currentlyPlaying.artist }}
      </div>
    </h3>
    <h3 v-show="!currentlyPlaying.is_playing" id="paused">Party paused...</h3>
  </div>
</template>

<script>
import PartyService from "@/services/PartyService";
import { mapState } from "vuex";

export default {
  name: "currentlyPlayingSong",
  data() {
    return {};
  },

  computed: mapState({ currentlyPlaying: "currentlyPlaying" }),

  methods: {
    getCurrentlyPlaying() {
      PartyService.getCurrentlyPlaying().then((response) => {
        // console.log("hi");
        this.$store.commit("SET_CURRENT_PLAYING_SONG", response.data);
      });
      setTimeout(this.getCurrentlyPlaying, 5000);
    },
  },
  mounted() {
    this.getCurrentlyPlaying();
  },
};
</script>

<style scoped>
.currently-playing {
  background-color: #786fc1;
  text-align: center;
  height: 64px;
}

h3 {
  font-size: 20px;
  color: #fffded;
}

#paused {
  padding-top: 20px;
}

#active {
  display: grid;
  grid-template-columns: 0.5fr 0.1fr 2fr;
  grid-template-areas: "cp-text image track-info";
}

#cp-text {
  grid-area: cp-text;
  font-size: 18px;
  text-align: left;
  margin: auto 5px auto 0px;
}

#image {
  grid-area: image;
  align-content: center;
  margin: auto;
  max-width: 64px;
}

#track-info {
  grid-area: track-info;
  text-align: left;
  margin: auto auto auto 5px;
  font-size: 12px;
}
</style>