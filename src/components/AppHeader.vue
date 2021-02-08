<template>
    <div id="app">
        <img class="logo" src="../assets/logo.svg" />
        <h2>{{ msg }}</h2>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'AppHeader',
        data() {
            return {
                msg: "Technical Challenge",
            };
        }
    }
</script>

<style lang="scss" scoped>

</style>