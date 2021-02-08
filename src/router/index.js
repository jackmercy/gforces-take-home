import Vue from 'vue'
import VueRouter from 'vue-router'
// views
const bookView = () => import('../views/BookView');
const notfoundView = () => import('@/views/NotFound');
const entryView = () => import('@/views/Entry');
const bookDetails = () => import('@/views/BookDetails');

Vue.use(VueRouter)

const routes = [
    {
        path: '/app',
        name: 'entry',
        component: entryView
    },
    {
        path: '/',
        redirect: '/app'
    },
    {
        path: '/books',
        name: 'books page',
        component: bookView
    },
    { path: '/books/:bookId', name: 'bookDetails', component: bookDetails },
    {
        path: '*', component: notfoundView
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: (to, from, savedPosition) => savedPosition ? savedPosition : undefined,
    routes
})

export default router
