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

<style scoped>
    #app {
        padding-top: 32px;
        text-align: center;
        color: #303840;
        background-color: #faecec;
        position: fixed;
        z-index: 999;
        width: 100%;
        top: 0;
    }
</style>