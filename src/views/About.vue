<template>
  <body>
    <div id="about">
      <MyDJHeader v-show="user.username" />

      <my-header v-show="!user.username" class="top" />
      <div class="about-body">
        <div id="description">
          <h1>
            Welcome to Aux Box, the creator of the ultimate party playlist app!
          </h1>
          <p>
            Aux Box is a Tech Elevator exclusive and is designed to be the
            perfect companion for all your social gatherings. From backyard
            barbecues to wild house parties, you'll never have to worry about
            curating the perfect playlist again. Your guests can choose to
            suggest songs to the playlist based on the party mood or the type of
            event you're hosting. Our app is easy to use, with a simple and
            intuitive interface that allows the DJ to create, edit, and play
            your curated playlists with just a few taps. So if you're looking to
            take your party to the next level, use Aux Box today and start
            dancing the night away! <br /><br />Meet our development team below:
          </p>
        </div>
        <div class="image-row">
          <figure>
            <img :src="'/assets/David.jpg'" alt="David" id="David" />
            <figcaption>David Chan</figcaption>
          </figure>
          <figure>
            <img :src="'/assets/Ed.jpg'" alt="Ed" id="Ed" />
            <figcaption>Edward Acholonu</figcaption>
          </figure>
          <figure>
            <img :src="'/assets/Melvin.jpg'" alt="Melvin" id="Melvin" />
            <figcaption>Melvin Snoh</figcaption>
          </figure>
          <figure>
            <img :src="'/assets/Sam.jpg'" alt="Sam" id="Sam" />
            <figcaption>Sam Suter</figcaption>
          </figure>
          <figure>
            <img :src="'/assets/Skyler.jpg'" alt="Skyler" id="Skyler" />
            <figcaption>Skyler Burkhart</figcaption>
          </figure>
        </div>
      </div>
    </div>

    <my-footer></my-footer>
  </body>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
import MyFooter from "@/components/MyFooter.vue";
import MyDJHeader from "@/components/MyDJHeader.vue";
import { mapState } from "vuex";

export default {
  name: "LoginPage",
  components: { MyDJHeader, MyHeader, MyFooter },
  computed: mapState({ user: "user" }),
};
</script>

<style scoped>
.about-body {
  background-color: #46277a;
}
#description {
  text-align: center;
  font-size: 24px;
  padding-bottom: 50px;
  color: #fffded;
  background-color: #46277a;
  padding: 30px 50px 10px 50px;
}

h1 {
  color: #f89d5b;
  padding: 60px 80px 0px 80px;
}

figcaption:hover {
  color: #f89d5b;
  cursor: default;
}
.image-row {
  display: flex;
  justify-content: center;
}

figcaption {
  color: #fffded;
  font-size: 18px;
}
figure {
  max-width: 50%;
  text-align: center;
}

img {
  width: auto;
  height: 300px;
  padding: 10px;
  border-radius: 20%;
}
</style>