import Axios from "axios";

const user = {
    state : {
        users : [],
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
        initUsers(state,payload){
            state.users = payload
        }
    },
    actions : {
        async fetchUsers(context,payload){
            let users = await window.$http.get('users')
            context.commit('initUsers',users.data)
        },
        initUser(context,payload){
            context.commit('initUser',payload)
        },
        attemptLogin(context,payload){
            return window.$http.post('users/login',payload)
        },
        verifierLogin(context,payload){
            let user = context.getters.user
            if(user.username == payload.username){
                return new Promise((resolve,reject)=>{
                    resolve(false)
                })
            }else{
                return window.$http.post('verifierLogin',payload)
            }
        },
        newUser(context,payload){
            return window.$http.post('newUser',payload)
        },
        updateUser(context,payload){
            return window.$http.post('updateUser',payload)
        },
        deleteUser(context,payload){
            return window.$http.post('deleteUser',payload)
        },
    }
}

export {user}