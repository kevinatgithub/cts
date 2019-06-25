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
        fetchKitMethods(context,payload){
            return window.$http.get('/kitmethods')
        },
        newKitMethod(context,payload){
            return window.$http.post('/kitmethods/new',payload)
        },
        updateKitMethod(context,payload){
            return window.$http.post('/kitmethods/update',payload)
        },
        deleteKitMethod(context,payload){
            return window.$http.delete('/kitmethods',payload)
        },
    }

}

export {kit_method}