<template>
  <div>
    <div class="title-container">
      <h2 id="title">Playlist</h2>
    </div>
    <div class="container">
      <ul id="suggested-song-list">
        <song-item
          v-for="track in playlistTracks.tracks"
          v-bind:track="track"
          :key="track.track_id"
        >
        </song-item>
      </ul>
    </div>
  </div>
</template>

<script>
import PartyService from "@/services/PartyService";
import SongItem from "./SongItem.vue";
export default {
  components: { SongItem },
  data() {
    return {
      partyId: this.$route.params.partyId,
      playlistTracks: [],
    };
  },
  mounted() {
    this.getPlaylistTracks();
  },
  name: "playList",

  methods: {
    getPlaylistTracks() {
      PartyService.getPlaylistTracks(this.partyId).then((response) => {
        this.playlistTracks = response.data;
      });
      setTimeout(this.getPlaylistTracks, 3000);
    },
  },
};
</script>

<style scoped>
.title-container {
  display: flex;
  align-content: center;
  justify-content: center;
}

.container {
  display: flex;
  align-content: center;
  /* justify-content: center; */
}

#title {
  padding-top: 15px;

  padding-bottom: 15px;
}

.grid-box {
  display: grid;
  grid-template-rows:
    0.25fr
    1fr;
  grid-template-areas:
    "title"
    "list-select";
}

#suggested-song-list {
  justify-content: center;
  align-content: center;
  width: 100%;
  list-style: none;
  margin-bottom: 18px;
}

#select-song {
  width: 34%;
}

ul li {
  margin-bottom: 5px;
  background: #fffded;
  border: 5px;
  border-color: #46277a;
}

button {
  justify-content: center;
  font-size: 32px;
  font-family: "Pontano Sans", sans-serif;
  border: none;
  cursor: pointer;
  background-color: #f89d5b;
  border-radius: 12px;
  color: #fffded;
}
</style>