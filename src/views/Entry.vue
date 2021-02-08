<template>
    <div>
        <iframe src="https://giphy.com/embed/LPrAK9rEedDwjtL1J0" width="480" height="349" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p></p>
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