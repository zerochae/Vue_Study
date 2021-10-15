<template>
 

     <!-- 반복문으로  -->
  <!-- <div v-for="(title, i) in oneRooms" :key="title"> -->
    <!-- <img src="./assets/room0.jpg" class="room-img" style="width:300px;height:200px;"> -->
    <!-- <img -->
      <!-- :src="oneRooms[i].image" -->
      <!-- class="room-img" -->
      <!-- style="width: 300px; height: 200px" -->
    <!-- /> -->
    <!-- <h4 @click="isOpen = true; info = i" :id="oneRooms[i].id">{{ oneRooms[i].title }}</h4> -->
    <!-- <h4>{{ products[i] }} <button v-on:click="">report</button> </h4>  -->
    <!-- <p>{{ oneRooms[i].price }}원</p> -->
    <!-- <button @click="goReport(i)">report</button> -->
    <!-- <span> count : {{ count[i] }} </span> -->
  <!-- </div> -->

  <div>
    <img :src="Room.image" class="room-img" style="width:300px;height:200px;">
    <h4 @click="openModal()">{{Room.title}}</h4>
    <p>{{Room.price}}원</p>
  </div>

</template>



<script>


export default {
  name: "Card",
  props: {
    Room : Object,
  },
  methods : {
    openModal(){
      this.$emit('openModal',this.Room.id)
    }
  }
};
</script>

<style>
</style>