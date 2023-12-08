<template>
  <div>
    <div
      :class="selected ? 'selected' : 'standard'"
      v-bind:track="track"
      @click="selectSongDjSearch(track)"
      class="track-row"
    >
      <img class="image" v-bind:src="`${track.image_url}`" />
      <div class="track">
        {{ track.name }} <br />
        by {{ track.artist }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    track: Object,
  },
  data() {
    return {
      emptyTrack: [],
    };
  },
  computed: {
    selected() {
      let isSelected = false;
      if (
        this.track.track_id == this.$store.state.djSearchSelectedTrack.song_id
      ) {
        isSelected = true;
      }
      return isSelected;
    },
  },
  methods: {
    selectSongDjSearch(track) {
      console.log("I'm here empty");
      if (this.selected) {
        this.$store.commit("SET_DJ_SEARCH_SELECTED_TRACK", this.emptyTrack);
      } else {
        console.log("I'm here not empty");
        this.isSelected = !this.isSelected;
        this.$store.commit("SET_DJ_SEARCH_SELECTED_TRACK", track);
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
  width: 90%;
  border-radius: 15px;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-areas: "image track";
  max-height: 64px;
  margin-left: 10px;
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

.standard {
  background: #fffded;
}
</style>