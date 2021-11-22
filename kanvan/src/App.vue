<template>
  <div class="container">
    <Board class="board"/>
  </div>
</template>

<script>

import Board from './components/Board.vue';


export default {
  name: "App",
  components: {
    Board,
  },
  data(){
    return{}
  },
};
</script>

<style>
@import "assets/App.css";
@import "assets/List.css";
@import "assets/Board.css";
</style>
