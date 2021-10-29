<template>
  <div class="content-body">
    <button class="songInfoBtn" @click="showInfo()">Song Info</button>
    <div class="content-songInfo" v-if="info == true">
      <table class="content-table container text-center">
        <tr>
          <th>composer</th>
          <td>
            {{ songData.composer }}
          </td>
        </tr>
        <tr>
          <th>title</th>
          <td>
            {{ songData.title }} {{ songData.opus }} {{ songData.tonality }}
          </td>
        </tr>
        <tr>
          <th>instrument</th>
          <td>
            {{ songData.instrument }}
          </td>
        </tr>
        <tr>
          <th>style</th>
          <td>
            {{ songData.style }}
          </td>
        </tr>
        <tr>
          <th>birth</th>
          <td>
            {{ songData.birth }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "content",
  props: {
    songData: Object,
  },
  data(){
      return{
          info : false,
      }
  },
  methods :{
      showInfo(){
          if(this.info == false){
              this.info = true;
          } else {
              this.info = false;
          }
      }
  }
};
</script>

<style>
</style>