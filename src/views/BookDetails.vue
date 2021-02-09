<template>
    <div class="container">
        <md-button @click="goToBooks()" class="md-primary">
            <md-icon>keyboard_backspace</md-icon> Back to books
        </md-button>
        <div v-if="isLoading" class="loader">
            <md-progress-spinner class="spinner" :md-diameter="100" :md-stroke="5" md-mode="indeterminate"></md-progress-spinner>
        </div>
        <div v-if="isSuccess">
            <md-card md-with-hover class="card-info">
                <div class="md-layout md-gutter">
                    <div class="thumbnail md-layout-item md-size-35 md-xsmall-size-100">
                        <img v-bind:src="bookDetails.volumeInfo.imageLinks.smallThumbnail" alt="Book thumbnail" width="200px">   
                    </div>
                    <div class="md-layout-item md-size-65 md-xsmall-size-100">
                        <div class="md-layout md-gutter md-alignment-left">
                            <div class="info md-layout-item md-size-100">
                                <h1 class="title">
                                    {{ bookDetails.volumeInfo.title }}<span v-if="bookDetails.volumeInfo.subtitle">: {{ bookDetails.volumeInfo.subtitle }}</span>
                                </h1>
                                <div class="author">{{ bookDetails.volumeInfo.authors[0] }} - <span class="publish-date">{{ bookDetails.volumeInfo.publishedDate }}</span></div>
                                <div class="publisher">
                                    {{ bookDetails.volumeInfo.publisher }}
                                </div>
                                <div>
                                    <star-rating v-bind:value="bookDetails.volumeInfo.averageRating" :disabled="true"></star-rating>
                                    <span class="pt-16"><strong>Rating count: </strong>{{ bookDetails.volumeInfo.ratingsCount }}</span>
                                    <div class="pt-16"><span><strong>Page count: </strong>{{ bookDetails.volumeInfo.pageCount }}</span></div>
                                </div>
                                <div class="btn-preview">
                                    <md-button @click="goToPreview(bookDetails.volumeInfo.previewLink)" class="md-dense md-raised md-primary">
                                        Preview
                                    </md-button>
                                </div>
                                <div class="pt-16" v-for="category in bookDetails.volumeInfo.categories" :key="category">
                                    <md-chip>{{ category }}</md-chip>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-large-size-100 md-medium-size-100 md-small-size-100 md-xsmall-size-100">
                        <p class="description">
                            <span v-html="bookDetails.volumeInfo.description" ></span>
                        </p>
                    </div>
                </div>
            </md-card>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import StarRating from '../components/StarRating';
    export default {
        name: 'BookDetails',
        components: {
            StarRating,
        },
        computed: {
            ...mapGetters('bookdetailsModule', ['bookDetails', 'isLoading', 'isSuccess'])
        },
        methods: {
            goToPreview(url) {
                window.open(url);
            },
            goToBooks() {
                this.$router.push({ path: '/books/' });
            },
            fetchBookDetails() {
                const id = this.$router.params.bookId;
                this.$store.dispatch('bookdetailsModule/startfetchBookDetails', id);
            }
        },
        watch: {
            '$router' (to, from) {
                this.fetchBookDetails();
            }
        },
        created() {
            if (!this.$router.params) {
                this.$store.dispatch('bookdetailsModule/startfetchBookDetails', this.$router.history.current.params.bookId);
            }
        },
    }
</script>

<style lang="scss" scoped>
$normalText: #212121;
.pt-16 {
    padding-top: 16px;
}
.container {
    margin: auto;
    width: 55%;
    .card-info {
        width: 100%;
    }
    .loader {
        text-align: center;
    }
    .info {
        .title {
            color: $normalText;
            font-size: 30px;
            font-weight: 300;
            line-height: 35px;
            margin: 25px 0 10px 0;
            text-align: left;
        }
        .author {
            color: #01579b;
        }
        .publish-date {
            color: $normalText;
        }
        .publisher {
            padding-top: 4px;
            color: #616161;
        }
        .btn-preview {
            margin-left: -8px;
            margin-top: 8px;
        }
    }
    .description {
        padding: 16px;
    }
}
</style>