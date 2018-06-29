// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from '../src/router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import homePage from './components/Home.vue'
import shoppingPage from './components/Shopping.vue'

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue);

/* eslint-disable no-new */
new Vue({
    el: "#app",
    render: h => h(App),
    router,
    components:{BootstrapVue, homePage, shoppingPage}
});
