<template>
    <div v-for="list in listData[index]" :key="list">
        asdasd
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    props: {
        listData : Object,
        index : Object,
    }
};
</script>

<style>
</style>