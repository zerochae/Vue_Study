<template>
  <!-- 반복문으로  -->
  <div v-for="(title, i) in oneRooms" :key="title">
    <!-- <img src="./assets/room0.jpg" class="room-img" style="width:300px;height:200px;"> -->
    <img :src="oneRooms[i].image" class="room-img" style="width: 300px; height: 200px"/>
    <h4 @click="isOpen = true; info = i" :id="oneRooms[i].id">{{ oneRooms[i].title }}</h4>
    <!-- <h4>{{ products[i] }} <button v-on:click="">report</button> </h4>  -->
    <p>{{ oneRooms[i].price }}원</p>
    <button @click="goReport(i)">report</button>
    <span> count : {{ count[i] }} </span>
  </div>
</template>

<script>

import oneRooms from './oneroom.js';

export default {
    name : 'Rooms',
    oneRooms : oneRooms,
    count: [0, 0, 0, 0, 0, 0],
}
</script>

<style>

</style>