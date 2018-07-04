import Vue from 'vue'
import VueRouter from 'vue-router'
import router from '../src/router'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueRouter);



/* eslint-disable no-new */
new Vue({
    el: "#app",
    render: h => h(App),
    router
});
