<template>
  <div>
    <div 
    :class="selected ? 'selected' : 'standard'"
    v-bind:track="track" 
    @click="selectSong(track)" 
    class="track-row">
      <img v-bind:src="`${track.image_url}`" />
      {{ track.name }} by {{ track.artist }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
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
        console.log("I'm here")
              if (this.selected) {
        this.$store.commit("SET_SELECTED_TRACK", this.emptyTrack);
      } else {
      this.$store.commit("SET_SELECTED_TRACK", track)
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
  width: 95%;
  border-radius: 15px;
}

.selected {
  background: #f89d5b;
}

.standard {
  background: #fffded;
}

</style>