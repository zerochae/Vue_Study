<template>
  <div>
    <div class="menubar">
      <Sidebar />
    </div>
    <div class="container content">
      <Searchbar />
      <hr />
      <Card />
      <hr />
      <LineChart />
    </div>
  </div>
  <!-- 

    이미지 업로드, 비디오 업로드, 텍스트 수정, 게시판

   -->
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import Searchbar from "./components/Searchbar.vue";
import Card from "./components/Card.vue";
import LineChart from "./components/LineChart.vue";

export default {
  name: "App",
  data() {
    return {
      myChart : this.myChart,
    };
  },
  components: {
    Sidebar: Sidebar,
    Searchbar: Searchbar,
    Card: Card,
    LineChart: LineChart,
  },
};
</script>

<style>
@import "./assets/App.css";
@import "./assets/font.css";
@import "./assets/Sidebar.css";
@import "./assets/Searchbar.css";
@import "./assets/Card.css";
</style>
