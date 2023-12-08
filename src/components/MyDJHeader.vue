<template>
  <header>
    <div class="logo">
      <router-link to="/landing"
        ><img :src="'/assets/auxbox-logo-3.png'" id="logo" />
      </router-link>
    </div>

    <div class="nav">
      <router-link to="/landing">Home</router-link>
      <router-link to="/about">About Us</router-link>
      <router-link
        :to="{ name: 'DJHomePage', params: { userName: user.username } }"
        >DJ Homepage</router-link
      >
      <div class="logout" @click="logout">Logout</div>
      <i class="fa-regular fa-circle-user fa-2xl"></i>
      <div class="username">DJ {{ user.username }}</div>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "my-dj-header",

  computed: mapState({ user: "user" }),

  methods: {
    logout (){
      this.$store.commit("SET_USER", {})
      this.$router.push(`/landing`)
    }
  },
};
</script>

<style scoped>
.fa-circle-user {
  color: #46277a;
  padding-left: 15px;
  padding-right: 10px;
}

.username {
  font-size: 16px;
  color: #46277a;
  font-family: "Pontano Sans", sans-serif;
  font-weight: bold;
  text-align: center;
}

header {
  height: 150px;
}

.logout{
  font-size: 24px;
  color: #786fc1;
  font-family: "Pontano Sans", sans-serif;
  font-weight: bold;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  cursor: pointer;

}

.logout:hover {
  background-color: #46277a;
  color: #fffded;
  border-radius: 15px;
}

.logout:active {
  background-color: #f89d5b;
  box-shadow: 0 5px #fffded;
  transform: translateY(4px);
   border-radius: 15px;
}

.slogan {
  display: flex;
  align-items: center;
  font-size: 22px;
}
</style>