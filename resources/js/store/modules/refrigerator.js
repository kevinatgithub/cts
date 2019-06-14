const refrigerator = {
    state : {
        refrigerators : []
    },
    getters : {
        refrigerators(state){
            return state.refrigerators
        }
    },
    mutations : {
        newRefrigerator(state,payload){
            state.refrigerators.push(payload)
        },
        updateRefrigerator(state,payload){
            let ref = _.find(state.refrigerators,{id:payload.id})
            _.extend(ref,payload)
        },
        deleteRefrigerator(state,payload){
            state.refrigerators = _.filter(state.refrigerators,r=>{
                return r.id != payload.id
            })
        }
    },
    actions : {
        newRefrigerator(context,payload){
            return new Promise((resolve,reject) => {
                setTimeout(i=>{
                    let ref = {
                        id : context.getters.refrigerators.length,
                        name : payload
                    }
                    context.commit("newRefrigerator",ref)
                    resolve(true)
                },500)
            })
        },
        updateRefrigerator(context,payload){
            return new Promise((resolve,reject) => {
                setTimeout(i=>{
                    context.commit('updateRefrigerator',payload)
                    resolve(true)
                },500)
            })
        },
        deleteRefrigerator(context,payload){
            return new Promise((resolve,reject) => {
                setTimeout(i=>{
                    context.commit('deleteRefrigerator',payload)
                    resolve(true)
                },500)
            })
        }
    }
}

export {refrigerator}