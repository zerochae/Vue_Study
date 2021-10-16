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

    <Container :postData="postData" :step='step' />

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
      count: 0,
      step : 0,

    };
  },
  components: {
    Container: Container,
  },
  methods: {
    more() {
      if (this.count == 0) {
        axios
          .get("https://codingapple1.github.io/vue/more0.json")
          .then((result) => {
            this.postData.push(result.data);
            this.count += 1;
          });
      } else {
        axios
          .get("https://codingapple1.github.io/vue/more1.json")
          .then((result) => {
            this.postData.push(result.data);
          });
      }

      // axios
      // .post("URL", { name : "kim"})
      // .then((result) =>{})
      // .catch((err)=> {})
    },
  },
};
</script>

<style>
@import "./assets/App.css";
</style>
