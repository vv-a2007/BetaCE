import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router/router'
import store from '../src/store'
import App from './App.vue'
import VueResource from 'vue-resource'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
    el: "#app",
    render: h => h(App),
    store,
    router,
    http: {
        root: '/root',
        headers: {
            Authorization: 'Basic YXBpOnBhc3N3b3Jk'
        }
    }
});

