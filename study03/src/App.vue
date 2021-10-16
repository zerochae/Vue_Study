<template>
  <div>
    <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li>Next</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>

    <Container :postData="postData" />

    <button @click="more">더보기</button>

    <div class="footer">
      <ul class="footer-button-plus">
        <input type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>
  </div>
</template>

<script>
import Container from "./components/Container.vue";
import postData from "./assets/postData.js";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      postData: postData,
    };
  },
  components: {
    Container: Container,
  },
  methods: {
    more() {
      axios
        .get("https://codingapple1.github.io/vue/more0.json")
        .then((result) => {
           this.postData.push(result.data);
        });
    },
  },
};
</script>

<style>
@import "./assets/App.css";
</style>
