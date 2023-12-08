<template>
  <div class="party-page">
    <MyDJHeader> </MyDJHeader>
    <body id="main-flex">
      <div class="flex-column" id="search-song-column">
        <div id="block-one">
          <div id="headphones" class="info-container">
            <i class="fa-solid fa-headphones"></i>
          </div>
          <div id="currently-playing" class="info-container">
            <currently-playing-song />
          </div>
        </div>
        <search-song-dj />
      </div>
      <div class="flex-column" id="suggested-song-list">
        <div id="block-two">
          <div id="party-info" class="party-info">
            <h1 id="party-name">{{ party.party_name }}</h1>
            <h2 id="party-description">{{ party.description }}</h2>
          </div>
          <div id="party-sub-info" class="info-container">
            <h3 id="party-passcode" v-if="party.passcode">
              Passcode: {{ party.passcode }}
            </h3>
            <h3 id="party-public" v-else>Public Party!</h3>
          </div>
        </div>
        <dj-suggested-song-list />
      </div>
      <div class="flex-column" id="playlist">
        <div id="block-three">
          <div id="location-date-time" class="info-container">
            <h3 id="location">Location: {{ party.city }}</h3>
            <h3 id="date">Start Date: {{ formatDate }}</h3>
            <h3 id="time">Start Time: {{ formattedTime}}</h3>
          </div>
          <div id="delete-button" class="info-container">
            <button class="button" @click="deleteParty">Delete Party</button>
          </div>
        </div>
        <playlistDJ />
      </div>
    </body>

    <music-player />
    <my-footer />
  </div>
</template>

<script>
import DjSuggestedSongList from "../components/DJSuggestedSongList.vue";
import playlistDJ from "../components/PlaylistDJ.vue";
import MyFooter from "../components/MyFooter.vue";
import SearchSongDj from "../components/SearchSongDJ.vue";
import partyService from "../services/PartyService";
import MusicPlayer from "../components/MusicPlayer.vue";
import currentlyPlayingSong from "../components/CurrentlyPlayingSong.vue";
import MyDJHeader from "../components/MyDJHeader.vue";
import dayjs from 'dayjs';



export default {
  components: {
    DjSuggestedSongList,
    SearchSongDj,
    playlistDJ,
    MyFooter,
    MusicPlayer,
    currentlyPlayingSong,
    MyDJHeader,
  },
  name: "DJPartyPage",
  data() {
    return {
      partyId: this.$route.params.partyId,
      party: {
        party_name: "",
        description: "",
        passcode: "",
        city: "",
        start_date: "",
        start_time: "",
      },
    };
  },

  mounted() {
    partyService.getParty(this.partyId).then((resp) => {
      if (resp.status == 200) {
        this.party.party_name = resp.data.party_name;
        this.party.description = resp.data.description;
        this.party.passcode = resp.data.passcode;
        this.party.city = resp.data.city;
        this.party.start_date = resp.data.start_date;
        this.party.start_time = resp.data.start_time;
      }
    });
  },
  computed: {
  formatDate() {
            const date = dayjs(this.party.start_date);
                // Then specify how you want your dates to be formatted
            return date.format('dddd MMMM D, YYYY');
        },
   formattedTime() {
          const [hours, minutes, seconds] = this.party.start_time.split(":");
          const time = new Date();
          time.setHours(hours);
          time.setMinutes(minutes);
          time.setSeconds(seconds);

          const ampm = time.getHours() >= 12 ? "PM" : "AM";
          let hours12 = time.getHours() % 12;
          hours12 = hours12 ? hours12 : 12; // convert 0 to 12
          return `${hours12}:${minutes} ${ampm}`;
   }
   },
  methods: {
    deleteParty() {
      let message =
        "Are you sure you're done partying?"
      this.$confirm(message, "WARNING", "warning").then(() => {
        this.$router.push({ name: 'landing' });
        partyService.deleteParty(this.partyId);
      });
    },
  },
};
</script>

<style scoped>
p {
  text-align: center;
  padding: 15px;
  margin: 0;
}
.fa-headphones {
  color: #fffded;
  font-size: 64px;
}
.party-info {
  background-color: #46277a;
  height: auto;
}

/* #party-name {
  padding-top: 20px;
} */

/* .flex-column {
  padding-top: 20px;
  padding-bottom: 30px;
} */


#block-one, #block-two, #block-three{
  min-height: 180px;
  
}

#main-flex {
  display: flex;
  height: 100%;
}

#search-label {
  text-align: center;
}

#search-songs {
  align-content: center;
  width: 100%;
}

/* .container {
  display: flex;
  align-content: center;
  justify-content: center;
} */

#party-name {
  padding-top: 20px;
  text-align: center;
}

#party-passcode {
  font-size: 20px;
  color: #fffded;
  margin: 0;
}

#party-public {
  font-size: 20px;
  margin: 0;
}

#submit-song {
  align-content: center;
  justify-content: center;
  max-height: 25px;
  max-width: 100%;
}

#search-song-column {
  flex-grow: 1;
  border-right: 2px;
  width: 30%;
}

#suggested-song-list {
  flex-grow: 1;
  width: 30%;
  border-left: 3px solid #786fc1;
  border-right: 3px solid #786fc1;
}

#playlist {
  flex-grow: 1;
  width: 30%;
}

#submit-button {
  height: 100px;
}

#submit-song {
  display: flex;
  text-align: center;
  justify-content: center;
  align-content: center;
  font-size: 32px;
  font-family: "Pontano Sans", sans-serif;
  border: none;
  height: 100%;
  cursor: pointer;
  background-color: #f89d5b;
  border-radius: 12px;
  color: #fffded;
}

.footer {
  background-color: #46277a;
}

/* .info-container {
  display: flex;
  justify-content: center;
  align-content: center;
} */

#headphones {
    /* padding-top: 20px; */
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: headphones;
  /* height: 62%; */
  margin-bottom: 10px;
  
}


#location-date-time {
  grid-area: location-date-time;
  height: 62%;
}

#location {
  padding-top: 20px;
}

#location,
#date,
#time,
.currently-playing {
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 18px;
}

#party-name {
  grid-area: party-name;
  display: flex;
  justify-content: center;
}

#party-info {
  height: 62%;
}

#party-description {
  grid-area: party-description;
  display: flex;
  justify-content: center;
  font-size: 16px;
}

#currently-playing {
  grid-area: currently-playing;
  height: 64px;
}

#party-sub-info {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: party-sub-info;
  background-color: #786fc1;
  height: 64px;
}

#delete-button {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: delete-button;
  background-color: #786fc1;
  height: 64px;
  padding-bottom: 5px;
}

.button {
  font-size: 16px;
  /* padding: 10px;
  margin: 0px; */
  
}



#main-info-grid {
  display: grid;
  grid-template:
    1fr 1fr 1fr
    1fr 1fr 1fr
    1fr 1fr 1fr;
  grid-template-areas:
    "headphones party-name location-date-time"
    "headphones party-description location-date-time"
    "currently-playing party-sub-info delete-button";
  background-color: #46277a;
}

#block-one{
   display: grid;
  grid-template-rows:
    33% 33% 33%;
  grid-template-areas:
    "headphones"
    "headphones"
    "currently-playing ";
  background-color: #46277a;
  
}

#block-two{
   display: grid;
  grid-template-rows:
    33% 33% 33%;
  grid-template-areas:
    " party-name"
    "party-description"
    " party-sub-info";
  background-color: #46277a;
  
}

#block-three{
   display: grid;
  grid-template-rows:
    33% 33% 33%;
  grid-template-areas:
    "location-date-time"
    "location-date-time"
    "delete-button";
  background-color: #46277a;
  
}

</style>