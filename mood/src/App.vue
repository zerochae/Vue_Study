<template>
  <div class="main container">
    <Nav />
    <Container/>
    <Post/>
    <div style="clear:both;"></div>
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Container from "./components/Container.vue";
import Footer from "./components/Footer.vue";
import Post from "./components/Post.vue"

export default {
  name: "App",
  components: {
    Nav,
    Footer,
    Container,
    Post,
  },
  data() {},
  methods: {},
};
</script>

<style>
@import "./static/css/app.css";
@import "./static/css/Audio.css";
@import "./static/css/Nav.css";
@import "./static/css/Footer.css";
@import "./static/css/Content.css";
@import "./static/css/Container.css";
@import "./static/css/Post.css";
@import './static/css/Info.css'
</style>
