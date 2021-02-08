<template>
    <div class="book-view">
        <h1 class="title text-center">{{ title }}</h1>
        <div class="book-container">
            <div v-if="isLoading" class="loader text-center">
                <md-progress-spinner class="spinner" :md-diameter="100" :md-stroke="5" md-mode="indeterminate"></md-progress-spinner>
            </div>
            <div v-if="isSuccess" class="content">
                <select v-model="selected">
                    <option disabled value="">Please select one</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    </select>
                <span>Selected: {{ selected }}</span>
                <div class="md-layout md-gutter md-alignment-left">
                    <div v-for="book in books" :key="book.id" class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                        <md-card md-with-hover v-bind:id="book.id">
                            <md-card-media>
                                <img class="thumbnail" v-bind:src="book.volumeInfo.imageLinks.smallThumbnail" alt="Book thumbnail">
                            </md-card-media>

                            <md-card-header class="text-center">
                                <div class="md-title">{{ book.volumeInfo.title }}</div>
                                <div class="md-subhead">{{ book.volumeInfo.authors[0] }}</div>
                            </md-card-header>

                            <md-card-expand>
                                <md-card-actions md-alignment="space-between">
                                <div>
                                    <md-button @click="goToBookDetails(book.id)">Details</md-button>
                                </div>

                                <md-card-expand-trigger>
                                    <md-button>Learn more</md-button>
                                </md-card-expand-trigger>
                                </md-card-actions>

                                <md-card-expand-content>
                                <md-card-content class="text-left">
                                    <span v-html="book.searchInfo.textSnippet" ></span><br/><br/>
                                    <md-chip v-for="category in book.volumeInfo.categories" :key="category" class="md-primary" md-clickable>{{ category }}</md-chip>
                                </md-card-content>
                                </md-card-expand-content>
                            </md-card-expand>
                        </md-card>
                    </div>
                </div>
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
            title: 'Stephen King novels',
            selected: ''
        };
    },
    methods: {
        fetchBooks() {
            if (!!books || books?.length === 0) {
                this.$store.dispatch('startfetchBookList');
            }
        },
        goToBookDetails(id) {
            this.$router.push({ name: 'bookDetails', params: { bookId: id } });
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
    .text-center {
        text-align: center;
    }
    .text-left {
        text-align: left;
    }
    .book-view, .book-container {
        height: 100%;
    }
    .loader {
        height: calc(100vh - 484px);
    }
    .spinner {
        top: 30%;
        transform: translateY(-50%);
    }
    .title {
        font-size: 2.5em;
        color: sienna;
        margin-bottom: 64px;
    }
    .card-expansion {
        height: 480px;
    }

    .md-layout-item {
        margin-top: 16px;
    }

    .md-card {
        width: 320px;
        margin: 4px;
        display: inline-block;
        vertical-align: top;
    }
    .thumbnail {
        aspect-ratio: 1;
    }
</style>
