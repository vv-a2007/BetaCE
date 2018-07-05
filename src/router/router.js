import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../components/Home.vue'
import shoppingPage from '../components/Shopping.vue'
import Vuelidate from 'vuelidate'


import registrationPage from '../components/Auth/Registration.vue'


Vue.use(VueRouter);
Vue.use(Vuelidate)

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
        {
            path:'/registration',
            component: registrationPage
        }
    ],
    mode: 'history'
})