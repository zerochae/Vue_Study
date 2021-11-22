<template>
  <div class="black-bg" v-if="isOpen == true">
    <div class="white-bg">
      <h4>{{ oneRooms[info].title }}</h4>
      <p>{{ oneRooms[info].content }}</p>
      <!-- <input @input="month = $event.target.value"> -->
      <input v-model="month">
      <p> {{month}}개월 : {{ oneRooms[info].price * month }}원</p>
      <button @click="closeModal()">닫아라</button>
    </div>
  </div>
</template>
 
<script>

export default {
    name : "Modal",
    data(){
      return{
        month : 3,
      };
    },
    props : {
      oneRooms : Array,
      isOpen : Boolean,
      info : Number,
    },
    methods : {
      closeModal(){
        this.$emit('closeModal')
        this.month = 3
      }
    },
    beforeUpdate(){
      if(this.month < 3){
        alert("3개월부터 받아요")
        this.month = 3
      }
    },
    watch : {
      month(value){
        if(value > 12){
          alert("13 이상 입력 ㄴㄴ");
          this.month = 3;
        }
        if(typeof value == 'string'){
          alert("문자 입력 ㄴㄴ")
          this.month = 3;
        }
      }
    }
}
</script>

<style>

</style>