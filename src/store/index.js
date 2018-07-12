import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import share from './share'

Vue.use(Vuex);

export default new Vuex.Store ({
    modules:{
        user, share
    }
})