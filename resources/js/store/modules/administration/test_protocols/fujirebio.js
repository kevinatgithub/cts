const fujirebio = {
    state : {
        serodia_hiv : null,
        serodia_hiv_final_status_results : null,
    },
    getters : {
        serodia_hiv(state){
            return state.serodia_hiv
        },
        serodia_hiv_final_status_results(state){
            return state.serodia_hiv_final_status_results
        },
    },
    mutations : {
        initSerodia(state,payload){
            state.serodia_hiv = payload
        },
        initSerodiaFinalOptions(state,payload){
            state.serodia_hiv_final_status_results = payload
        },
    },
    actions : {
        // ============================ serodia_hiv=====================================
        initSerodia(context,payload){
            context.commit('initSerodia',payload)
        },
        fetchSerodia(context,payload){
            return window.$http.get('/serodia/options/nonfinal')
        },
        newSerodia(context,payload){
            return window.$http.post('/serodia/options/nonfinal/new',payload)
        },
        updateSerod(context,payload){
            return window.$http.post('/serodia/options/nonfinal/update',payload)
        },
        deleteSerodia(context,payload){
            return window.$http.delete('/serodia/options/nonfinal',payload)
        },
        // ============================= serodia_hiv_final_status_options==============================
        initSerodiaFinalOptions(context,payload){
            context.commit('initSerodiaFinalOptions',payload)
        },
        fetchSerodiaFinalOptions(context,payload){
            return window.$http.get('/serodia/options/final')
        },
        newSerodiaFinalOption(context,payload){
            return window.$http.post('/serodia/options/final/new',payload)
        },
        updateSerodiaFinalOption(context,payload){
            return window.$http.post('/serodia/options/final/update',payload)
        },
        deleteSerodiaFinalOption(context,payload){
            return window.$http.delete('/serodia/options/final',payload)
        },
    }
}

export {fujirebio}