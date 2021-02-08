<template lang="">
    <div class="book-view">
        <h1 class="title">{{ title }}</h1>
        <md-button @click="fetchBooks()" class="md-primary">Get books</md-button>
        <div class="book-container">
            <div v-if="isLoading" class="loader"></div>
            <div v-if="isSuccess" class="content">
                List of books
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'BookView',
    data() {
        return {
            title: '40 Stephen King novels'
        };
    },
    methods: {
        fetchBooks() {
            this.$store.dispatch('startfetchBookList');
        }
    },
    computed: {
        ...mapGetters(['isLoading', 'isSuccess', 'books']),
    },
    created() {
        this.$store.dispatch('startfetchBookList');
    }
}
</script>
<style>
    .title {
        font-weight: normal;    
    }
    .loader {
        border: 16px solid #f3f3f3;
        border-radius: 50%;
        border-top: 16px solid #3498db;
        width: 120px;
        height: 120px;
        -webkit-animation: spin 2s linear infinite; /* Safari */
        animation: spin 2s linear infinite;
    }
    /* Safari */
    @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    }

</style>
