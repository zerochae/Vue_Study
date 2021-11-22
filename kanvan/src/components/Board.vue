<template>
  <div class="kanvan-container">
    <div v-for="(list, i) in listData" :key="i" :class="list.title">
      <p>{{ list.kor_name }} <button @click="showInput(i)">+</button></p>
      <Draggable v-model="listData[i].memos" itemKey="content" group="memo" @change="log">
        <template  #item="item">
          <div class="list-item" :class="{dragOnMove: isDrag}" @drag="isDrag=true" @dragend="isDrag=false">
            <p :id="`memo-p-line-${item.element.id}`">
            {{item.index}} 
            {{item.element.user_name}}
              {{ item.element.user_name }} {{ item.element.content }}
              <button :id="`memo-btn-${item.element.id}`" v-if="item.index !== ''" @click="deleteKanvanBoard(list,i, item.index, item.element.id)">
                X
              </button>
            </p>
          </div>
        </template>
      </Draggable>
      <input
        @keydown.enter="addKanvanBoard(i)"
        v-model="input"
        v-if="list.showInput == true"
      />
    </div>
  </div>
</template>

<script>
// import Card from "./Card.vue";
import Draggable from "vuedraggable";

export default {
  components: {
    Draggable,
  },
  data() {
      return {
      isDrag: false,
      input: "",
      inputIndex: -1,
      deleteBtn: true,
      userName: "zerochae",
      listData: [
        {
          title: "beforeViewImpl",
          kor_name: "화면 미 구현",
          showInput: false,
          memos: [
            {
              // beforeViewImpl
              id: "1-1",
              user_name: "zerochae",
              content: "test1",
            },
          ],
        },
        {
          title: "viewImplemented",
          kor_name: "화면 구현 완료",
          showInput: false,
          memos: [
            {
              // viewImplemented
              id: "2-1",
              user_name: "zerochae",
              content: "test2",
            },
          ],
        },
        {
          title: "beforeApiImpl",
          kor_name: "API 개발 전",
          showInput: false,
          memos: [
            {
              // beforeApiImpl
              id: "3-1",
              user_name: "zerochae",
              content: "test3",
            },
          ],
        },
        {
          title: "apiImpling",
          kor_name: "API 개발 중",
          showInput: false,
          memos: [
            {
              // apiImpling
              id: "4-1",
              user_name: "zerochae",
              content: "test4",
            },
          ],
        },
        {
          title: "apiImplemented",
          kor_name: "API 개발 완료",
          showInput: false,
          memos: [
            {
              // apiImplemented
              id: "5-1",
              user_name: "zerochae",
              content: "test5",
            },
          ],
        },
      ],
    };
  },
  methods: {
    log(){
      console.log(this.listData)  
      console.log(this.isDrag)
    },
    dragOn(id) {
      console.log(`drag on ${id}`);
    },
    showInput(i) {
      this.input = "";

      if (this.inputIndex != -1) {
        this.listData[this.inputIndex].showInput = false;
      }
      this.listData[i].showInput = true;
      this.inputIndex = i;
    },
    addKanvanBoard(i) {
      var id = this.listData[i].memos.length;

      this.listData[i].memos.push([{
        id: `${i + 1}-${id + 1}`,
        user_name: this.userName,
        content: this.input,
      }]);
      this.input = "";
      console.log(this.listData[i].memos);
      this.listData[i].showInput = false;
    },
    deleteKanvanBoard(arr,i, j, key) {

        var length = arr.length;
        var newArr = [];


        for(let k =0; k<length; k++){
                if(k !== j){
                newArr.push(arr[k]);
            }
        }
        this.listData[i].memos[j] = newArr; 
        document.getElementById('memo-p-line-'+key).innerHTML = "";





    }
  },
};
</script>

<style>
</style>