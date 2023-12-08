<template>
  <div>
    <div class="grid-box">
      <div class="container">
        <h2 id="title">Suggested Songs</h2>
      </div>
      <div class="container">
        <ul id="suggested-song-list">
          <suggested-song-item
            v-for="song in suggestedSongs"
            v-bind:song="song"
            :key="song.song_id"
          ></suggested-song-item>
        </ul>
      </div>
      <div class="container">
        <button class="select-song button" @click="upVoteSong()">
          Upvote!
        </button>
        <button class="select-song button" @click="downVoteSong()">
          Downvote...
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PartyService from "@/services/PartyService";
import suggestedSongItem from "./SuggestedSongItem.vue";

export default {
  name: "suggestedSongList",
  components: {suggestedSongItem },
  mounted() {
    this.getSuggestedSongs();
  },
  data() {
    return {
      suggestedSongs: [],
      partyId: this.$route.params.partyId,
    };
  },
  methods: {
    getSuggestedSongs() {
      PartyService.getSuggestedSong(this.partyId).then((response) => {
        this.suggestedSongs = response.data;
      });
      setTimeout(this.getSuggestedSongs, 1000);
    },
    upVoteSong() {
      let songId = this.$store.state.guestSelectedSongForVote.song_id;
      PartyService.upVoteSong(this.partyId, songId);
    },
    downVoteSong() {
      let songId = this.$store.state.guestSelectedSongForVote.song_id;
      PartyService.downVoteSong(this.partyId, songId);
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

#title {
  padding-top: 15px;
  padding-bottom: 15px;
}

.select-song {
  width: 20%;
  height: auto;
  text-align: center;
  text-justify: center;
}

.button {
  font-size: 16px;
  /* background-color: #f3ebb5 !important; */
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
  font-size: 32px;
  font-family: "Pontano Sans", sans-serif;
  border: none;
  cursor: pointer;
  background-color: #f89d5b;
  border-radius: 12px;
  color: #fffded;
}
</style>