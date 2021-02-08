import Vue from 'vue';
import Vuex from 'vuex';
import appService  from '../services/app.service';

Vue.use(Vuex);


const state = {
    getBookListStatus: undefined,
    books: []
}

const store = new Vuex.Store({
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
    }
});

export default store;
