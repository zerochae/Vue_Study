<template>
  <div>
    <Post :postData="list" v-for="list in postData" :key="list"/>
  </div>
</template>

<script>

import Post from './Post.vue';

export default {
  name : 'Container',
  data(){
    return{
    }
  },
  components : {
    Post : Post,
  },
  props : {
    postData : Array,
  }
};
</script>

<style>
</style>