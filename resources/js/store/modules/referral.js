const referral = {
    state: {
        referrals: [
            { 
                "donation": { "donation_id": "NVBSP20190000111", "blood_type": "A POS", "donation_dt": "2018-11-05", "reactiveResults": ["HIV"], "facility": { "facility_name": "Philippine Blood Center" } }, 
                "courier": { "fname": null, "mname": null, "lname": null, "contact_no": null, "provider": 0, "reference_no": "1" }, 
                "courierMode": "Courier", 
                "donation_id": "NVBSP20190000111", 
                "confirmatory_reference_no": null, 
                "specimen": { id : 0, name : 'SPL 1'}, 
                "request_by": { "username": "bsf", "facility_cd": "BSF", "name": "Rico Blanko", "position": "RMT" }, 
                "created_dt": "2019-06-17T12:38:45.982Z", "id": 0 
            }
        ]
    },
    getters: {
        referrals(state) {
            return state.referrals
        }
    },
    mutations: {
        newReferral(state, payload) {
            state.referrals.push(payload)
        },
        receiveOrRejectReferral(state, payload) {
            let referral = _.find(state.referrals, r=> {
                return r.donation_id.toUpperCase() == payload.donation_id.toUpperCase()
            })
            _.extend(referral, payload)
        },
    },
    actions: {
        fetchReferral(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(i => {
                    let referral = _.find(context.getters.referrals, { donation_id: payload })
                    resolve(referral)
                }, 500)
            })
        },
        newReferral(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(i => {
                    payload.id = context.getters.referrals.length
                    context.commit('newReferral', payload)
                    resolve(true)
                }, 500)
            })
        },
        receiveOrRejectReferral(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(i => {
                    context.commit('receiveOrRejectReferral', payload)
                    resolve(true)
                }, 500)
            })
        }
    },
}

export { referral }