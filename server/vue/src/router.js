import Vue from 'vue';
import VueRouter from "vue-router";
import store from "./store"
import ChatsPage from "./pages/ChatsPage";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        component: ChatsPage,
        name: 'home',
        meta: {
            requireAuth: true
        }
    }, {
        path: '/login',
        component: Login,
        name: 'login',
        meta: {
            visitor: true
        }
    }, { path: "*", component: PageNotFound }]
})
router.beforeEach(async(to, from, next) => {
    if (to.matched.some(req => req.meta.requireAuth)) {
        if (store.state.auth.user) {
            next();
        } else {
            next('/login');
        }
    } else if (to.matched.some(req => req.meta.visitor)) {
        if (store.state.auth.user) {
            next('/');
        } else {
            next();
        }
    } else {
        next();
    }
});
export default router