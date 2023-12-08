<template>
  <div>
    <button  class="dj-buttons button">
      <router-link v-bind:to="{name: 'DJPartyPage', params: {partyId: party.party_id}}" @click="setAsCurrentParty">
          <h1>{{party.party_name}}</h1>
          <h2>{{party.party_description}}</h2>
          </router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "party-button",
  props: {
    party: Object,
  },
  methods: {
    setAsCurrentParty() {
      this.$store.commit("SET_CURRENT_PARTY", this.party.party_id)
    }
  }
};
</script>

  <style scoped>



.dj-buttons {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 500px;
}

.button {
  display: flex;
  text-align: center;
  justify-content: center;
  align-content: center;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 32px;
  font-family: "Pontano Sans", sans-serif;
  border: none;
  cursor: pointer;
  background-color: #f89d5b;
  border-radius: 12px;
  color: #fffded;
}

h1{
  padding-top: 8px;
  margin:0;
}
a {
  text-decoration: none;
}

.button :hover {
  color: #46277a;
}

</style>