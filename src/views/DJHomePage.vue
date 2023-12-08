<template>
<div class="homepage-container">
     <MyDJHeader> </MyDJHeader>

  <div class="create">
    <h1 class="dj-info"> Welcome, DJ {{ userName }}! </h1>
    <div class="dj-container">
      <div class="dj-buttons">
        <party-button
          v-for="party in partyList"
          :key="party.party_id"
          v-bind:party="party"
        ></party-button>
        <button class="button">
          <router-link :to="{ name: 'DJCreateParty' }"
            >Create a new party</router-link
          >
        </button>
      </div>
    </div>

  </div>
      <my-footer></my-footer>
      </div>
</template>

<script>
import MyFooter from "@/components/MyFooter.vue";
import PartyService from "@/services/PartyService";
import PartyButton from "@/components/PartyButton.vue";
import MyDJHeader from "@/components/MyDJHeader.vue";

export default {
  created() {
    this.userEventsList();
  },
  name: "DJHomePage",
  components: {  MyDJHeader , MyFooter, PartyButton },
  data() {
    return {
      partyList: [],
    };
  },
  computed: {
    userName() {
      return this.$store.state.user.username;
    },
    userId() {
      return this.$store.state.user.id;
    },
  },
  methods: {
    userEventsList() {
      PartyService.getDjParties(this.userId).then((response) => {
        this.partyList = response.data;
      });
      setTimeout(this.getSuggestedSongs, 1000);
    },
  },
};
</script>

<style scoped>
.dj-info {
  padding-top: 30px;
}

h1 {
  font-size: 72px;
  cursor: default;
    text-shadow: 5px 5px 10px  #786fc1, 10px 10px 100px  #f89d5b, 10px 10px 50px #f89d5b;



}
.dj-container {
  padding: 30px;
  display: flex;
  min-height: 500px;
  justify-content: center;
  align-content: center;
}

.dj-buttons {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}


a {
  text-decoration: none;
  font-size: 32px;
  color: #fffded;
  font-family: "Viga", sans-serif;
  font-size: 40px;
}

a:hover {
  color: #46277a;
}


.create{
  background-image: url("/Users/melsnoh/Desktop/PartyPlayList/myproject/thesss/public/assets/background-transparent.png");
  height: 100%;
  background-size: cover;
  opacity: 100%;
  background-color: #363532;
}
</style>
