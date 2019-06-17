const user = {
    state : {
        users : [
            {
                username : 'ritm', facility_cd : 'RITM', 
                name : 'Juan Karlos', position : 'RMT'
            },
            {
                username : 'bsf', facility_cd : 'BSF', 
                name : 'Rico Blanko', position : 'RMT',
            },
        ],
        user : null,
    },
    getters : {
        users(state){
            return state.users
        },
        user(state){
            return state.user
        }
    },
    mutations : {
        initUser(state,payload){
            state.user = payload
        },
    },
    actions : {
        initUser(context,payload){
            context.commit('initUser',payload)
        },
        attemptLogin(context,payload){
            return new Promise((resolve,reject) => {
                setTimeout(i=>{
                    let user  = _.find(context.getters.users,{username : payload.username})
                    resolve(user)
                },500)
            })
        },
    }
}

export {user}