import Vue from 'vue'
import VueRouter from 'vue-router'

import Vuelidate from 'vuelidate'

import homePage from '../components/Home.vue'
import shoppingPage from '../components/Shopping.vue'
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
            component: shoppingPage
        },


    ],
    mode: 'history'
})