<template>
  <div class="content-body">
    <button class="songInfoBtn" @click="showInfo()">Song Info</button>
    <div class="content-songInfo" v-if="info == true">
      <table>
        <tr>
          <td>composer</td>
          <td>
            {{ songData.composer }}
          </td>
        </tr>
        <tr>
          <td>title</td>
          <td>
            {{ songData.title }} {{ songData.opus }} {{ songData.tonality }}
          </td>
        </tr>
        <tr>
          <td>instrument</td>
          <td>
            {{ songData.instrument }}
          </td>
        </tr>
        <tr>
          <td>style</td>
          <td>
            {{ songData.style }}
          </td>
        </tr>
        <tr>
          <td>birth</td>
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