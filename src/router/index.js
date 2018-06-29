import Vue from 'vue'
import VueRouter from 'vue-router'

import homePage from '../components/Home.vue'
import shoppingPage from '../components/Shopping.vue'


Vue.use(VueRouter);


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
            path:'*',
            component: homePage
        }
    ],
    mode: 'history'
})