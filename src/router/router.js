import Vue from 'vue'
import VueRouter from 'vue-router'

import Vuelidate from 'vuelidate'
import AuthGuard from './auth-guard'
import homePage from '../components/Home.vue'
import shoppingPage from '../components/Shopping.vue'
import newAd from '../components/newAd.vue'
import loginPage from '../components/Auth/Login.vue'
import registrationPage from '../components/Auth/Registration.vue'


Vue.use(VueRouter);
Vue.use(Vuelidate);

export default new VueRouter ({
    routes:[
        {
            path:'',
            component: homePage
        },

        {
            path:'/shopping',
            component: shoppingPage,
            beforeEnter: AuthGuard
        },
        {
            path:'/newad',
            component: newAd,
            beforeEnter: AuthGuard
        }

    ],
    mode: 'history'
})