import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import 'vue-material/dist/theme/default.css';
import "@/assets/scss/material.scss";
import {
    MdButton,
    MdContent,
    MdCard,
    MdProgress,
    MdChips,
    MdField
} from 'vue-material/dist/components'

export default {
    install(Vue) {
        Vue.use(VueMaterial);
        Vue.use(MdButton);
        Vue.use(MdContent);
        Vue.use(MdCard);
        Vue.use(MdProgress);
        Vue.use(MdChips);
        Vue.use(MdField);
    }
}
