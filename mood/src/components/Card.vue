<template>
  <div>
       {{ songData[0].composer }}
       {{ songData[0].title }}
       {{ songData[0].opus }}
       {{ songData[0].tonality }}
  </div>
</template>

<script>

    


export default {
    name : "Card",
    data(){

    },
    props : {
      songData : Object,
    }
}
</script>

<style>

</style>