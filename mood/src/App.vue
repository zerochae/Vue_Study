<template>
  <div>
    <Card :songData="songData" />
    <audio id="audio" controls>
      <source :src="`https://${thisSong}`" type="audio/mp3" />
    </audio>
    <button @click="song">play</button>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Card,
  },
  data() {
    return {
      songData: "ss",
      thisSong: "",
    };
  },
  methods: {
    song() {
      axios
        .get("http://192.168.0.45:8011/zerochae")
        .then((result) => {
          console.log(result.data);
          this.songData = result.data;
          this.thisSong = this.songData[0].file;

          let audio = document.querySelector('#audio')

          audio.load()
          audio.play()

        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>
