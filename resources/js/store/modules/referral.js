const referral = {
    state : {
        referrals : []
    },
    getters : {
        referrals(state){
            return state.referrals
        }
    },
    mutations : {
        newReferral(state,payload){
            state.referrals.push(payload)
        },
    },
    actions : {
        newReferral(context,payload){
            return new Promise((resolve,reject) => {
                setTimeout(i=>{
                    context.commit('newReferral',payload)
                    resolve(true)
                },500)
            })
        }
    },
}

export {referral}