<template>
  <div>
    <div v-if="step == 0">
      <Post :postData="list" v-for="list in postData" :key="list" />
    </div>
    <div v-if="step == 1">
      <!-- 필터선택페이지 -->
      <div class="upload-image"></div>
      <div class="filters">
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
        <div class="filter-1"></div>
      </div>
    </div>

    <div v-if="step== 2">
      <!-- 글작성페이지 -->
      <div class="upload-image"></div>
      <div class="write">
        <textarea class="write-box">write!</textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  name: "Container",
  data() {
    return {};
  },
  components: {
    Post: Post,
  },
  props: {
    postData: Array,
    step: Number,
  },
};
</script>

<style>
@import "./../assets/Container.css";
</style>