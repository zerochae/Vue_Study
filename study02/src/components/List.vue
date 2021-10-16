<template>
  <div>
    <div :v-for="(list,i) in blog" :key="list">
      <!-- <h5 @click="$router.push('/detail/')">{{ blog[i].title }}</h5> -->
      <!-- <p>{{ blog[i].date }}</p> -->
      {{blog}}
    </div>
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {};
  },
  props: {
    blog: Array,
  },
};
</script>

<style>
</style>