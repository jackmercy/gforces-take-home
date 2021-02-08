import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import Vue from 'vue'
import App from './App.vue'
import {
    MdButton,
    MdContent,
    MdTabs
} from 'vue-material/dist/components'
import router from './router'
import store from './vuex/index';

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
