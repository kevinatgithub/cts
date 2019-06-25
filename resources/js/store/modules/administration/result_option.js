const result_option = {
    state : {
        result_options : [],
    },
    getters : {
        result_options(state){
            return state.result_options
        },
    },
    mutations : {
        initResultOptions(state,payload){
            state.result_options = payload
        },
    },
    actions : {
        initResultOptions(context,payload){
            context.commit('initResultOptions',payload)
        },
        fetchResultOptions(context,payload){
            return window.$http.get('/resultoptions')
        },
        newResultOption(context,payload){
            return window.$http.post('/resultoptions/new',payload)
        },
        updateResultOption(context,payload){
            return window.$http.post('/resultoptions/update',payload)
        },
        deleteResultOption(context,payload){
            return window.$http.delete('/resultoptions',payload)
        },
    }

}

export {result_option}