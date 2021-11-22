<template>
  <div
    @click="fire"
    class="filter-item"
    :style="{ backgroundImage: `url(${uploadImageUrl})` }"
    style="color: black"
  >
    <!-- {{ filter }} -->
    <slot name="filterName"></slot>
  </div>
</template>

<script>
export default {
  name: "filterbox",
  data() {
    return {};
  },
  props: {
    uploadImageUrl: String,
    filter: Array,
  },
  methods: {
    fire() {
      console.log(this.filter);
      this.emitter.emit("callFilterName", this.filter);
    },
  },
};
</script>

<style>
@import "./../assets/FilterBox.css";
</style>