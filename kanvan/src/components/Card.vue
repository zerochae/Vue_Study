<template>
    <div>
        <p> {{$index}} {{item.content}} </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    props: {
        item : Object,
        index : Number,
    }
};
</script>

<style>
</style>