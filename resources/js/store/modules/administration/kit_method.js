const kit_method = {
    state : {
        kit_methods : [],
    },
    getters : {
        kit_methods(state){
            return state.kit_methods
        },
    },
    mutations : {
        initKitMethods(state,payload){
            state.kit_methods = payload
        },
    },
    actions : {
        initKitMethods(context,payload){
            context.commit('initKitMethods',payload)
        },
        async fetchKitMethods(context,payload){
            let request = await window.$http.get('/kit_methods')
            context.commit('initKitMethods',request.data)
        },
        newKitMethod(context,payload){
            return window.$http.post('/kit_methods/new',payload)
        },
        updateKitMethod(context,payload){
            return window.$http.post('/kit_methods/update',payload)
        },
        deleteKitMethod(context,payload){
            return window.$http.delete('/kit_methods',payload)
        },
    }

}

export {kit_method}