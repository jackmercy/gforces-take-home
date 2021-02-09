import Vue from 'vue';
import Vuex from 'vuex';
import appService  from '../services/app.service';
import bookdetailsModule from '@/vuex/bookdetails';
import * as _ from 'lodash';

Vue.use(Vuex);


const state = {
    getBookListStatus: undefined,
    books: [],

}

const store = new Vuex.Store({
    modules: {
        bookdetailsModule,
    },
    state,
    getters: {
        isLoading: (state) => {
            return state.getBookListStatus === true;
        },
        isSuccess: (state) => {
            return state.books.length > 0 && state.getBookListStatus === false;
        },
        books: (state) => {
            return state.books;
        }
    },
    actions: {
        startfetchBookList (context) {
            context.commit('startfetchBookList');
            return new Promise((resolve) => {
                appService.getBooks().then((data) => {
                    // trigger action update list book and set status to success.
                    context.commit('fetchBookListSuccess', data.data.items);
                    resolve(data.data.items);
                })
                .catch(() => window.alert('Could not get the books'))
            });
        },
        sortBookBy(context, payload) {
            context.commit('startSortBooks', payload);
        }
    },
    mutations: {
        startfetchBookList (state) {
            state.getBookListStatus = true;
        },
        fetchBookListSuccess (state, data) {
            state.getBookListStatus = false;
            state.books = data;
        },
        startSortBooks(state, payload) {
            state.getBookListStatus = true;
            const sortedBooks = _.orderBy(state.books, payload.activeKey, payload.direction);
            state.books = sortedBooks;
            // simulate http requests
            setTimeout(() => state.getBookListStatus = false, 1000);
        }
    }
});

export default store;
