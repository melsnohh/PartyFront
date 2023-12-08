<template>
  <div class="login">
    <my-header> </my-header>
<div id= "container">
  <div id="login">
    <div class="container">
    <form @submit.prevent="login">
      <h1 >Please Sign In</h1>
      <div  id="invalid-login" role="alert" v-if="invalidCredentials">
        Invalid username and password!
      </div>
      <div role="alert" v-if="this.$route.query.registration">
        Thank you for registering, please sign in.
      </div>
      <div class="form-input-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="user.username" required autofocus />
      </div>
      <div class="form-input-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="user.password" required />
      </div>
      <button button class = "button" type="submit">Sign in</button>
      <p><router-link :to="{ name: 'register' }">Need an account? Sign up.</router-link></p>
    </form>
    </div>
  </div>
  
  </div>
      <my-footer></my-footer>

  </div>
  
</template>

<script>
import MyHeader from '../components/MyHeader.vue';
import authService from "../services/AuthService";
import MyFooter from "../components/MyFooter.vue";


export default {
  name: "LoginPage",
  components: {MyHeader, MyFooter},
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      invalidCredentials: false
    };
  },
  methods: {
    login() {
      authService
        .login(this.user)
        .then(response => {
          if (response.status == 200) {
            this.$store.commit("SET_AUTH_TOKEN", response.data.token);
            this.$store.commit("SET_USER", response.data.user);
            let userName = response.data.user.username;
            this.$router.push(`/DJhomepage/${userName}`);
          }
        })
        .catch(error => {
          const response = error.response;

          if (response.status === 401) {
            this.invalidCredentials = true;
          }
        });
    }
  }
};
</script>

<style scoped >

.container {
  display: flex;
  align-content: center;
  justify-content: center;
}

.form-input-group {
  margin-bottom: 2rem;

}
label {
  margin-right: 0.5rem;
}

#username {
  margin-top: 1rem;
  font-size: 18px;
  color: #46277a;
}
#password {
  font-size: 18px;
}
form {
   color: #46277a;
}

.button{
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 24px;
    /* background-color: #f3ebb5 !important; */

}

.button:hover{
     background-color: #fce762 ;
     color: #46277a ;

}

#invalid-login {
  color: #fffded !important;
}

a {
  color: #fffded;
}

label {
  color: #fffded;
}

#container {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>