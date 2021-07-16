import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store/index';
import "vuetify/dist/vuetify.min.css";
import Vuetify from "vuetify";
import VueCookies from "vue-cookies";
import Vuex from "vuex";





Vue.use(Vuex);
Vue.use(Vuetify);
Vue.use(VueCookies);
window.axios = require("axios");

let token = Vue.$cookies.get("apiToken");

store.dispatch("auth/checkAuth", token).then(() => {
    new Vue({
        el: "#app",
        vuetify: new Vuetify(),
        router,
        store,
        render: h => h(App),
        components: { App },
    });
});