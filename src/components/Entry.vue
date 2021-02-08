<template>
    <div>
        <md-button @click="goToBookView()" class="md-primary">{{ reply }}</md-button>
    </div>
</template>

<script>
    export default {
        name: 'Entry',
        data() {
            return {
                reply: "Challenge accepted".toUpperCase(),
            };
        },
        methods: {
            goToBookView() {
                this.$router.push("books");
            },
        },
    }
</script>

<style scoped>

</style>