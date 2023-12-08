<template>
  <div class="playlist-container">
    <div class="title-container">
      <h2 id="title">Playlist</h2>
    </div>
    <div class="container">
      <ul id="suggested-song-list">
        <SongItemDJPlaylist
          v-for="track in playlistTracks.tracks"
          v-bind:track="track"
          :key="track.track_id"
        >
        </SongItemDJPlaylist>
      </ul>
    </div>
    <div id="button" class="title-container">
      <button
        class="button"
        id="suggest-button"
        @click="deleteSelectedSongFromPlaylist"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import PartyService from "../services/PartyService";
import SongItemDJPlaylist from "./SongItemDJPlaylist.vue";
export default {
  components: { SongItemDJPlaylist },
  data() {
    return {
      partyId: this.$route.params.partyId,
      playlistTracks: [],
    };
  },
  mounted() {
    console.log("party playlist")
    this.getPlaylistTracks();
  },
  name: "playlistDJ",
  computed: {
    songId() {
      return this.$store.state.djPlaylistSelectedTrack.song_id;
    },
  },
  methods: {
    getPlaylistTracks() {
      PartyService.getPlaylistTracks(this.partyId).then((response) => {
        this.playlistTracks = response.data;
        console.log(response.data)
      });
      setTimeout(this.getPlaylistTracks, 1000);
    },
    deleteSelectedSongFromPlaylist() {
      let message =
        "Why this song? " +
        this.$store.state.djPlaylistSelectedTrack.artist +
        " will feel sad :(";
      this.$confirm(message, "WARNING", "warning").then(() => {
        PartyService.deleteSongFromPlaylist(this.partyId, this.songId);
      });
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

.playlist-container {
  padding-bottom: 20px;
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
  /* 0.5fr; */
  grid-template-areas:
    "title"
    "list-select";
  /* "select-song"; */
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

.button:hover {
  background-color: #46277a !important;
  color: #fffded !important;
}

button {
  justify-content: center;
  font-size: 16px;
  font-family: "Pontano Sans", sans-serif;
  border: none;
  cursor: pointer;
  background-color: #f89d5b;
  border-radius: 12px;
  color: #fffded;
}
</style>