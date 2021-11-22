<template>
  <div class="post">
    <div class="post-header">
      <div class="profile">
        <img class="profile" :src="postData.userImage" />
      </div>
      <span class="profile-name">{{ postData.name }}</span>
    </div>
    <div
      @click="$store.commit('like')"
      :class="postData.filter"
      class="post-body"
      :style="{ backgroundImage: `url(${postData.postImage})` }"
    >
      {{ postData.filter }}
      <!-- <img class="post-body" :src="postData.postImage" /> -->
    </div>
    <div class="post-content">
      <p>{{ $store.state.likes }}</p>
      <p>
        <strong>{{ postData.name }}</strong> {{ postData.content }}
      </p>
      <p class="date">{{ postData.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  data() {
    return {};
  },
  components: {},
  props: {
    postData: Array,
    liked: Boolean,
  },
};
</script>

<style>
@import "./../assets/Post.css";
</style>