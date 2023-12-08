<template>

  <div class="register">
    <my-header> </my-header>
<div class = "container">
<div id="login">
    <form @submit.prevent="register">
      <h1>Create Account</h1>
      <div role="alert" v-if="registrationErrors">
        {{ registrationErrorMsg }}
      </div>
 
      <div class="form-input-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="user.username" required autofocus />
      </div>
      <div class="form-input-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="user.password" required />
      </div>
      <div class="form-input-group">
        <label for="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" v-model="user.confirmPassword" required />
      </div>
      <button button class = "button" type="submit">Create Account</button>
      <p><router-link :to="{ name: 'login' }">Already have an account? Log in.</router-link></p>
    </form>
    </div>
   </div>
   <my-footer></my-footer>

   </div>
</template>

<script>
import authService from "../services/AuthService";
import MyHeader from "../components/MyHeader.vue";
import MyFooter from "../components/MyFooter.vue";


export default {
  name: "RegisterPage",
  components: { MyHeader, MyFooter },
  data() {
    return {
      user: {
        username: "",
        password: "",
        confirmPassword: "",
        role: "user",
      },
      registrationErrors: false,
      registrationErrorMsg: "There were problems registering this user.",
    };
  },
  methods: {
    register() {
      if (this.user.password != this.user.confirmPassword) {
        this.registrationErrors = true;
        this.registrationErrorMsg = "Password & Confirm Password do not match.";
      } else {
        authService
          .register(this.user)
          .then((response) => {
            if (response.status == 201) {
              this.$router.push({
                path: "/login",
                query: { registration: "success" },
              });
            }
          })
          .catch((error) => {
            const response = error.response;
            this.registrationErrors = true;
            if (response.status === 400) {
              this.registrationErrorMsg = "Bad Request: Validation Errors";
            }
          });
      }
    },
    clearErrors() {
      this.registrationErrors = false;
      this.registrationErrorMsg = "There were problems registering this user.";
    },
  },
};
</script>

<style scoped>

#login {
    display: flex;
  align-content: center;
  justify-content: center;
}

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

#confirmPassword {
  font-size: 18px;
}

.button {
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 24px;
  /* background-color: #f3ebb5 !important; */

}

.button:hover{
     background-color: #fce762 ;
     color: #46277a ;
}
a {
  color: #fffded;
}
</style>
