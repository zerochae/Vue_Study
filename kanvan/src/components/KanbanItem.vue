<template>
  <Draggable v-if="item">
    <div
      class="
        cursor-move
        my-2
        mx-4
        rounded-lg
        shadow-md
        bg-gray-100
        dark:bg-gray-800
        hover:border-2
        border-primary
      "
    >
      <div class="p-4 space-y-2">
        <div
          class="rounded-lg bg-primary p-2 w-max h-max inline-block box-content"
        >
        </div>
        <p>{{ emoji }} {{ item.user_name }}</p>
        <p>{{ item.content }}</p>
      </div>
    </div>
  </Draggable>
</template>

<script>
import { getRandomEmoji } from "../utils/helpers";
import { Draggable } from "vue3-smooth-dnd";
// import { RefreshIcon } from '@heroicons/vue/outline'
export default {
  name: "KanbanItem",
  components: {
    Draggable,
    //   RefreshIcon
  },
  data() {
    return {
      emoji: getRandomEmoji(),
    };
  },
  props: {
    item: Object,
  },
};
</script>