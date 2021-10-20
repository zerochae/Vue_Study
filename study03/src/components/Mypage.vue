<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="🔍" />
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">사용자명</span>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import axios from "axios";
import { onMounted } from '@vue/runtime-core';
export default {
  name: "mypage",
  data() {
    return {};
  },
  setup() {
    let follower = ref([0]);
    console.log(follower);

    onMounted(() => {
      axios.get("/follower.json").then((result) => {
        follower.value = result.data;
      });
    });
    return { follower };
  },
};
</script>

<style>
</style>