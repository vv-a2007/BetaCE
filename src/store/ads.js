import * as fb from 'firebase'

class Add {
    constructor(title, description, ownerId, imageSrc="", id = null){
        this.title = title;
        this.description = description;
        this.ownerId = ownerId;
        this.imageSrc = imageSrc;
        this.id = id
    }

}

export default {
    state : {
        ads : [

            ]
    },
    mutations : {
        createAdd (state, payload){
            state.ads.push(payload)
        }
    },
    actions : {
        async createAd ({commit}, payload) {
         //   payload.id='iiiiuyy';
            commit('clearError');
            commit('setLoading', true);
            try {
                const newAd = new Ad(payload.title, payload.description, getters.user.id,payload.imgSrc);
                const ad = await fb.database().ref('ads').push(newAd);
                commit('setLoading', false);
                commit('createAd',{...newAd, id: ad.key})
            }
            catch (error) {
                commit('setError',error.message);
                commit('setLoading', false);
                throw error
            }
        }
    },
    getters : {
        ads (state){
            return state.ads
        },
        adById (state){
            return adId => {return state.ads.find(ad => ad.id === adId)}
        }
    }

}