<template>
<html>
    <head>
        <meta charset="utf-8" />
        <meta content="width=device-width,initial-scale=1,minimal-ui" name="viewport"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons"/>
    </head>
    <body>
        <div id="app">
        <img class="logo" src="./assets/logo.svg" />
        <h2>{{ msg }}</h2>
        <h3>{{ reply }}</h3>

        <div>
            <md-button @click="goToBookView()" class="md-primary">Go to Books page</md-button>
        </div>
        </div>
        <router-view />
    </body>
</html>
</template>

<script>
export default {
    name: "App",
    data() {
    return {
        msg: "Technical Challenge",
        reply: "Challenge accepted".toUpperCase(),
    };
    },
    methods: {
        goToBookView() {
            this.$router.push("books");
        },
    },
};
</script>

<style>
body {
    margin: 0;
    font-family: "Open Sans", sans-serif;
}

#app {
    margin-top: 60px;
    text-align: center;
    color: #303840;
}

.logo {
    max-width: 500px;
}
</style>
