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
        {{ track.name }} <br />
        by {{ track.artist }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      emptyTrack: []
    }
  },
  props: {
    track: Object,
  },
  computed: {
    selected() {
      let isSelected = false;
      if (this.track.track_id == this.$store.state.selectedTrack.song_id) {
        isSelected = true;
      }
      return isSelected;
    },
  },
  methods: {
    selectSong(track) {
      // console.log("I'm here");
            if (this.selected) {
        this.$store.commit("SET_SELECTED_TRACK", this.emptyTrack);
      } else {
      this.isSelected = !this.isSelected;
      this.$store.commit("SET_SELECTED_TRACK", track);
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