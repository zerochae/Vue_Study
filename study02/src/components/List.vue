<template>
  <div>
    <div v-for="(list,index) in blog" :key="list">
      <h5 @click="$router.push('/detail/'+index)">{{ blog[index].title }}</h5>
       <p>{{ blog[index].date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {
    };
  },
  props: {
    blog : Array,
  },
};
</script>

<style>
</style>