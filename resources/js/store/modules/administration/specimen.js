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
        fetchSpecimens(context,payload){
            return new Promise((resolve, reject) => {
                setTimeout(i=>{
                    context.commit('initSpecimens',[
                        {id : 0, name :'SP 1'},
                        {id : 1, name :'SP 2'},
                    ])
                    resolve(true)
                },500)
                
            })
        },
        addSpecimen(context,payload){
            return new Promise((resolve,reject) => {
                setTimeout(i=>{
                    let specimen = {
                        id : context.getters.specimens.length,
                        name : payload
                    }
                    context.commit("addSpecimen",specimen)
                    resolve(true)
                },500)
            })
        },
        updateSpecimen(context,payload){
            return new Promise((resolve,reject) => {
                setTimeout(i=>{
                    context.commit("updateSpecimen",payload)
                    resolve(true)
                },500)
            })
        },
        deleteSpecimen(context,payload){
            return new Promise((resolve,reject) => {
                setTimeout(i=>{
                    context.commit('deleteSpecimen',payload)
                    resolve(true)
                },500)
            })
            
        }
    }
}

export {specimens}