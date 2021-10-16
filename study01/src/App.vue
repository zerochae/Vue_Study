<template>
<div>
  <!-- <div class="black-bg" v-if="isOpen == true">
    <div class="white-bg">
      <h4>{{ oneRooms[info].title }}</h4>
      <p>{{ oneRooms[info].content }}</p>
      <p>{{ oneRooms[info].price }}원</p>
      <button @click="isOpen = false">닫아라</button>
    </div>
  </div> -->

  <!-- <Modal :데이터이름="데이터이름" /> -->
  <!-- <Modal v-bind데이터이름="데이터이름" /> -->
  <!-- <div class="start" :class="{ end : isOpen }"> -->
  <transition name="fade">
  <Modal @closeModal="isOpen = false;" :oneRooms="oneRooms" :isOpen="isOpen" :info="info" />
  </transition>
  <!-- </div> -->
  <div class="menu">
    <!-- <a href="">Home</a>
    <a href="">Products</a>
    <a href="">About</a>
   -->

    <!-- 반복문으로  -->
    <a v-for="title in menu" :key="title">{{ title }}</a>
  </div>

  <Discount v-if="showDiscount == true" :discountRate="discountRate"/>

  <button @click="lowPriceSort"> 정렬 (가격 오름차순) </button>
  <button @click="highPriceSort"> 정렬 (가격 내림차순) </button>
  <button @click="nameSort"> 정렬 (이름순) </button>
  <button @click="sortBack"> 정렬 (되돌리기) </button>

  <!-- <div>
    <span :style="style">원룸샵</span>
    <h4>{{ products[0] }}</h4>
    <p>{{ price[0] }} 만원</p>
  </div>
 
  <div>
    <h4>{{ products[1] }}</h4>
    <p>{{ price[1] }} 만원</p>
  </div>

  <div>
    <h4>{{ products[2] }}</h4>
    <p>{{ price[2] }} 만원</p>
  </div> -->
<!-- 
  <Card :Room="oneRooms[0]"/>
  <Card :Room="oneRooms[1]"/>
  <Card :Room="oneRooms[2]"/>
  <Card :Room="oneRooms[3]"/>
  <Card :Room="oneRooms[4]"/>
  <Card :Room="oneRooms[5]"/> -->

  <Card @openModal="isOpen = true; info= $event" :Room="oneRooms[i]" :v-for="(Room,i) in oneRooms" :key="Room"/>
</div>
  <!-- 반복문으로  -->
   
</template>

<script>
  import oneRoomData from "./assets/oneroom.js";
  import Discount from "./assets/Discount.vue";
  // import Rooms from "./assets/Rooms.vue";
  import Modal from "./assets/Modal.vue";
  import Card from "./assets/Card.vue";

  export default {
    name: "App",
    data() {
      return {
        discountRate : 30,
        showDiscount : true,
        originalOneRoom : [...oneRoomData],
        isOpen: false,
        style: "color:blue",
        // products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
        // price: ["50", "60", "70"],
        menu: ["Home", "Shop", "About"],
        // count: [0,0,0,0,0],
        // img: ["./assets/room0.jpg", "./assets/room1.jpg", "./assets/room2.jpg"],
        info: 0,
        count: [0, 0, 0, 0, 0, 0],
        oneRooms: oneRoomData,
      };
    },
    components: {
      Discount: Discount,
      // Rooms: Rooms,
      Modal: Modal,
      Card: Card,
    },
    mounted() {
        setInterval(() => {
          // this.showDiscount = false;
          if(this.discountRate > 0) this.discountRate -= 1;
        }, 1000);
    },
    methods: {
      goReport(i) {
        this.count[i]++;
      },
      lowPriceSort(){
        this.oneRooms.sort(function(a,b){
          return a.price - b.price;
        });
      },
      highPriceSort(){
        this.oneRooms.sort(function(a,b){
          return b.price - a.price;
        });
      },
      nameSort(){
        this.oneRooms.sort(function(a,b){
          if( a.title > b.title) return 1;
          if( b.title > a.title) return -1;
          return 0;
        });
      },
      sortBack(){
        return this.oneRooms = [...this.originalOneRoom];
      },
  }
}

</script>

<style>

.fade-leave-from{  /* 시작 css */
  opacity: 1;

} 
.fade-leave-active{
  transition: all 1s;
}
.fade-leave-to{ /* 끝 css */
  opacity: 0;
}

.fade-enter-from{  /* 시작 css */
  transform : translateY(-1000px);

} 
.fade-enter-active{
  transition: all 1s;
}
.fade-enter-to{ /* 끝 css */
  transform : translateY(0px);
}


 .start{
    opacity: 0;
    transition: all 1s;
  }
  
  .end{
    opacity: 1;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }



  .menu {
    background: darkslateblue;
    padding: 15px;
    border-radius: 5px;
  }

  .menu a {
    color: white;
    padding: 10px;
  }

  .room-img {
    margin-top: 40px;
  }

  body {
    margin: 0;
  }

  div {
    box-sizing: border-box;
  }

  .black-bg {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    padding: 20px;
  }

  .white-bg {
    width: 100%;
    background: white;
    border-radius: 8px;
    padding: 20px;
  }

  .discount {
    background: #eee;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
  }

</style>