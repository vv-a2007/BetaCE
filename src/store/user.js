class User {
    constructor(id){
        this.id=id
    }
}


export default {
    state:{
        user:null
    },
    mutations:{
        setUser (state, payload) {
            state.user=payload
        }
    },
    actions:{
        registerUser({commit},{email,passw}){

        }
    },
    getters:{
        user(state){return state.user}
    }
}