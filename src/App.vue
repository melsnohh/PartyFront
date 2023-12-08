<template>
  <div id="app">

    <!-- <header>
      <div class="logo">
      <router-link to="/landing"><img src="../assets\auxbox-logo-1.png" id = "logo">
      </router-link>
      </div>
    <div class="nav">
      <router-link to="/landing">Home</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/about">About Us</router-link>
    </div>
    </header> -->


      
    <body>
    <!-- <my-header> </my-header> -->
    <router-view />
    </body>
    <!-- <footer>
      </footer> -->
      </div>


</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Viga&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pontano+Sans:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pontano+Sans:wght@700&display=swap');


* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Viga", Helvetica, Arial, sans-serif;
  background-color: #fce762;
  color: #46277a;
  max-width: 100%;
}

h1 {
  font-family: "Viga", sans-serif;
  color: #fffded;
    text-align: center;

}

h2 {
  color: #786fc1;
  /* margin: 16px; */
    text-align: center;

}

h3 {
  color: #fffded;
  text-align: center;
}

.nav {
padding-top: 40px;
display: flex;
flex-direction: row;
align-content: left;
justify-content: space-evenly;
align-items: center;
height: 100px;

}

.nav a {
  display: flex;
  font-size: 24px;
  color: #786fc1;
  /* background-color: #f3ebb5; */
  font-family: "Pontano Sans", sans-serif;
font-weight: bold;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

body {

  background-color: #fce762 !important;

  /* background: linear-gradient(0.25turn,  #c13cf6, #786fc1, #786fc1) !important; */
}

.nav a:hover {
  background-color: #46277a;
  color: #fffded;
  border-radius: 15px;
}

.nav a:active {
  background-color: #f89d5b;
  box-shadow: 0 5px #fffded;
  transform: translateY(4px);
   border-radius: 15px;
}
#logo {
  display: flex;
  justify-content: flex-start;
max-height: 200px;
max-width: 200px;
padding-bottom: 30px;
padding-top: 0px;

}

.button:active {
  background-color: #f89d5b;
  box-shadow: 0 5px #fffded;
  transform: translateY(4px);
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

.button:hover {
  color: #fffded;

}
#login {
  border-radius: 25px;
  padding: 20px;
  width: 500px;
  height: auto;
  background-color: #46277a;
  display: flex;
  align-items: center;
  justify-content: left;
  font-family: "Pontano Sans", sans-serif;
  color: #786fc1;
  font-size: 24px;
}

label {
  color: #fffded;
}

header {
  background-color: #fce762;
 padding-left: 30px;
  padding-right: 30px;
padding-bottom: 30px;
display: flex;
flex-direction: row;
align-items: left;
justify-content: space-between;
width: 100%;
}


</style>



