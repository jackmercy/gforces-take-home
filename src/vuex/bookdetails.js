import Vue from 'vue';
import Vuex from 'vuex';
import appService  from '../services/app.service';

const state = {
    getDetailsStatus: undefined,
    bookDetails: undefined
}

const getters = {
    isLoading: (state) => {
        return state.getDetailsStatus === true;
    },
    isSuccess: (state) => {
        return state.bookDetails != undefined && state.getDetailsStatus === false;
    },
    bookDetails: (state) => {
        return state.bookDetails;
    }
}

const actions = {
    startfetchBookDetails (context, payload) {
        context.commit('startfetchBookDetails');
        return new Promise((resolve) => {
            appService.getBookDetails(payload).then((data) => {
                // trigger action update list book and set status to success.
                context.commit('fetchBookDetailsSuccess', data.data);
                resolve(data.data);
            })
            .catch(() => window.alert('Could not get the book details'))
        });
    },
    resetState(context) {
        context.commit('resetState');
    }
}

const mutations = {
    startfetchBookDetails (state) {
        state.getDetailsStatus = true;
        state.bookDetails = undefined;
    },
    fetchBookDetailsSuccess (state, data) {
        state.getDetailsStatus = false;
        state.bookDetails = data;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
