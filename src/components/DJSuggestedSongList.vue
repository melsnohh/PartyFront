<template>
  <div>
    <div class="grid-box">
      <div class="container">
        <h2 id="title">Suggested Songs</h2>
      </div>
      <div class="container">
        <ul id="suggested-song-list">
          <song-item-dj-suggested
            v-for="track in suggestedTracks"
            v-bind:track="track"
            :key="track.track_id"
          ></song-item-dj-suggested>
        </ul>
      </div>
      <div class="container">
        <button class="select-song button" @click="addSelectedToPlaylist()">Add to Playlist</button>
        <button class="select-song button" @click="deleteFromSuggested()">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import PartyService from "@/services/PartyService";
import SongItemDjSuggested from "./SongItemDjSuggested.vue";

export default {
  name: "DjSuggestedSongList",
  components: { SongItemDjSuggested },
  mounted() {
    this.getSuggestedSongs();
  },
  data() {
    return {
      suggestedTracks: [],
      partyId: this.$route.params.partyId,
    };
  },
  methods: {
    getSuggestedSongs() {
      PartyService.getSuggestedSong(this.partyId).then((response) => {
        this.suggestedTracks = response.data;
      });
      setTimeout(this.getSuggestedSongs, 1000);
    },
    addSelectedToPlaylist() {
      let songId = this.$store.state.djSuggestedSelectedTrack.song_id;
      PartyService.addSongToPlaylist(this.partyId, songId);
    },
    deleteFromSuggested() {
      let message =
        "Why this song? " +
        this.$store.state.djSuggestedSelectedTrack.artist +
        " will feel sad :(";
      this.$confirm(message, "WARNING", "warning").then(() => {
        let songId = this.$store.state.djSuggestedSelectedTrack.song_id;
        PartyService.deleteSongFromSuggestedList(this.partyId, songId);
      });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-content: center;
  justify-content: center;
}

#title {
    padding-top: 15px;
  padding-bottom: 15px;;
}

.grid-box {
  display: grid;
  grid-template-rows:
    0.25fr
    1fr;
  /* 0.5fr; */
  grid-template-areas:
    "title"
    "list-select";
  /* "select-song"; */
}

#suggested-song-list {
  justify-content: center;
  align-content: center;
  width: 90%;
  list-style: none;
  margin-bottom: 18px;
}

.select-song {
  width: 34%;
  height: auto;
  text-align: center;
  text-justify: center;
}

.button {
  font-size: 16px;
  margin-right: 5px;

  /* background-color: #f3ebb5 !important; */
}

.button:hover {
  background-color: #46277a !important;
  color: #fffded !important;
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