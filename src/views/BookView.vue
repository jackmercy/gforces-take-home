<template>
    <div class="book-view">
        <h1 class="title text-center">{{ title }}</h1>
        <div class="sort-container">
            <div class="select">
                <select id="standard-select" v-model="sortOption">
                    <option value="default">Default</option>
                    <option value="volumeInfo.averageRating-desc">Highest rating</option>
                    <option value="volumeInfo.averageRating-asc">Lowest rating</option>
                    <option value="volumeInfo.publishedDate-desc">Newest published date</option>
                    <option value="volumeInfo.publishedDate-asc">Oldest published date</option>
                </select>
            </div>
        </div>
        <div v-if="showNote">
            <span class="note-message"><strong>Note: </strong><i>Lack of response in some books may affect the end result of sorting. Sorry for the inconvenience.</i></span>
            <md-button @click="dismissNote()">
                Dismiss
            </md-button>
        </div>
        <div class="book-container">
            <div v-if="isLoading" class="loader text-center">
                <md-progress-spinner class="spinner" :md-diameter="100" :md-stroke="5" md-mode="indeterminate"></md-progress-spinner>
            </div>
            <div v-if="isSuccess" class="content">
                <div class="md-layout md-gutter md-alignment-left">
                    <div v-for="book in books" :key="book.id" class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                        <md-card md-with-hover v-bind:id="book.id">
                            <md-card-media>
                                <img class="thumbnail" v-bind:src="book.volumeInfo.imageLinks.smallThumbnail" alt="Book thumbnail">
                            </md-card-media>

                            <md-card-header class="text-center">
                                <div class="md-title">{{ book.volumeInfo.title }}</div>
                                <div class="md-subhead">{{ book.volumeInfo.authors[0] }}</div>
                                <star-rating v-bind:value="book.volumeInfo.averageRating" :disabled="true"></star-rating>
                                <div>{{ book.volumeInfo.publishedDate }}</div>
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
import StarRating from '../components/StarRating';
export default {
    name: 'BookView',
    components: {
        StarRating
    },
    data: () => ({
        title: 'Stephen King novels',
        sortOption: 'default',
        showNote: true
    }),
    watch: {
        sortOption: function(value, oldValue) {
            if (value === 'default') {
                this.$store.dispatch('startfetchBookList');
            } else {
                const selectedSort = value.split('-');
                this.sortBy(selectedSort[0], selectedSort[1]);
            }
        }
    },
    methods: {
        fetchBooks() {
            if (!!books || books?.length === 0) {
                this.$store.dispatch('startfetchBookList');
            }
        },
        goToBookDetails(id) {
            this.$router.push({ name: 'bookDetails', params: { bookId: id } });
        },
        sortBy(key, direction) {
            this.$store.dispatch('sortBookBy', { activeKey: key, direction: direction });
        },
        dismissNote() {
            this.showNote = false;
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
<style lang="scss">
@import '../assets/scss/select';
    .text-center {
        text-align: center;
    }
    .text-left {
        text-align: left;
    }
    .book-view, .book-container {
        height: 100%;
    }
    .note-message {
            height: 44px;
            display: inline-block;
            line-height: 48px;
            white-space: nowrap;
            margin-right: -8px;
        }
    .book-container {
        .loader {
            height: calc(100vh - 484px);
            .spinner {
                top: 30%;
                transform: translateY(-50%);
            }
        }
        .sort-container {
            width: 200px;
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
    }
    
    
    .title {
        font-size: 2.5em;
        color: sienna;
        margin-bottom: 64px;
    }
</style>
