<template>
  <div>
    <div class="search-song-container">
      <div id="search-song-column">
        <h2 id="search-label">Suggest a song!</h2>

        <div class="search-container">
          <input
            name="search-name"
            id="search-name"
            type="text"
            v-on:keyup.enter="searchSongs"
            placeholder="Search here!"
            v-model="search"
          />
        </div>

        <div id="button" class="container">
          <button class="button" id="submit-song" @click="searchSongs">
            Search
          </button>
        </div>
        <br />
        <div id="search-results">
          <div class="container">
            <ul id="search-song-list">
              <song-item
                v-for="track in tracks"
                v-bind:track="track"
                :key="track.track_id"
              ></song-item>
            </ul>
          </div>
        </div>

        <div id="button" class="container">
          <button class="button" id="suggest-button" @click="suggestedSong()">
            Suggest
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PartyService from "@/services/PartyService";
import SongItem from "./SongItem.vue";

export default {
  components: { SongItem },
  props: {
    track: Object,
  },
  data() {
    return {
      search: "",
      tracks: [],
      partyId: this.$route.params.partyId,

      selectedTrack: {
        artist: "",
        image_url: "",
        song_name: "",
        song_id: "",
      },
    };
  },
  computed: {
    theSelectedTrackId() {
      return this.$store.state.djSearchSelectedTrack.song_id;
    },

  },
  methods: {
    searchSongs() {
      PartyService.searchSongs(this.search).then((resp) => {
        this.tracks = resp.data.tracks;
      });
    },

    suggestedSong() {
      PartyService.addSongToSuggested(
        this.partyId,
        this.$store.state.selectedTrack
      );
      this.tracks = [];
      this.search = ""
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

.search-song-container {
  min-height: 30vw;
}

#search-label {
    padding-top: 15px;

  padding-bottom: 15px;
}

.search-container {
  display: flex;
  align-content: center;
  justify-content: center;
}

ul li {
  margin-bottom: 5px;
  background: #fffded;
  border: 5px;
  border-color: #46277a;
}

#search-song-list {
  justify-content: center;
  align-content: center;
  width: 100%;
  list-style: none;
  margin-bottom: 18px;
}

.button {
  font-size: 16px;
  /* background-color: #f3ebb5 !important; */
}

.button:hover {
  background-color: #46277a !important;
  color: #fffded !important;
}

input {
  font-size: 20px;
  color: #f89d5b;
  font-family: "Pontano Sans", sans-serif;
  border: none;
  padding: 10px;
}

.selected {
  background-color: crimson;
}
</style>