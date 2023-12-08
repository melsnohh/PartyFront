<template>
  <div class="landing">
    <MyDJHeader v-show="user.username" />

    <my-header v-show="!user.username" class="top" />

    <div class="content">
      <div class="middle">
        <div class="search-bar">
          <input
            id="input"
            name="search-bar"
            type="text"
            size="50"
            v-on:keyup.enter="filteredPartyList()"
            placeholder="Search for parties"
            v-model="search"
          />
          <button class="button search-btn" @click="filteredPartyList()">
            Search
          </button>
        </div>

        <div class="songList">
          <div class="list-group">
            <div
              v-for="party in eventList"
              :key="party.party_id"
              @click="isPrivateEvent(party.passcode, party.party_id)"
            >     
              <a
                href="#"
                class="
                  list-group-item list-group-item-action
                  flex-column
                  align-items-start
                "
              >
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">{{ party.party_name }}</h5>
                  <small v-show="party.passcode" >
                    Private <i class="fas fa-solid fa-lock"></i>

                   </small>
                </div>
                <p class="mb-1">{{ party.description }}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <my-footer/>
  </div>
</template>

<script>
import axios from "axios";
import MyDJHeader from '@/components/MyDJHeader.vue'
import MyHeader from "@/components/MyHeader.vue";
import MyFooter from "@/components/MyFooter.vue";
import { mapState } from "vuex";

export default {
  components: { MyDJHeader, MyHeader, MyFooter },
  name: "HomePage",
  data() {
    return {
      search: "",
      eventList: [],
      searched: false,
    };
  },
  computed: mapState({ user: "user" }),

  methods: {
    toggleSearched() {
      this.searched = true;
    },

    isPrivateEvent(passcode, partyId) {
      // let correctPasscode = false;

      if (passcode) {
        this.$prompt("Enter Event Passcode").then((text) => {
          const inputPassCode = text;

          if (inputPassCode === passcode) {
            // correctPasscode = true;
            this.$router.push({
              name: "partyPage",
              params: { partyId: partyId },
            });
          } else {
            this.isPrivateEvent(passcode, partyId);
          }
        });
      } else {
        this.$router.push({ name: "partyPage", params: { partyId: partyId } });
      }
    },

    showAlert(msg) {
      this.$swal.fire(msg);
    },

    filteredPartyList() {
      
      if (this.search != "") {
        axios
          .get(`${process.env.VUE_APP_REMOTE_API}/party/tag/${this.search}`)
          .then((res) => {
            this.eventList = res.data;
          })
          .catch((error) => {
            if (error.res) {
              this.showAlert(`No party exists with the tag ${this.search}`);
            } else if (error.request) {
              this.showAlert(`No party exists with the tag ${this.search}`);
            } else {
              this.showAlert("Your request was not sent");
            }
            this.eventList = [];
          });
      }
    },
  },
};
</script>



<style scoped>
.list-group {
  min-width: 514px;
}
a {
  text-decoration: none;
}




header {
  width: 100%;
}

.landing {
  height: 100vh;
}

.middle {
  height: 100%;
  overflow-y: auto;
}

.content::before {
  background-image: url("/Users/melsnoh/Desktop/PartyPlayList/myproject/thesss/public/assets/background.jpg");
  opacity: 50%;
}
.content {
  background-image: url("/Users/melsnoh/Desktop/PartyPlayList/myproject/thesss/public/assets/background.jpg");
  height: 100%;
  background-size: cover;
  opacity: 100%;
  background-color: #363532;
}

.search-btn:hover {
  background-color: #46277a;
  color: #fffded;
  box-shadow: 0 0 60px #fce762;
  transition: box-shadow 0.1s;
}

.songList {
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-btn:hover {
  box-shadow: 0 0 60px #fce762;
  transition: box-shadow 0.25s ease-in-out;
}
input[type="text"] {
  padding: 10px;
  border: none;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 32px;
  color: #f89d5b;
  font-family: "Pontano Sans", sans-serif;
  border: 4px soft #f89d5b;
}

input:focus {
  box-shadow: 0 0 60px #fce762;
  transition: box-shadow 0.25s ease-in-out;
}

.search-bar {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 10px 10px 100px 10px;
  font-size: 32px;
  border: none;
  cursor: pointer;
  padding-bottom: 30px;
  margin-top: 50px;
}

.event-display {
  display: flex;
  padding: 5%;
  justify-content: space-evenly;
  align-items: center;
}

.container {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>