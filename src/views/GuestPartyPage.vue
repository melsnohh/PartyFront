<template>
  <div class="party-page">
    <MyDJHeader v-show="user.username" />
    <my-header v-show="!user.username" />
    <body id="main-flex">
      <div class="flex-column" id="search-song-column">
        <div id="block-one">
          <div id="currently-playing" class="info-container">
            <currently-playing-song />
          </div>
        </div>
        <search-song-guest />
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
        <suggestedSongList />
      </div>
      <div class="flex-column" id="playlist">
        <div id="block-three">
          <div id="location-date-time" class="info-container">
            <h3 id="location">Location: {{ party.city }}</h3>
            <h3 id="date">Start Date: {{ formatDate }}</h3>
            <h3 id="time">Start Time: {{ formattedTime }}</h3>
          </div>
        </div>
        <playlist />
      </div>
    </body>
    <my-footer />
  </div>
</template>

<script>
import suggestedSongList from "../components/SuggestedSongList.vue";
import MyDJHeader from "@/components/MyDJHeader.vue";
import MyHeader from "../components/MyHeader.vue";
import playlist from "../components/Playlist.vue";
import MyFooter from "../components/MyFooter.vue";
import searchSongGuest from "../components/SearchSongGuest.vue";
import partyService from "../services/PartyService";
import currentlyPlayingSong from "../components/CurrentlyPlayingSong.vue";
import { mapState } from "vuex";
import dayjs from "dayjs";

export default {
  components: {
    suggestedSongList,
    searchSongGuest,
    MyHeader,
    playlist,
    MyFooter,
    currentlyPlayingSong,
    MyDJHeader,
  },
  name: "partyPage",
  data() {
    return {
      partyId: this.$route.params.partyId,
      party: {
        party_name: "",
        description: "",
        city: "",
        start_date: "",
        start_time: "",
      },
    };
  },
  computed: {
    formatDate() {
      const date = dayjs(this.party.start_date);
      // Then specify how you want your dates to be formatted
      return date.format("dddd MMMM D, YYYY");
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
    },
    ...mapState(["user"]),
  },

  mounted() {
    partyService.getParty(this.partyId).then((resp) => {
      if (resp.status == 200) {
        this.party.party_name = resp.data.party_name;
        this.party.description = resp.data.description;
        this.party.city = resp.data.city;
        this.party.start_date = resp.data.start_date;
        this.party.start_time = resp.data.start_time;
      }
    });
  },
};
</script>

<style scoped>
#party-name {
  padding-top: 20px;
  text-align: center;
}

#party-sub-info{
  background-color: none;
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

/* #headphones {
    padding-top: 20px;
#headphones {
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: headphones;
  height: 62%;
  margin-bottom: 8px;
} */

#location-date-time {
  grid-area: location-date-time;
  height: 62%;
  color: #fffded;

  
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
  color: fffded;
}

#party-info {
  height: 62%;
}

#party-description {
  grid-area: party-description;
  display: flex;
  justify-content: center;
  font-size: 16px;
  cursor: default;
  text-shadow: 5px 5px 10px  #786fc1, 10px 10px 100px  #f89d5b, 10px 10px 50px #f89d5b;
  color: #f89d5b;
}

#currently-playing {
  grid-area: currently-playing;
  height: 64px;
  background-color: #786fc1;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
}

#party-sub-info {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: party-sub-info;
  background-color: none;
  height: 64px;
  color: #fffded;
    text-shadow: 5px 5px 10px  #786fc1, 10px 10px 100px  #f89d5b, 10px 10px 50px #f89d5b;

}

#delete-button {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: delete-button;
  background-color: #786fc1;
  height: 64px;
}

.button {
  font-size: 16px;
  /* padding: 10px;
  margin: 0px; */
}

.party-info {
  background-color: #46277a;
  height: 130px;
}

#party-name {
  padding-top: 20px;
    font-size: 46px;
  cursor: default;
    text-shadow: 5px 5px 10px  #786fc1, 10px 10px 100px  #f89d5b, 10px 10px 50px #f89d5b;
}

.flex-column {
  padding-bottom: 30px;
}



#main-flex {
  display: flex;
  height: 100%;
  border-bottom: 5px solid #46277a;
}

#search-label {
  text-align: center;
}

#search-songs {
  align-content: center;
  width: 100%;
}

.container {
  display: flex;
  align-content: center;
  justify-content: center;
}

#party-name {
  text-align: center;
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
  border-left: 5px solid #46277a;
  border-right: 5px solid #46277a;
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

#block-one {
  display: flex;
  /* grid-template-rows: */
  /* 33%; */
  /* grid-template-areas: */
  /* "currently-playing" */
  /* "currently-playing" */
  /* "currently-playing "; */
  background-color: #46277a;
  justify-content: center;
  align-items: center;
}

#block-two {
  display: grid;
  grid-template-rows: 33% 33% 33%;
  grid-template-areas:
    " party-name"
    "party-description"
    " party-sub-info";
  background-color: #46277a;
}

#block-three {
  display: grid;
  grid-template-rows: 33% 33% 33%;
  grid-template-areas:
    "location-date-time"
    "location-date-time"
    "location-date-time";
  background-color: #46277a;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

#block-one,
#block-two,
#block-three {
  min-height: 190px;
}

#location {
  padding-top: 20px;
}

#main-flex {
  display: flex;
  height: 100%;
}
</style>