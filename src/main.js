import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router/router'
import store from './store'
import App from './App.vue'
import Vuex from 'vuex'

import axios from 'axios'
import VueAxios from 'vue-axios'

import * as fb from 'firebase'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(Vuex);

Vue.use(VueAxios, axios);



/* eslint-disable no-new */
new Vue({
    el: "#app",
    render: h => h(App),
    store,
    router,
    created(){
        fb.initializeApp({
            apiKey: "AIzaSyDPFj5DyA8_uB4jblmD3eRGfK8242P6c7M",
            authDomain: "betace-bfeb6.firebaseapp.com",
            databaseURL: "https://betace-bfeb6.firebaseio.com",
            projectId: "betace-bfeb6",
            storageBucket: "betace-bfeb6.appspot.com",
            messagingSenderId: "24362690064"});

        fb.auth().onAuthStateChanged(user => {
            if (user){
                this.$store.dispatch('autoLoginUser',user)
            }
        })

    }

});

