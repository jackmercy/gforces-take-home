// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'
import Vue from 'vue';
import App from './App.vue';
import Material from './plugins/material';
import router from './router'
import store from './vuex/index';

Vue.use(Material);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
