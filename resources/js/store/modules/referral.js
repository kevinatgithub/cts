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
                "created_dt": 1560763099658, "id": 0 
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
        receiveReferral(state, payload) {
            let referral = _.find(state.referrals, { id: payload.id, })
            _.extend(referral, payload)
        },
    },
    actions: {
        fetchReferral(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(i => {
                    let referral = _.find(context.getters.referrals, { donation_id: payload.donation_id })
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
        receiveReferral(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(i => {
                    context.commit('receiveReferral', payload)
                    resolve(true)
                }, 500)
            })
        }
    },
}

export { referral }