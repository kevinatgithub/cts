const common = {
    state : {
        cryobox : {
            rows : 9,
            columns : 9
        },
        eia_results : [],
        westernblot_hiv : [],
        pcr_results : [],
        geenius_hiv_interpretation : [],
    },
    getters : {
        cryobox : state => {
            return state.cryobox
        },
        eia_results(state){
            return state.eia_results
        },
        westernblot_hiv(state){
            return state.westernblot_hiv
        },
        pcr_results(state){
            return state.pcr_results
        },
        geenius_hiv_interpretation(state){
            return state.geenius_hiv_interpretation
        },
    },
    mutations : {
        cryobox(state,payload){
            state.cryobox.rows = payload.rows
            state.cryobox.columns = payload.columns
        },
        initEiaResults(state,payload){
            state.eia_results = payload
        },
        initWesternblotHiv(state,payload){
            state.westernblot_hiv = payload
        },
        initPCR(state,payload){
            state.pcr_results = payload
        },
        initGeeniusHivInterpretation(state,payload){
            state.geenius_hiv_interpretation = payload
        },
    },
    actions : {
        setCryobox(context,payload){
            return new Promise((resolve,reject) => {
                setTimeout(i=>{
                    context.commit('cryobox',payload)
                    resolve(true)
                },500)
            })
        },
        async fetchEiaResults(context,payload){
            let request = await window.$http.get('eia_results')
            context.commit('initEiaResults',request.data)
        },
        addEiaResult(context,payload){
            return window.$http.post('eia_results/new',payload)
        },
        updateEiaResult(context,payload){
            return window.$http.post('eia_results/update',payload)
        },
        deleteEiaResult(context,payload){
            return window.$http.delete('eia_results',payload)
        },
        async fetchWesternblotHiv(context,payload){
            let request = await window.$http.get('westernblot_hiv')
            context.commit('initWesternblotHiv',request.data)
        },
        addWesternblotHiv(context,payload){
            return window.$http.post('westernblot_hiv/new',payload)
        },
        updateWesternblotHiv(context,payload){
            return window.$http.post('westernblot_hiv/update',payload)
        },
        deleteWesternblotHiv(context,payload){
            return window.$http.delete('westernblot_hiv',payload)
        },
        async fetchPCR(context,payload){
            let request = await window.$http.get('pcr_results')
            context.commit('initPCR',request.data)
        },
        addPCR(context,payload){
            return window.$http.post('pcr_results/new',payload)
        },
        updatePCR(context,payload){
            return window.$http.post('pcr_results/update',payload)
        },
        deletePCR(context,payload){
            return window.$http.delete('pcr_results',payload)
        },
        async fetchGeeniusHivInterpretation(context,payload){
            let request = await window.$http.get('geenius_hiv_interpretation')
            context.commit('initGeeniusHivInterpretation',request.data)
        },
        addGeeniusHivInterpretation(context,payload){
            return window.$http.post('geenius_hiv_interpretation/new',payload)
        },
        updateGeeniusHivInterpretation(context,payload){
            return window.$http.post('geenius_hiv_interpretation/update',payload)
        },
        deleteGeeniusHivInterpretation(context,payload){
            return window.$http.delete('geenius_hiv_interpretation',payload)
        },
    }
}
export {common}