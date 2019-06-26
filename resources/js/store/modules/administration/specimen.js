const specimens = {
    state : {
        specimens : []
    },
    getters : {
        specimens: state => {return state.specimens}
    },
    mutations : {
        initSpecimens(state,payload){
            state.specimens = payload
        },
        addSpecimen(state,payload){
            state.specimens.push(payload)
        },
        updateSpecimen(state,payload){
            let s = _.find(state.specimens,{id:payload.id})
            _.extend(s,payload)
        },
        deleteSpecimen(state,payload){
            state.specimens = _.filter(state.specimens,s=>{
                return s.id != payload.id
            })
        }
    },
    actions : {
        async fetchSpecimens(context,payload){
            let request = await window.$http.get('specimens')
            context.commit('initSpecimens',request.data)
        },
        addSpecimen(context,payload){
            return window.$http.post('specimens/new',payload)
        },
        updateSpecimen(context,payload){
            return window.$http.post('specimens/update',payload)
        },
        deleteSpecimen(context,payload){
            return window.$http.delete('specimens',payload)            
        }
    }
}

export {specimens}