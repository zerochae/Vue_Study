<template>
    <div
      class="filter-item"
      :style="{ backgroundImage: `url(${uploadImageUrl})`}"
      style="color:black"
    >{{filter}}</div>
</template>

<script>
export default {
  name: "filterbox",
  data() {
    return {};
  },
  props: {
    uploadImageUrl: String,
    filter : Array
  },
};
</script>

<style>
@import "./../assets/FilterBox.css";
</style>