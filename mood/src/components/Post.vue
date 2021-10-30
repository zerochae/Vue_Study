<template>
  <div class="post-body">
    <div class="card-section row">
      <Card
        :composer="composer"
        v-for="composer in composers"
        :key="composer"
      />
    </div>
    <Info/>
  </div>
</template>

<script>
import Card from "./Card.vue";
import Info from "./Info.vue";
import axios from "axios";

export default {
  components: {
    Card,
    Info,
  },
  data() {
    return {
      composers : "",
    };
  },
  created: function composers() {
    axios.get("http://192.168.0.45:8011/composer").then((result) => {
      this.composers = result.data;
    });
  },
};
</script>

<style>
</style>