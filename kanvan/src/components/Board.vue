<template>
  <Container
    class="h-full flex overflow-x-auto gap-8 p-8"
    group-name="cols"
    tag="div"
    orientation="horizontal"
    @drop="onColumnDrop($event)"
  >
    <!-- kanvan column :  bg-gray-200
        dark:bg-gray-700
        rounded-lg
        h-full
        w-96
        flex-shrink-0
        shadow-xl-->
    <div
      class="kanvanContainer"
      v-for="(column, index) in kanvan.columns"
      :key="index"
    >
      <div class="">
        <!-- header-->
        <div
          class="
            cursor-move
            rounded-t-lg
            p-4
            space-x-4
            bg-primary
            text-white
            flex
            space-x-2
            kanvan-title
          "
        >
          <span class="text-lg">{{ column.name }} </span>
          <button @click="showInput(index)">+</button>
        </div>
        <!-- column -->
        <!-- place : `bg-primary bg-opacity-20  
            border-dotted border-2 
            border-primary rounded-lg mx-4 my-2`-->
        <!-- drop : 
            ease-in z-50 transform-rotate-2 scale-90-->
        <Draggable class="kanvan-column">
          <Container
            class="flex-grow overflow-y-auto overflow-x-hidden"
            orientation="vertical"
            group-name="col-items"
            :shouldAcceptDrop="
              (e, payload) => e.groupName === 'col-items' && !payload.loading
            "
            :get-child-payload="getCardPayload(column.id)"
            :drop-placeholder="{
              className: `drop-placeholder`,
              animationDuration: '200',
              showOnTop: true,
            }"
            :dragClass="`cardGhostDrag`"
            :dropClass="`cardGhostDrop`"
            @drop="(e) => onCardDrop(column.id, e)"
          >
            <!-- Items -->
            <!-- ssh commit test-->
            <KanbanItem
              v-for="(item, cardIndex) in column.cards"
              :key="item.id"
              :columnIndex="index"
              :cardIndex="cardIndex"
              :item="item"
            />
            <input
              type="text"
              v-model="input"
              v-if="kanvan.columns[index].showInput == true"
              @keydown.enter="addCard(index)"
            />
          </Container>
        </Draggable>
      </div>
    </div>
  </Container>
</template>

<script>
import KanbanItem from "../components/KanbanItem.vue";
import { Container, Draggable } from "vue3-smooth-dnd";
import { generateItems, generateWords, applyDrag } from "../utils/helpers";

const boardTitle_kor = [
  "화면 미 구현",
  "화면 구현 완료",
  "API 개발 전",
  "API 개발 중",
  "API 개발 완료",
];

const kanvan = {
  type: "container",
  props: {
    orientation: "horizontal",
  },
  columns: generateItems(boardTitle_kor.length, (i) => ({
    id: `${i}`,
    // type: "container",
    // name: generateWords( boardTitle_kor[i] ),
    name: boardTitle_kor[i],
    showInput: false,
    props: {
      // orientation: "vertical",
    },
    cards: generateItems(7, (j) => ({
      // type: "draggable",
      id: `${i}-${j}`,
      loading: false,
      showCardInMenu: false,
      user_name: "zerochae",
      content: generateWords(Math.random() * 12 + 2),
    })),
  })),
};

export default {
  components: {
    Container,
    Draggable,
    KanbanItem,
  },
  data() {
    return {
      openInput: -1,
      input: "test",
      nowOpen: [-1, -1],
      kanvan,
      dropCheck:[],
      // boardTitle_en,
      boardTitle_kor,
      // listData: [
      //   {
      //     title: "beforeViewImpl",
      //     kor_name: "화면 미 구현",
      //     showInput: false,
      //     memos: [
      //       {
      //         // beforeViewImpl
      //         id: "1-1",
      //         user_name: "zerochae",
      //         content: "test1",
      //       },
      //     ],
      //   },
      //   {
      //     title: "viewImplemented",
      //     kor_name: "화면 구현 완료",
      //     showInput: false,
      //     memos: [
      //       {
      //         // viewImplemented
      //         id: "2-1",
      //         user_name: "zerochae",
      //         content: "test2",
      //       },
      //     ],
      //   },
      //   {
      //     title: "beforeApiImpl",
      //     kor_name: "API 개발 전",
      //     showInput: false,
      //     memos: [
      //       {
      //         // beforeApiImpl
      //         id: "3-1",
      //         user_name: "zerochae",
      //         content: "test3",
      //       },
      //     ],
      //   },
      //   {
      //     title: "apiImpling",
      //     kor_name: "API 개발 중",
      //     showInput: false,
      //     memos: [
      //       {
      //         // apiImpling
      //         id: "4-1",
      //         user_name: "zerochae",
      //         content: "test4",
      //       },
      //     ],
      //   },
      //   {
      //     title: "apiImplemented",
      //     kor_name: "API 개발 완료",
      //     showInput: false,
      //     memos: [
      //       {
      //         // apiImplemented
      //         id: "5-1",
      //         user_name: "zerochae",
      //         content: "test5",
      //       },
      //     ],
      //   },
      // ],
    };
  },
  mounted() {

    this.emitter.on("showCardMenus", (e) => {
      let i = e[0];
      let j = e[1];
      let k = this.nowOpen[0];
      let m = this.nowOpen[1];

      // 같은 거 누를 때

      // 다른거 누룰 때

      if (k > -1 && !(i == k && j == m)) {
        this.kanvan.columns[k].cards[m].showCardInMenu = false;
      } 
      this.kanvan.columns[i].cards[j].showCardInMenu = !this.kanvan.columns[i].cards[j].showCardInMenu;
      this.nowOpen[0] = i;
      this.nowOpen[1] = j;
    });

    this.emitter.on('deleteCardItem', (e) => {

      
      let i = e[0];
      let j = e[1];

      console.log(this.kanvan)

      // console.log(this.kanvan.columns[i])

      this.kanvan.columns[i].splice(j, 1);


    });


  },
  methods: {
    showInput(i) {
      this.input = "";

      if (-1 !== this.openInput) {
        this.kanvan.columns[this.openInput].showInput = false;
      }
      this.kanvan.columns[i].showInput = true;
      this.openInput = i;
    },
    getColumnHeightPx() {
      let container = document.getElementById("kanbanContainer");
      return container ? container.offsetHeight - 122 : 0;
    },
    onColumnDrop(dropResult) {
      const kanvan = Object.assign({}, this.kanvan);
      kanvan.columns = applyDrag(kanvan.columns, dropResult);
      this.kanvan = kanvan;
    },
    onCardDrop(columnId, dropResult) {

      // if(this.dropCheck.length > 1){

      //   if(this.dropCheck[0] < 2 && this.dropCheck[1] > 1){ // 0,1
      //     return false;
      //   } else if(this.dropCheck[0] > 1 && this.dropCheck[1] < 2){
      //     return false;
      //   }
      // }

      // check if element where ADDED or REMOVED in current column
      if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
        this.dropCheck.push(columnId)
        console.log(columnId)
        const kanvan = Object.assign({}, this.kanvan);
        const column = kanvan.columns.filter((p) => p.id === columnId)[0];
        const itemIndex = kanvan.columns.indexOf(column);
        const newColumn = Object.assign({}, column);
        // check if element was ADDED in current column
        if (dropResult.removedIndex == null && dropResult.addedIndex >= 0) {
          // your action / api call
          dropResult.payload.loading = true;
          // simulate api call
          setTimeout(function () {
            dropResult.payload.loading = false;
          }, Math.random() * 5000 + 1000);
        }
        newColumn.cards = applyDrag(newColumn.cards, dropResult);
        kanvan.columns.splice(itemIndex, 1, newColumn);
        this.kanvan = kanvan;
      }
    },
    getCardPayload(columnId) {
      return (index) => {
        return this.kanvan.columns.filter((p) => p.id === columnId)[0].cards[
          index
        ];
      };
    },
    addCard(i) {
      var id = this.kanvan.columns.length;

      this.kanvan.columns[i].cards.push({
        type: "draggable",
        id: `${i}-${id}`,
        user_name: "zerochae",
        content: this.input,
      });
      this.input = "";
    },
    removeCard(i) {
      console.log(i)
    },
  },
};
</script>
<style>
.smooth-dnd-container.horizontal {
  display: flex !important;
}
</style>