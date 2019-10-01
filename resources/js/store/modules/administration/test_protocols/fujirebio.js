const fujirebio = {
    state : {
        particle_agglutination : null,
        serodia_hiv_interpretation : null,
    },
    getters : {
        particle_agglutination(state){
            return state.particle_agglutination
        },
        serodia_hiv_interpretation(state){
            return state.serodia_hiv_interpretation
        },
    },
    mutations : {
        initParticleAgglutination(state,payload){
            state.particle_agglutination = payload
        },
        initSerodiaFinalInterpretation(state,payload){
            state.serodia_hiv_interpretation = payload
        },
    },
    actions : {
        // ============================ particle_agglutination=====================================
        async fetchParticleAgglutination(context,payload){
            let request = await window.$http.get('/particle_agglutinations')
            context.commit('initParticleAgglutination',request.data)
        },
        newParticleAgglutination(context,payload){
            return window.$http.post('/particle_agglutinations/new',payload)
        },
        updateParticleAgglutination(context,payload){
            return window.$http.post('/particle_agglutinations/update',payload)
        },
        deleteParticleAgglutination(context,payload){
            return window.$http.delete('/particle_agglutinations',payload)
        },
        // ============================= serodia_hiv_final_status_options==============================
        async fetchSerodiaFinalInterpretation(context,payload){
            let request = await window.$http.get('/serodia_hiv_interpretations')
            context.commit('initSerodiaFinalInterpretation',request.data)
        },
        newSerodiaFinalInterpretation(context,payload){
            return window.$http.post('/serodia_hiv_interpretations/new',payload)
        },
        updateSerodiaFinalInterpretation(context,payload){
            return window.$http.post('/serodia_hiv_interpretations/update',payload)
        },
        deleteSerodiaFinalInterpretation(context,payload){
            return window.$http.delete('/serodia_hiv_interpretations',payload)
        },
    }
}

export {fujirebio}