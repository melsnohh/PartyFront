<template>
  <div>
    <div
      :class="selected ? 'selected' : 'standard'"
      v-bind:track="track"
      @dblclick="playSelectedSongFromPlaylist"
      @click="selectSongPlaylistTrack(track)"
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
import PartyService from '@/services/PartyService';
export default {
  props: {
    track: Object,
  },
  data() {
    return {
      partyId: this.$route.params.partyId,
      emptyTrack: [],
    };
  },
  computed: {
    songId() {
      return this.$store.state.djPlaylistSelectedTrack.song_id;
    },
    selected() {
      let isSelected = false;
      if (
        this.track.track_id == this.$store.state.djPlaylistSelectedTrack.song_id
      ) {
        isSelected = true;
      }
      return isSelected;
    },
  },
  methods: {
    selectSongPlaylistTrack(track) {
      // console.log("I'm here");
      if (this.selected) {
        this.$store.commit("SET_DJ_PLAYLIST_SELECTED_TRACK", this.emptyTrack);
      } else {
        this.isSelected = !this.isSelected;
        this.$store.commit("SET_DJ_PLAYLIST_SELECTED_TRACK", track);
      }
    },
    playSelectedSongFromPlaylist() {
      PartyService.playSelectedSong(this.partyId, this.songId).then(() => {
        PartyService.getCurrentlyPlaying().then((response) => {
          this.$store.commit("SET_CURRENT_PLAYING_SONG", response.data);
        });
      });
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