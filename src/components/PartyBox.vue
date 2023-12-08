<template>
    
  <div>

      <router-link v-bind:to="{name: 'partyPage', params: {partyId: party.partyId}}">
     <div >
       <div class="party-box">
      <h1>{{ party.party_name }}</h1>
      <p>{{ party.description }}</p>
     </div>
     </div>
      </router-link>

  </div>


</template>

<script>
export default {
  name: "party-box",
  props: {
    party: Object,
  },
};
</script>

<style scoped>
.party-box {
  border: 3px solid #46277a;
  border-radius: 25px;
  width: 250px;
  height: 250px;
  font-family: "Pontano Sans", sans-serif;
}

h1 {
  text-align: center;
  color: #786fc1;
}

p {
  text-align: center;
  color: #786fc1;
}

a {
    text-decoration: none;
}

a :hover {
  background-color: #46277a;
  color: #fffded;
  border-radius: 25px;
}

</style>
