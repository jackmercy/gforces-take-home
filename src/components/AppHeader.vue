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
@import '../assets/scss/material';
    #app {
        padding-top: 32px;
        text-align: center;
        color: white;
        background-color: $primary;
        position: fixed;
        z-index: 999;
        width: 100%;
        top: 0;
    }
</style>