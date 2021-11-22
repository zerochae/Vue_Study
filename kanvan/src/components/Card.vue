<template>
    <div>
        <p>{{ card.user_name }} {{ card.memo }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    props: {
        card : Object,
    }
};
</script>

<style>
</style>