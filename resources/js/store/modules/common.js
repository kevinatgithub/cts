const common = {
    state : {
        cryobox : {
            rows : 9,
            columns : 9
        }
    },
    getters : {
        cryobox : state => {
            return state.cryobox
        }
    },
    mutations : {
        cryobox(state,payload){
            state.cryobox.rows = payload.rows
            state.cryobox.columns = payload.columns
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
        }
    }
}
export {common}