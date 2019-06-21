const cryobox = {
    state : {
        cryoboxes : []
    },
    getters : {
        cryoboxes(state){
            return state.cryoboxes
        }
    },
    mutations : {
        newCryobox(state,payload){
            state.cryoboxes.push(payload)
        }
    },
    actions : {
        newCryobox(context,payload){
            context.commit('newCryobox',payload)
        }
    }
}

export {cryobox}