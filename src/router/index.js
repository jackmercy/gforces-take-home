import Vue from 'vue'
import VueRouter from 'vue-router'
// views
const bookView = () => import('../components/BookView');
const notfoundView = () => import('@/components/NotFound');
const entryView = () => import('@/components/Entry');

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
