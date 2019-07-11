import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
let mock = new MockAdapter(axios,{ delayResponse: 500 })
import data from './data'
let session = _.clone(data)

// mock.onGet('/users').reply(200,_.filter(users,{facility_cd : 'RITM'}))

//==============================User==========================================

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


//=============================Donation========================================

mock.onPost('/donation').reply(({data})=>{
    data = JSON.parse(data)
    return [200,
        _.find(session.donations,d=>{
            return d.donation_id.toUpperCase() == data.donation_id.toUpperCase()
        })
    ]
})


// =============================Referral=========================================
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

// =============================Specimen===========================================
mock.onGet('/specimens').reply(200,session.specimens)

mock.onPost('/specimens/new').reply(({data})=>{
    data = JSON.parse(data)
    session.specimens.push({
        id : session.specimens.length,
        name : data.name
    })
    return [200,data]
})

mock.onPost('/specimens/update').reply(({data})=>{
    data = JSON.parse(data)
    let record = _.find(session.specimens,{id : data.id})
    _.extend(record,data)
    return [200,data]
})

mock.onDelete('/specimens').reply(({data})=>{
    data = JSON.parse(data)
    session.specimens = _.filter(session.specimens,k=>{
        return k.id != data.id
    })
    return [200,data]
})

// =============================Couriers===========================================
mock.onGet('/couriers').reply(200,session.couriers)

mock.onPost('/couriers/new').reply(({data})=>{
    data = JSON.parse(data)
    session.couriers.push({
        id : session.couriers.length,
        name : data.name
    })
    return [200,data]
})

mock.onPost('/couriers/update').reply(({data})=>{
    data = JSON.parse(data)
    let record = _.find(session.couriers,{id : data.id})
    _.extend(record,data)
    return [200,data]
})

mock.onDelete('/couriers').reply(({data})=>{
    data = JSON.parse(data)
    session.couriers = _.filter(session.couriers,k=>{
        return k.id != data.id
    })
    return [200,data]
})

// =============================Reagents===========================================
mock.onGet('/machines').reply(200,session.machines)

mock.onPost('/machines/new').reply(({data})=>{
    data = JSON.parse(data)
    session.machines.push({
        id : session.machines.length,
        name : data.name
    })
    return [200,data]
})

mock.onPost('/machines/update').reply(({data})=>{
    data = JSON.parse(data)
    let record = _.find(session.machines,{id : data.id})
    _.extend(record,data)
    return [200,data]
})

mock.onDelete('/machines').reply(({data})=>{
    data = JSON.parse(data)
    session.machines = _.filter(session.machines,k=>{
        return k.id != data.id
    })
    return [200,data]
})

// =============================Reagents===========================================
mock.onGet('/reagents').reply(200,session.reagents)

mock.onPost('/reagents/new').reply(({data})=>{
    data = JSON.parse(data)
    session.reagents.push({
        id : session.reagents.length,
        name : data.name
    })
    return [200,data]
})

mock.onPost('/reagents/update').reply(({data})=>{
    data = JSON.parse(data)
    let record = _.find(session.reagents,{id : data.id})
    _.extend(record,data)
    return [200,data]
})

mock.onDelete('/reagents').reply(({data})=>{
    data = JSON.parse(data)
    session.reagents = _.filter(session.reagents,k=>{
        return k.id != data.id
    })
    return [200,data]
})

// =============================Kit Methods========================================

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

// ===========================RITM Final Results======================================

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

// ========================= particle_agglutination ==============================================

mock.onGet('/particle_agglutination').reply(200,session.particle_agglutination)

mock.onPost('/particle_agglutination/new').reply(({data})=>{
    data = JSON.parse(data)
    session.particle_agglutination.push({
        id : session.particle_agglutination.length,
        name : data.name
    })
    return [200,data]
})

mock.onPost('/particle_agglutination/update').reply(({data})=>{
    data = JSON.parse(data)
    let option = _.find(session.particle_agglutination,{id : data.id})
    _.extend(option,data)
    return [200,data]
})

mock.onDelete('/particle_agglutination').reply(({data})=>{
    data = JSON.parse(data)
    session.particle_agglutination = _.filter(session.particle_agglutination,k=>{
        return k.id != data.id
    })
    return [200,data]
})

// ========================= serodia_hiv_interpretation ==========================================

mock.onGet('/serodia_hiv_interpretation').reply(200,session.serodia_hiv_interpretation)

mock.onPost('/serodia_hiv_interpretation/new').reply(({data})=>{
    data = JSON.parse(data)
    session.serodia_hiv_interpretation.push({
        id : session.serodia_hiv_interpretation.length,
        name : data.name
    })
    return [200,data]
})

mock.onPost('/serodia_hiv_interpretation/update').reply(({data})=>{
    data = JSON.parse(data)
    let option = _.find(session.serodia_hiv_interpretation,{id : data.id})
    _.extend(option,data)
    return [200,data]
})

mock.onDelete('/serodia_hiv_interpretation').reply(({data})=>{
    data = JSON.parse(data)
    session.serodia_hiv_interpretation = _.filter(session.serodia_hiv_interpretation,k=>{
        return k.id != data.id
    })
    return [200,data]
})

// ========================= eia_results ==========================================

mock.onGet('/eia_results').reply(200,session.eia_results)

mock.onPost('/eia_results/new').reply(({data})=>{
    data = JSON.parse(data)
    session.eia_results.push({
        id : session.eia_results.length,
        name : data.name
    })
    return [200,data]
})

mock.onPost('/eia_results/update').reply(({data})=>{
    data = JSON.parse(data)
    let option = _.find(session.eia_results,{id : data.id})
    _.extend(option,data)
    return [200,data]
})

mock.onDelete('/eia_results').reply(({data})=>{
    data = JSON.parse(data)
    session.eia_results = _.filter(session.eia_results,k=>{
        return k.id != data.id
    })
    return [200,data]
})

// ========================= westernblot_hiv ==========================================

mock.onGet('/westernblot_hiv').reply(200,session.westernblot_hiv)

mock.onPost('/westernblot_hiv/new').reply(({data})=>{
    data = JSON.parse(data)
    session.westernblot_hiv.push({
        id : session.westernblot_hiv.length,
        name : data.name
    })
    return [200,data]
})

mock.onPost('/westernblot_hiv/update').reply(({data})=>{
    data = JSON.parse(data)
    let option = _.find(session.westernblot_hiv,{id : data.id})
    _.extend(option,data)
    return [200,data]
})

mock.onDelete('/westernblot_hiv').reply(({data})=>{
    data = JSON.parse(data)
    session.westernblot_hiv = _.filter(session.westernblot_hiv,k=>{
        return k.id != data.id
    })
    return [200,data]
})

// ========================= pcr_results ==========================================

mock.onGet('/pcr_results').reply(200,session.pcr_results)

mock.onPost('/pcr_results/new').reply(({data})=>{
    data = JSON.parse(data)
    session.pcr_results.push({
        id : session.pcr_results.length,
        name : data.name
    })
    return [200,data]
})

mock.onPost('/pcr_results/update').reply(({data})=>{
    data = JSON.parse(data)
    let option = _.find(session.pcr_results,{id : data.id})
    _.extend(option,data)
    return [200,data]
})

mock.onDelete('/pcr_results').reply(({data})=>{
    data = JSON.parse(data)
    session.pcr_results = _.filter(session.pcr_results,k=>{
        return k.id != data.id
    })
    return [200,data]
})

// ========================= geenius_hiv_interpretation ==========================================

mock.onGet('/geenius_hiv_interpretation').reply(200,session.geenius_hiv_interpretation)

mock.onPost('/geenius_hiv_interpretation/new').reply(({data})=>{
    data = JSON.parse(data)
    session.geenius_hiv_interpretation.push({
        id : session.geenius_hiv_interpretation.length,
        name : data.name
    })
    return [200,data]
})

mock.onPost('/geenius_hiv_interpretation/update').reply(({data})=>{
    data = JSON.parse(data)
    let option = _.find(session.geenius_hiv_interpretation,{id : data.id})
    _.extend(option,data)
    return [200,data]
})

mock.onDelete('/geenius_hiv_interpretation').reply(({data})=>{
    data = JSON.parse(data)
    session.geenius_hiv_interpretation = _.filter(session.geenius_hiv_interpretation,k=>{
        return k.id != data.id
    })
    return [200,data]
})

// ========================= options_registry ==========================================

mock.onGet('options/categories').reply(function(config){
    let response = _.chain(session.options_registry).flatten().map('category').uniq().value()
    return [200,response]
})

mock.onGet('/options').reply(function(config){
    let response = _.filter(session.options_registry,{category : config.category})
    return [200,response]
})

mock.onPost('/options/new').reply(({data})=>{
    data = JSON.parse(data)
    session.options_registry.push({
        id : session.options_registry.length,
        category : data.category,
        name : data.name,
    })
    return [200,data]
})

mock.onPost('/options/update').reply(({data})=>{
    data = JSON.parse(data)
    let option = _.find(session.options_registry,{id : data.id})
    _.extend(option,data)
    return [200,data]
})

mock.onDelete('/options').reply(({data})=>{
    data = JSON.parse(data)
    session.options_registry = _.filter(session.options_registry,k=>{
        return k.id != data.id
    })
    return [200,data]
})

// ========================= options_registry ==========================================

mock.onGet('test_protocols').reply(function(config){
    let response = _.filter(session.test_protocols,{tti : config.tti})
    return [200,response]
})

export {mock}

