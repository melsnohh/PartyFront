<template>
  <body>
    <div class="player-controls">
      <img
        :src="'/assets/previoussong-button.png'"
        id="previous-song"
        alt="previous-song"
        style="width: 100%"
        @click="previousSong"
      />
      <img
        :src="'/assets/play-button.png'"
        id="play-song"
        alt="play-song"
        style="width: 100%"
        @click="resumePlay"
      />
      <img
        :src="'/assets/pause-button.png'"
        id="pause-song"
        alt="pause-song"
        style="width: 100%"
        @click="pause"
      />
      <img
        :src="'/assets/nextsong-button.png'"
        id="next-song"
        alt="next-song"
        style="width: 100%"
        @click="nextSong"
      />
    </div>
  </body>
</template>

<script>
import PartyService from '@/services/PartyService';
export default {
  name: "musicPlayer",
  methods: {
    previousSong() {
      PartyService.previousSong().then(() => {
        PartyService.getCurrentlyPlaying().then((response) => {
          this.$store.commit("SET_CURRENT_PLAYING_SONG", response.data);
        });
      });
    },
    resumePlay() {
      PartyService.resumePlay().then(() => {
        PartyService.getCurrentlyPlaying().then((response) => {
          this.$store.commit("SET_CURRENT_PLAYING_SONG", response.data);
        });
      })
    },
    pause() {
      PartyService.pause().then(() => {
        PartyService.getCurrentlyPlaying().then((response) => {
          this.$store.commit("SET_CURRENT_PLAYING_SONG", response.data);
        });
      });
    },
    nextSong() {
      PartyService.nextSong().then(() => {
        PartyService.getCurrentlyPlaying().then((response) => {
          this.$store.commit("SET_CURRENT_PLAYING_SONG", response.data);
        });
      });
    },
  },
};
</script>

<style scoped>
body {
  /* display: flex; */
  justify-content: space-evenly;
  align-content: center;
  width: 100%;
}
.player-controls {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  background-color: #786fc1;
}
img:active {
  background-color: #f89d5b;
  box-shadow: 0 5px #46277a;
  transform: translateY(4px);
}

img:hover {
  cursor: pointer;
  background-color: #fffded;
}
img {
  max-height: 100px;
  max-width: 100px;
  padding: 5px;
  border-radius: 25px;
}
</style>