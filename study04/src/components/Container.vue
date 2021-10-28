<template>
  <div>
    <div v-if="step == 0">
      <Post :postData="list" v-for="list in postData" :key="list" />
    </div>

    <div v-if="step == 1">
      <!-- 필터선택페이지 -->
      <div
        :class="filterName"
        class="upload-image"
        :style="{ backgroundImage: `url(${uploadImageUrl})` }"
      ></div>
      <div class="filters">
        <FilterBox
          v-for="filter in filterData"
          :key="filter"
          :class="filter"
          :uploadImageUrl="uploadImageUrl"
          :filter="filter"
        >
          <template v-slot:filterName>{{ filter }}</template>
        </FilterBox>
      </div>
    </div>

    <div v-if="step == 2">
      <!-- 글작성페이지 -->
      <div
        :class="filterName"
        class="upload-image"
        :style="{ backgroundImage: `url(${uploadImageUrl})` }"
      ></div>
      <div class="write">
        <textarea class="write-box" @input="contentData"></textarea>
      </div>
    </div>
    <div v-if="step==3">
      <Mypage/>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";
import filterData from "./../assets/filterData.js";
import Mypage from "./Mypage.vue";

export default {
  name: "Container",
  data() {
    return {
      content: "",
      filterData: filterData,
      filterName: "",
    };
  },
  components: {
    Post: Post,
    FilterBox: FilterBox,
    Mypage : Mypage, 
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
  mounted() {
    this.emitter.on("callFilterName", (data) => {
      this.filterName = data;
    });
  },
};
</script>

<style>
@import "./../assets/Container.css";
</style>