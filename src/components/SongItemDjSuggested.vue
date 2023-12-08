<template>
  <div>
    <div
      :class="selected ? 'selected' : 'standard'"
      v-bind:track="track"
      @click="selectSong(track)"
      class="track-row"
    >
      <img class="image" v-bind:src="`${track.image_url}`" />
      <div class="track">
        {{ track.song_name }} <br />
        by {{ track.artist }}
      </div>
      <div class="vote">{{ track.vote }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emptyTrack: [],
    };
  },
  props: {
    track: Object,
  },
  computed: {
    selected() {
      let isSelected = false;
      if (
        this.track.song_id == this.$store.state.djSuggestedSelectedTrack.song_id
      ) {
        isSelected = true;
      }
      return isSelected;
    },
  },
  methods: {
    selectSong(track) {
      console.log("I'm here");
      if (this.selected) {
        this.$store.commit("SET_DJ_SUGGESTED_SELECTED_TRACK", this.emptyTrack);
      } else {
        this.isSelected = !this.isSelected;
        this.$store.commit("SET_DJ_SUGGESTED_SELECTED_TRACK", track);
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