const referral = {
    state: {
        referrals: [],
        on_watch : null,
        unstored_referrals : [],
    },
    getters: {
        referrals(state) {
            return state.referrals
        },
        on_watch(state){
            return state.on_watch
        },
        unstored_referrals(state){
            return state.unstored_referrals
        }
    },
    mutations: {
        newReferral(state, payload) {
            state.referrals.push(payload)
        },
        receiveOrRejectReferral(state, payload) {
            let referral = _.find(state.referrals, r => {
                return r.donation_id.toUpperCase() == payload.donation_id.toUpperCase()
            })
            _.extend(referral, payload)
        },
        setReferralCryoboxAndRefrigeratorDetails(state,payload){
            let referral = _.find(state.referrals,{confirmatory_reference_number : payload.confirmatory_reference_number})
            _.extend(referral,payload)
        },
        setFacility(state,payload){
            let referral = _.find(state.referrals, r => {
                return r.donation_id.toUpperCase() == payload.donation_id.toUpperCase()
            })
            _.extend(referral, payload)
        },
        setReferralOnWatch(state,payload){
            state.on_watch = payload
        },
        initUnstoredReferrals(state,payload){
            state.unstored_referrals = payload
        }
    },
    actions: {
        fetchReferral(context, payload) {
            return window.$http.post('referral',{donation_id : payload})
        },
        fetchReferralbyCR(context, payload) {
            return window.$http.post('referralByCR',{confirmatory_reference_number:payload})
        },
        newReferral(context, payload) {
            return window.$http.post('newReferral',payload)
        },
        receiveOrRejectReferral(context, payload) {
            return window.$http.post('receiveOrRejectReferral',payload)
        },
        setReferralCryoboxAndRefrigeratorDetails(context,payload){
            return window.$http.post('setReferralCryoboxAndRefrigeratorDetails',payload)
        },
        setFacility(context,payload){
            return new Promise((resolve,reject) => {
                setTimeout(i=>{
                    context.commit("setFacility",payload)
                    resolve(true)
                },500)
            })
        },
        setReferralOnWatch(context,payload){
            context.commit('setReferralOnWatch',payload)
        },
        setReferralResultBSF(context,payload){
            return window.$http.post("setReferralResultBSF",payload)
        },
        async fetchUnstoredReferrals(context,payload){
            let req = await $http.get('/referrals/unstored')
            context.commit('initUnstoredReferrals',req.data)
        },
        setReferralCryobox(context,payload){
            return $http.post('referral/cryobox',payload)
        }
    },
}

export { referral }