<template>
  <div>
    <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li v-if="step == 1" @click="step++">Next</li>
        <li v-if="step == 2" @click="publish">Publishing</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>
<!-- 
    <h4>안녕 {{ $store.state.name }}</h4>
    <p>{{ name }}</p>
    <p>{{ 내이름 }}</p> -->

    <!-- <p>{{ $store.state.more }}</p> -->
    <!-- <button @click="$store.dispatch('getData')">더보기버튼</button> -->

    <Container
      :postData="postData"
      :step="step"
      :uploadImageUrl="uploadImageUrl"
      @callContent="callContent"
    />

    <button @click="more">더보기</button>

    <div class="footer">
      <ul class="footer-button-plus">
        <input
          @change="upload"
          accept="image/*"
          type="file"
          id="file"
          class="inputfile"
        />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>
  </div>
</template>

<script>
import Container from "./components/Container.vue";
import postData from "./assets/postData.js";
import axios from "axios";
import {mapMutations, mapState} from 'vuex';

export default {
  name: "App",
  data() {
    return {
      postData: postData,
      count: 0,
      step: 3,
      uploadImageUrl: "",
      content: "",
      filterName: "aa",
      nowCount: 0,
    };
  },
  mounted() {
    this.emitter.on("callFilterName", (data) => {
      this.filterName = data;
    });
  },
  components: {
    Container: Container,
  },
  methods: {
    ...mapMutations([
      'setMore','like'
    ]),
    now() {
      return new Date();
    },
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
    upload(e) {
      let file = e.target.files;
      console.log(file);
      this.uploadImageUrl = URL.createObjectURL(file[0]);
      console.log(this.uploadImageUrl);
      this.step = 1;
      // 이미지 삽입 방법 2가지
      // 1. FileReader() -> 파일을 글자로 변환해준다
      // 2. URL.createObjectURL() -> 이미지의 가상 URL을 호스팅해준다
    },
    publish() {
      var posting = {
        name: "zerochae",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.uploadImageUrl,
        likes: "36",
        date: "Oct 17",
        liked: false,
        content: this.content,
        filter: this.filterName,
      };
      postData.unshift(posting);
      this.step = 0;
    },
    callContent(content) {
      this.content = content;
    },
  },
  computed: {
    name() {
      return this.$store.state.name;
    },
    ...mapState(['name','age','likes',]),
    ...mapState({ 내이름 : 'name'}),
  },
};
</script>

<style>
@import "./assets/App.css";
</style>
