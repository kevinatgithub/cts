import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
let mock = new MockAdapter(axios,{ delayResponse: 500 })
import data from './data'
let session = _.clone(data)

// mock.onGet('/users').reply(200,_.filter(users,{facility_cd : 'RITM'}))
mock.onGet('/users').reply(200,session.users)

mock.onPost('/newUser').reply(({data}) => {
    data = JSON.parse(data)
    session.users.push(data)
    return [200,data]
})

mock.onPost('/updateUser').reply(({data}) => {
    data = JSON.parse(data)
    let user = _.find(session.users,{username : data.username})
    _.extend(user,data)
    return [200,user]
})

mock.onPost('/deleteUser').reply(({data}) => {
    data = JSON.parse(data)
    session.users = _.filter(session.users,u=>{
        return u.username != data.username  
    })
    // session.users = []
    return [200,session.users]
})

mock.onPost('/verifierLogin').reply(({data})=>{
    data = JSON.parse(data)
    return [200,
        _.find(session.users,u=>{
            return u.username == data.username && u.password == data.password
        })
    ]
})

mock.onPost('/login').reply(({data})=>{
    data = JSON.parse(data)
    return [200,
        _.find(session.users,u=>{
            return u.username == data.username && u.password == data.password
        })
    ]
})

mock.onPost('/donation').reply(({data})=>{
    data = JSON.parse(data)
    return [200,
        _.find(session.donations,d=>{
            return d.donation_id.toUpperCase() == data.donation_id.toUpperCase()
        })
    ]
})

mock.onGet('/referrals').reply(200,session.referrals)

mock.onPost('/referral').reply(({data})=>{
    data = JSON.parse(data)
    return [200,
        _.find(session.referrals,r=>{
            return r.donation_id.toUpperCase() == data.donation_id.toUpperCase()
        })
    ]
})

mock.onPost('/referralByCR').reply(({data})=>{
    data = JSON.parse(data)
    let referralsWithCR = _.filter(session.referrals,r=>{
        return r.confirmatory_reference_number != null
    })
    return [200,
        _.find(referralsWithCR,r=>{
            return r.confirmatory_reference_number.toUpperCase() == data.confirmatory_reference_number.toUpperCase()
        })
    ]
}
)
mock.onPost('/newReferral').reply(({data})=>{
    data = JSON.parse(data)
    session.referrals.push(data)
    return [200, data]
})

mock.onPost('/receiveOrRejectReferral').reply(({data})=>{
    data = JSON.parse(data)
    let referral = _.find(session.referrals, r => {
        return r.donation_id.toUpperCase() == data.donation_id.toUpperCase()
    })
    _.extend(referral, data)
    return [200,referral]
})

mock.onPost('/setReferralCryoboxAndRefrigeratorDetails').reply(({data})=>{
    data = JSON.parse(data)
    let referral = _.find(session.referrals,{confirmatory_reference_number : data.confirmatory_reference_number})
    _.extend(referral,data)
    return [200,referral]
})

mock.onGet('/kitmethods').reply(200,session.kit_methods)

mock.onPost('/kitmethods/new').reply(({data})=>{
    data = JSON.parse(data)
    session.kit_methods.push({
        id : session.kit_methods.length,
        name : data.name
    })
    return [200,data]
})

mock.onPost('/kitmethods/update').reply(({data})=>{
    data = JSON.parse(data)
    let method = _.find(session.kit_methods,{id : data.id})
    _.extend(method,data)
    return [200,data]
})

mock.onDelete('/kitmethods').reply(({data})=>{
    data = JSON.parse(data)
    session.kit_methods = _.filter(session.kit_methods,k=>{
        return k.id != data.id
    })
    return [200,data]
})

mock.onGet('/resultoptions').reply(200,session.result_options)

mock.onPost('/resultoptions/new').reply(({data})=>{
    data = JSON.parse(data)
    session.result_options.push({
        id : session.result_options.length,
        name : data.name
    })
    return [200,data]
})

mock.onPost('/resultoptions/update').reply(({data})=>{
    data = JSON.parse(data)
    let result_option = _.find(session.result_options,{id : data.id})
    _.extend(result_option,data)
    return [200,data]
})

mock.onDelete('/resultoptions').reply(({data})=>{
    data = JSON.parse(data)
    session.result_options = _.filter(session.result_options,k=>{
        return k.id != data.id
    })
    return [200,data]
})

// =========================START serodia_hiv ==============================================

mock.onGet('/serodia/options/nonfinal').reply(200,session.serodia_hiv)

mock.onPost('/serodia/options/nonfinal/new').reply(({data})=>{
    data = JSON.parse(data)
    session.serodia_hiv.push({
        id : session.serodia_hiv.length,
        name : data.name
    })
    return [200,data]
})

mock.onPost('/serodia/options/nonfinal/update').reply(({data})=>{
    data = JSON.parse(data)
    let option = _.find(session.serodia_hiv,{id : data.id})
    _.extend(option,data)
    return [200,data]
})

mock.onDelete('/serodia/options/nonfinal').reply(({data})=>{
    data = JSON.parse(data)
    session.serodia_hiv = _.filter(session.serodia_hiv,k=>{
        return k.id != data.id
    })
    return [200,data]
})

// =========================START serodia_hiv_final ==========================================

mock.onGet('/serodia/options/final').reply(200,session.serodia_hiv_final_status_results)

mock.onPost('/serodia/options/final/new').reply(({data})=>{
    data = JSON.parse(data)
    session.serodia_hiv_final_status_results.push({
        id : session.serodia_hiv_final_status_results.length,
        name : data.name
    })
    return [200,data]
})

mock.onPost('/serodia/options/final/update').reply(({data})=>{
    data = JSON.parse(data)
    let option = _.find(session.serodia_hiv_final_status_results,{id : data.id})
    _.extend(option,data)
    return [200,data]
})

mock.onDelete('/serodia/options/final').reply(({data})=>{
    data = JSON.parse(data)
    session.serodia_hiv_final_status_results = _.filter(session.serodia_hiv_final_status_results,k=>{
        return k.id != data.id
    })
    return [200,data]
})

export {mock}

