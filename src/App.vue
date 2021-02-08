<template>
    <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons"/>
        <app-header></app-header>
        <div class="section-container">
            <section class="content-container">
                <transition name="fade" mode="out-in">
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
    font-family: "Roboto";
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
    height: 100%;
}

.fade-enter-active,
.fade-leave-active {
    transition-duration: 0.5s;
    transition-property: opacity;
    transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0
}
</style>
