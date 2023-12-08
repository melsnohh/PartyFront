<template>
  <div>
    <div
      :class="selected ? 'selected' : 'standard'"
      v-bind:song="song"
      @click="selectSongToVote(song)"
      class="track-row"
    >
      <img class="image" v-bind:src="`${song.image_url}`" />
      <div class="track">
        {{ song.song_name }} <br />
        by {{ song.artist }}
      </div>
      <div class="vote">{{ song.vote }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emptyTrack: {},
    };
  },
  props: {
    song: Object,
  },
  computed: {
    selected() {
      let isSelected = false;
      if (
        this.song.song_id == this.$store.state.guestSelectedSongForVote.song_id
      ) {
        isSelected = true;
      }
      return isSelected;
    },
  },
  methods: {
    selectSongToVote(song) {
      console.log("I'm here");
      if (this.selected) {
        this.isSelected = !this.isSelected;
        this.$store.commit(
          "SET_SUGGESTED_SELECTED_SONG_FOR_VOTE",
          this.emptyTrack
        );
      } else {
        // this.isSelected = !this.isSelected;
        this.$store.commit("SET_SUGGESTED_SELECTED_SONG_FOR_VOTE", song);
      }
    },
  },
};
</script>

<style scoped>
.track-row {
  margin-bottom: 5px;
  background: #fffded;
  border: 5px;
  border-color: #46277a;
  width: 100%;
  border-radius: 15px;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 4.5fr 0.5fr;
  grid-template-areas: "image track vote";
  max-height: 64px;
}
.selected {
  background: #f89d5b;
}

.image {
  grid-area: image;
}

.track {
  grid-area: track;
  text-align: left;
  margin-top: auto;
  margin-bottom: auto;
    font-size: 14px;
  font-family: "Pontano Sans", sans-serif;
  color: #46277a;
}

.vote {
  grid-area: vote;
  margin-top: auto;
  margin-bottom: auto;
}

.standard {
  background: #fffded;
}
</style>