<template>
  <div>
    <div v-if="step == 0">
      <Post :postData="list" v-for="list in postData" :key="list" />
    </div>

    <div v-if="step == 1">
      <!-- 필터선택페이지 -->
      <div
        class="upload-image"
        :style="{ backgroundImage: `url(${uploadImageUrl})` }"
      ></div>
      <div class="filters">
        <FilterBox v-for="filter in filterData" :key="filter" :class="filter" :uploadImageUrl="uploadImageUrl" :filter="filter"/>
      </div>
    </div>

    <div v-if="step == 2">
      <!-- 글작성페이지 -->
      <div class="upload-image"></div>
      <div class="write">
        <textarea class="write-box" @input="contentData"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";
import filterData from "./../assets/filterData.js";

export default {
  name: "Container",
  data() {
    return {
      content: "",
      filterData : filterData,
    };
  },
  components: {
    Post: Post,
    FilterBox: FilterBox,
  },
  props: {
    postData: Array,
    step: Number,
    uploadImageUrl: String,
  },
  methods: {
    contentData(e) {
      this.$emit("callContent", e.target.value);
    },
  },
};
</script>

<style>
@import "./../assets/Container.css";
</style>