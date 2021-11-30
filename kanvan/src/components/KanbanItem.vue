<template>
  <Draggable v-if="item">
    <div
      class="
        rounded-lg
        shadow-md
        bg-gray-100
        dark:bg-gray-800
        hover:border-2
        border-primary
        card-container
      "
    >
      <div
        v-if="item.loading"
        class="
          flex
          space-x-2
          bg-gray-50
          text-gray-900
          dark:text-gray-200 dark:bg-gray-900
          px-4
          py-2
          rounded-t-lg
        "
      >
        <RefreshIcon
          class="icons spin"
          viewBox="0 0 24 24"
        />
        <span>Processing...</span>
      </div>
      <div class="card-space">
        <div
          class="
            card
            rounded-lg
            bg-primary
            p-2
            w-max
            h-max
            inline-block
            box-content
          "
        >
        <p>
          {{ emoji }} {{ item.user_name }}
          <DotsHorizontalIcon @click="showCardMenu(columnIndex,cardIndex)" class="icons" style="float: right" />
        </p>
        </div>
        <transition name="showMenu">
        <div class="card-in-menu" v-if="item.showCardInMenu==true" :id="`cardMenu${columnIndex}${cardIndex}`">
          <p><PencilIcon @click="updateCard(columnIndex,cardIndex)"  class="icons" /> 수정 </p>
          <p @click="deleteCard(columnIndex,cardIndex)"><TrashIcon  class="icons" /> 삭제 </p>
        </div>
        </transition>
        <p>{{ item.content }}</p>
      </div>
    </div>
  </Draggable>
</template>

<script>
import { getRandomEmoji } from "../utils/helpers";
import { Draggable } from "vue3-smooth-dnd";
import {
  DotsHorizontalIcon,
  TrashIcon,
  PencilIcon,
  RefreshIcon,
} from "@heroicons/vue/outline";
export default {
  name: "KanbanItem",
  components: {
    Draggable,
    DotsHorizontalIcon,
    TrashIcon,
    PencilIcon,
    RefreshIcon,
  },
  data() {
    return {
      emoji: getRandomEmoji(),
      nowMenu: [-1,-1],
    };
  },
  props: {
    item: Object,
    columnIndex: Number,
    cardIndex: Number,
  },
  methods:{
    showCardMenu(i,j){
      var indexArr = [i,j];
      this.emitter.emit('showCardMenus',indexArr)
    },
    deleteCard(i,j){
      var indexArr = [i,j];
      this.emitter.emit('deleteCardItem',indexArr)
    },
    updateCard(i,j){
      var indexArr = [i,j];
      this.emitter.emit('udpateCardItem',indexArr)
    }
  }
};
</script>