const reject_reason = {
    state : {
        reject_reasons : [],
    },
    getters : {
        reject_reasons(state){
            return state.reject_reasons
        },
    },
    mutations : {
        initRejectReasons(state,payload){
            state.reject_reasons = payload
        },
    },
    actions : {
        initRejectReasons(context,payload){
            context.commit('initRejectReasons',payload)
        },
        async fetchRejectReasons(context,payload){
            let request = await window.$http.get('/reject_reasons')
            context.commit('initRejectReasons',request.data)
        },
        newRejectReason(context,payload){
            return window.$http.post('/reject_reasons',payload)
        },
        updateRejectReason(context,payload){
            return window.$http.put('/reject_reasons',payload)
        },
        deleteRejectReason(context,payload){
            return window.$http.delete('/reject_reasons',payload)
        },
    }

}

export {reject_reason}