<template>
  <Container
    class="h-full flex overflow-x-auto gap-8 p-8"
    group-name="cols"
    tag="div"
    orientation="horizontal"
    @drop="onColumnDrop($event)"
  >
    <Draggable
      class="
        bg-gray-200
        dark:bg-gray-700
        rounded-lg
        h-full
        w-96
        flex-shrink-0
        shadow-xl
      "
      v-for="(column, index) in scene.children"
      :key="index"
    >
      <div class="h-full flex flex-col">
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
          "
        >
          <span class="text-lg">{{ column.name }}</span>
          <button @click="showInput(index)">+</button>
        </div>
        <!-- column -->
        <Container
          class="flex-grow overflow-y-auto overflow-x-hidden"
          orientation="vertical"
          group-name="col-items"
          :shouldAcceptDrop="
            (e, payload) => e.groupName === 'col-items' && !payload.loading
          "
          :get-child-payload="getCardPayload(column.id)"
          :drop-placeholder="{
            className: `bg-primary bg-opacity-20  
            border-dotted border-2 
            border-primary rounded-lg mx-4 my-2`,
            animationDuration: '200',
            showOnTop: true,
          }"
          drag-class="bg-primary dark:bg-primary 
            border-2 border-primary-hover text-white 
            transition duration-100 ease-in z-50
            transform rotate-6 scale-110"
          drop-class="transition duration-100 
            ease-in z-50 transform 
            -rotate-2 scale-90"
          @drop="(e) => onCardDrop(column.id, e)"
        >
          <!-- Items -->
          <KanbanItem
            v-for="item in column.children"
            :key="item.id"
            :item="item"
          ></KanbanItem>
          <input
            type="text"
            v-model="input"
            v-if="scene.children[index].showInput == true"
            @keydown.enter="addCard(index)"
          />
        </Container>
      </div>
    </Draggable>
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

const scene = {
  type: "container",
  props: {
    orientation: "horizontal",
  },
  children: generateItems(boardTitle_kor.length, (i) => ({
    id: `column${i}`,
    type: "container",
    // name: generateWords( boardTitle_kor[i] ),
    name: boardTitle_kor[i],
    showInput: false,
    props: {
      orientation: "vertical",
    },
    children: generateItems(7, (j) => ({
      type: "draggable",
      id: `${i}-${j}`,
      loading: false,
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
      scene,
      // boardTitle_en,
      boardTitle_kor,
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
  mounted() {
    console.log(scene);
    console.log(boardTitle_kor);
  },
  methods: {
    showInput(i) {
      this.input = "";

      if (-1 !== this.openInput) {
        this.scene.children[this.openInput].showInput = false;
      }
      this.scene.children[i].showInput = true;
      this.openInput = i;
    },
    getColumnHeightPx() {
      let kanban = document.getElementById("kanbanContainer");
      return kanban ? kanban.offsetHeight - 122 : 0;
    },
    onColumnDrop(dropResult) {
      const scene = Object.assign({}, this.scene);
      scene.children = applyDrag(scene.children, dropResult);
      this.scene = scene;
    },
    onCardDrop(columnId, dropResult) {
      // check if element where ADDED or REMOVED in current collumn
      if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
        const scene = Object.assign({}, this.scene);
        const column = scene.children.filter((p) => p.id === columnId)[0];
        const itemIndex = scene.children.indexOf(column);
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

        newColumn.children = applyDrag(newColumn.children, dropResult);
        scene.children.splice(itemIndex, 1, newColumn);
        this.scene = scene;
      }
    },
    getCardPayload(columnId) {
      return (index) => {
        return this.scene.children.filter((p) => p.id === columnId)[0].children[
          index
        ];
      };
    },
    addCard(i) {
      
      console.log(i);
      var id = this.scene.children.length;

      this.scene.children[i].children.push({
        type: "draggable",
        id: `${i}-${id}`,
        user_name: "zerochae",
        content: this.input,
      });
        this.input = ""
    },
    removeCard(i){
      console.log(i);
    }
  },
};
</script>
<style>
/** NB: dont remove, 
* When using orientation="horizontal" it auto sets "display: table"
* In this case we need flex and not display table  
*/
.smooth-dnd-container.horizontal {
  display: flex !important;
}
</style>