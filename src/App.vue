<template>
    <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons"/>
        <app-header></app-header>
        <div class="section-container">
            <section class="content-container">
                <transition mode="in-out">
                    <router-view></router-view>
                </transition>
            </section>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import AppFooter from './components/AppFooter.vue';

export default {
    name: "App",
    components: {
        AppHeader,
        AppFooter
    }
};
</script>

<style>
body {
    margin: 0;
    font-family: "Open Sans", sans-serif;
}

.logo {
    max-width: 500px;
}

.section-container {
    min-height: calc(100vh - 82px);
    padding: 145px 0 72px;
    margin: 0 16px;
}
.content-container {
    margin: 0 auto;
    padding: 16px;
    text-align: center;
    height: 100%;
}
</style>
