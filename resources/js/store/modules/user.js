const user = {
    state : {
        user : null,
    },
    getters : {
        user(state){
            return state.user
        }
    },
    mutations : {
        initUser(state,payload){
            let user = payload.user
            if(user){
                state.user = user
            }
        },
    },
    actions : {
        initUser(context,payload){
            context.commit('initUser',payload)
        },
        attemptLogin(context,payload){
            return new Promise((resolve,reject) => {
                setTimeout(i=>{
                    if(payload.username == 'ritm'){
                        let user  = {
                            username : 'ritm', facility_cd : 'RITM', 
                            name : 'Juan Karlos', position : 'RMT'
                        }
                        context.dispatch('initUser',user)
                        resolve(user)
                    }else{
                        resolve(false)
                    }
                },500)
            })
        },
    }
}

export {user}