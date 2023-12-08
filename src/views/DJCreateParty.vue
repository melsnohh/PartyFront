<template>
  <div class="create">
    <MyDJHeader />
    <div class="container">
      <div id="create-party">
        <form id="form" @submit.prevent="postParty">
          <h1>Create a New Event</h1>
          <!-- <div role="alert" v-if="invalidCredentials">
        Invalid username and password!
      </div>
      <div role="alert" v-if="this.$route.query.registration">
        Thank you for registering, please sign in.
      </div> -->
          <div class="form-input-group">
            <label for="title">Event title:</label>
            <input type="text" id="title" v-model="party.partyName" required />
            <p>(This will be the same name as your Spotify playlist)</p>
          </div>
          <div class="form-input-group">
            <label for="city">What city is your event in?:</label>
            <br /><input type="text" id="city" v-model="party.city" required />
          </div>
          <div class="form-input-group">
            <label for="details">Event description: </label>
            <br /><textarea
              v-model="party.description"
              required
              rows="5"
              cols="50"
              name="details"
              id="details"
            ></textarea>
          </div>
          <div class="form-input-group">
            <label for="tag"
              >Enter some words to search for your party (seperated by commas
              with no spaces):</label
            >
            <input type="text" id="tag" v-model="party.theme" required />
          </div>
          <div class="form-input-group">
            <label for="date">What date is your event?:</label>
            <input type="date" id="date" v-model="party.startDate" required />
          </div>
          <div class="form-input-group">
            <label for="time">What time will your event start?:</label>
            <input type="time" id="time" v-model="party.startTime" required />
          </div>
          <div class="form-input-group">
            <div class="public-private">
              <input
                type="radio"
                name="option"
                class="public"
                value="option-1"
              />
              <label for="public"> Public event</label>
              <br />
              <input
                type="radio"
                name="option"
                class="control"
                value="option-2"
              />
              <label for="requirement"> Private event</label>
              <fieldset class="conditional">
                <label for="option">Create an event passcode: </label>
                <input type="passcode" id="passcode" v-model="party.passcode" />
                <p>Your guests will enter this passcode to access your event</p>
              </fieldset>
            </div>
          </div>
          <button @click.prevent.stop="postParty" class="button">Submit</button>
          <p>
            <router-link
              :to="{
                name: 'DJHomePage',
                params: { userName: $store.state.user.username },
              }"
              >Take me back to the DJ home page!</router-link
            >
          </p>
        </form>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import PartyService from "../services/PartyService";
import MyDJHeader from "../components/MyDJHeader.vue";
import MyFooter from "../components/MyFooter";

export default {
  name: "DJCreateParty",
  components: {
    MyDJHeader,
    MyFooter,
  },
  data() {
    return {
      party: {
        partyName: "",
        description: "",
        passcode: "",
        city: "",
        startDate: "",
        startTime: "",
        theme: "",
      },
      invalidCredentials: false,
    };
  },
  methods: {
    postParty() {
      PartyService.postParty(this.party, this.$store.state.user);
    },
  },
};
</script>

<style scoped >
input {
  font-size: 20px;
}
.container {
  display: flex;
  align-content: center;
  justify-content: center;
}

p {
  font-size: 16px;
  color: #fffded;
}

.form-input-group {
  margin-bottom: 5px;
  max-width: 600px;
}
label {
  margin-right: 0.5rem;
}

#title {
  margin-top: 1rem;
  font-size: 18px;
  color: #46277a;
}
#passcode {
  font-size: 18px;
  max-width: 200px;
}
#form {
  background-color: #46277a;
  display: flex;
  align-content: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  border-radius: 25px;
  font-size: 20px;
  font-family: "Pontano Sans", sans-serif;
}

.button:hover {
  background-color: #fce762;
  color: #46277a;
}
.button {
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 24px;
}

a {
  color: #fffded;
  text-decoration: none;
}

a:hover {
  color: #fce762;
}

label {
  color: #fffded;
}

#login {
  width: 800px;
}
.control:checked ~ .conditional,
#immigrant:checked ~ .conditional,
#required-2:checked ~ .conditional #option-2:checked ~ .conditional {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.control:not(:checked) ~ .conditional,
#immigrant:not(:checked) ~ .conditional,
#required-2:not(:checked) ~ .conditional,
#option-2:not(:checked) ~ .conditional {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
</style>