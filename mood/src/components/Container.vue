<template>
  <div class="container-body">
    <div class="container text-center">
      <div><button class="playBtn" @click="song">🎵</button></div>
      <Audio :songData="songData" />
      <Content :songData="songData"/>
    </div>
  </div>
</template>

<script>
import Audio from "./Audio.vue";
import Content from "./Content.vue";
import axios from "axios";
export default {
  name: "Container",

  components: {
    Audio,
    Content,
  },
  data() {
    return {
      songData: "songData",
    };
  },
  methods: {
    song() {
      axios
        .get("http://192.168.0.45:8011/selectone")
        .then((result) => {
          console.log(result.data);
          this.songData = result.data;

          let audio = document.querySelector("#audio");

          audio.load();
          audio.play();
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