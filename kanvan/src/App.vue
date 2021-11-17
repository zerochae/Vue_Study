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
    return{
      boards : [
            {
            "name":"화면 미 구현",
            "class":"beforeViewImpl",
            "showInput":false,
            },
            {
            "name":"화면 구현 완료",
            "class":"viewImplemented",
            "showInput":false,
            },
            {
            "name":"API 개발 전",
            "class":"beforeApiImpl",
            "showInput":false,
            },
            {
            "name":"API 개발 중",
            "class":"apiImpling",
            "showInput":false,
            },
            {
            "name":"API 개발 완료",
            "class":"apiImplemented",
            "showInput":false,
            },
        ],
    }
  },
};
</script>

<style>
@import "assets/App.css";
@import "assets/List.css";
@import "assets/Board.css";
</style>
