<template>
    <div class="kanvan-container">
        <div v-for="(board,index) in boards" :key="index" :class="board.class">
            <p>{{board.name}} <button @click="showInput(board.class)">+</button></p>
            <!-- <List :index="index" :listData="listData" :class="`listIn${board.class} kanvanList`" draggable="true"/> -->
             <div v-for="(list,i) in listData" :key="i">
                {{listData[1]}}
            </div>
            <input @keydown.enter="addKanvan(board.class)" v-if="board.showInput==true" type="text" :class="`inputIn${board.class} kanvanInput`">
        </div>
    </div>
</template>

<script>
// import List from "./List.vue";

export default {
    components: {
        // List,
    },
    data() {
        return {
        boards : [
            {
            "name":"화면 미 구현",
            "class":"beforeViewImpl",
            "showInput":false,
            },
            {
            "name":"화면 구현 완료",
            "class":"viewImplemented",
            "showInput":false,
            },
            {
            "name":"API 개발 전",
            "class":"beforeApiImpl",
            "showInput":false,
            },
            {
            "name":"API 개발 중",
            "class":"apiImpling",
            "showInput":false,
            },
            {
            "name":"API 개발 완료",
            "class":"apiImplemented",
            "showInput":false,
            },
        ],
        listData:[{
        beforeViewImpl: ["1","2","3"],
        viewImplemented: ["1"],
        beforeApiImpl: [],
        apiImpling: [],
        apiImplemented: [],
        }],
        };
    },
    methods: {
        showInput(boardName){
            for(let i = 0; i<this.boards.length; i++){
                if(this.boards[i].class === boardName){
                    console.log("여깅"+ this.boards[i].class )
                    this.boards[i].showInput = true;
                }
            }
        },
        addKanvan(boardName){
            console.log(boardName);

            let text = document.querySelector('.inputIn'+boardName);

            this.listData.boardName += text;

            text = "";

            console.log(this.listData.boardName);

        }
    },
};
</script>

<style>


</style>