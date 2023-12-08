<template>

    <footer>
      <div class= "header-container">
      <div class="social-icons">
        <p class="x1"><a href="https://www.facebook.com/techelevator/" target="_blank" title="TE Facebook Page" class="x1"><i class="fa-brands fa-facebook"></i></a></p>
        <p class="x1"><a href="https://www.techelevator.com/" target="_blank" title="TE Website" class="x1"><i class="fa-solid fa-globe"></i></a></p>
        <p class="x1"><a href="https://twitter.com/Tech_Elevator" target="_blank" title="TE Twitter" class="x1"><i class="fa-brands fa-twitter"></i></a></p>
        <p class="x1"><a href="https://www.linkedin.com/school/tech-elevator/mycompany/" target="_blank" title="TE LinkedIn" class="x1"><i class="fa-brands fa-linkedin"></i></a></p>
      </div>
      <div class="copyright">
        <p id="copyright" align="center">&copy; 2023 - 2023 Aux Box</p>
        </div>

        </div>
        <br>

      </footer>
  
</template>

<script>


export default {
      name: "myFooter",
};



</script>

<style scoped>

.copyright {
  font-family: "Pontano Sans", sans-serif;
   color: #786fc1;

}
.x1:hover {
   color: #786fc1;
}
.x1 {
  font-size: 36px;
  color: #46277a;
}
p {
  padding-right: 20px;
  padding-left: 20px;
}

.social-icons {
  display: flex;
  justify-content: center;
  align-content: center;

}
footer {
    display: flex;
  justify-content: center;
  align-content: center;
padding: 10px;
display: flex;
}
</style>