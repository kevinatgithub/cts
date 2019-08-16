const bsfreferral = {
    state : {
        referrals : [],
    },
    getters : {

    },
    actions : {
        fetchBSFReferrals(context,payload){
            return window.$http.get("bsf/referrals",payload)
        }
    },
}

export {bsfreferral}