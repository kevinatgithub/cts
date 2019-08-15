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
        },
        initCryoboxes(state,payload){
            state.cryoboxes = payload
        }
    },
    actions : {
        newCryobox(context,payload){
            context.commit('newCryobox',payload)
        },
        async fetchCryoboxes(context,payload){
            let request = await $http.get('/cryoboxes')
            context.commit('initCryoboxes',request.data)
        },
        addCryobox(context,payload){
            return $http.post('/cryoboxes',payload)
        },
        async checkCryoboxNo(context,payload){
            let request = await $http.get('/cryobox',payload.cryobox_no)
            if(request.data){
                payload.exists(request.data)
            }else{
                payload.ok()
            }
        },
        updateCryobox(context,payload){
            return $http.put('/cryoboxes',payload)
        },
        deleteCryobox(context,payload){
            return $http.delete('/cryoboxes',payload)
        }
    }
}

export {cryobox}