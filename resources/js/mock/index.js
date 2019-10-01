import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
let mock = new MockAdapter(axios,{ delayResponse: 500 })
import data from './data'
let session = _.clone(data)

// mock.onGet('/users').reply(200,_.filter(users,{facility_cd : 'RITM'}))

//==============================Cryoboxes=====================================
mock.onGet('/cryoboxes').reply(function(){
    let cryoboxes = session.cryoboxes.map(c=>{
        let refs = _.filter(session.referrals,r=>{
            if(r.cryobox){
                return r.cryobox.box_no == c.cryobox_no
            }
        })
        c.content = refs.map(r=>{
            return { confirmatory_reference_number : r.confirmatory_reference_number, x : r.cryobox.slot.x, y : r.cryobox.slot.y}
        })
        return c
    })
    return [200, cryoboxes]
});

mock.onGet('/cryobox').reply(r => {
    return [200,_.find(session.cryoboxes,c=>{
        return c.cryobox_no.toUpperCase() == r[0].toUpperCase()
    })]
});

mock.onPost('/cryoboxes').reply(({data}) => {
    data = JSON.parse(data)
    session.cryoboxes.push(data)
    return [200,data]
})

mock.onPut('/cryoboxes').reply(({data}) => {
    data = JSON.parse(data)
    let cryobox = _.find(session.cryoboxes,{cryobox_no : data.cryobox_no})
    _.extend(cryobox,data)
    return [200,cryobox]
})

mock.onDelete('/cryoboxes').reply(({data}) => {
    session.cryoboxes = _.filter(session.cryoboxes,c=>{
        return c.cryobox_no != data
    })

    return [200,'ok']
})

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

mock.onPost('/setReferralResultBSF').reply(({data})=>{
    data = JSON.parse(data)
    let referral = _.find(session.referrals, {confirmatory_reference_number : data.confirmatory_reference_number})
    referral.results.bsf = data.bsf
    return [200,referral]
})

mock.onPost('/referral/cryobox').reply(({data})=>{
    data = JSON.parse(data)
    let referral = _.find(session.referrals, r => {
        return r.donation_id.toUpperCase() == data.donation_id.toUpperCase()
    })
    _.extend(referral, data)
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

mock.onGet('/options/all').reply(200,session.options_registry)

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

// ========================= test_protocols ==========================================

mock.onGet('test_protocols').reply(function(config){
    let response = _.filter(session.test_protocols,{tti : config.tti})
    return [200,response]
})

mock.onGet('test_protocols/all').reply(200,session.test_protocols)

mock.onPost('test_protocols/new').reply(({data})=>{
    data = JSON.parse(data)
    let {tti,name} = data
    session.test_protocols.push({
        id : session.test_protocols.length,
        tti, name, fields : [], forms : [],
    })
    return [200,{status : 'ok'}]
})

mock.onPost('test_protocols/update').reply(({data})=>{
    data = JSON.parse(data)
    let protocol = _.find(session.test_protocols,{id : data.id})
    _.extend(protocol,data)
    return [200,{status : 'ok'}]
})

mock.onDelete('test_protocols').reply(function(config){
    session.test_protocols = _.filter(session.test_protocols,p=>{
        return p.id != config.id
    })
    return [200,{status : 'ok'}]
})

mock.onPost('test_protocols/form_new').reply(({data})=>{
    data = JSON.parse(data)
    let {protocol_id,name} = data
    let protocol = _.find(session.test_protocols,{id : protocol_id})
    if(!protocol.forms){
        protocol.forms = []
    }
    protocol.forms.push({
        id : protocol.forms.length,
        name : name,
        fields : []
    })
    return [200,{status : 'ok'}]
})

mock.onPost('test_protocols/field_update').reply(({data})=>{
    data = JSON.parse(data)
    let {protocol_id , upd} = data
    let protocol = _.find(session.test_protocols,{id : protocol_id})
    if(protocol){
        let field = _.find(protocol.fields,{id : upd.id})
        if(field){
            _.extend(field,upd)
        }
    }
    return [200,{status : 'ok'}]
})

mock.onPost('test_protocols/form_field_update').reply(({data})=>{
    data = JSON.parse(data)
    let {protocol_id, form_id , upd} = data
    let protocol = _.find(session.test_protocols,{id : protocol_id})
    if(protocol){
        let form = _.find(protocol.forms,{id : form_id})
        if(form){
            let field = _.find(form.fields,{id : upd.id})
            if(field){
                _.extend(field,upd)
            }
        }
    }
    return [200,{status : 'ok'}]
})

mock.onPost('test_protocols/field_new').reply(({data})=>{
    data = JSON.parse(data)
    let {protocol_id , upd} = data
    let protocol = _.find(session.test_protocols,{id : protocol_id})
    if(protocol){
        if(!protocol.fields){
            protocol.fields = []
        }
        let field = {id : protocol.fields.length}
        _.extend(field,upd)
        protocol.fields.push(field)
    }
    return [200,{status : 'ok'}]
})

mock.onPost('test_protocols/form_field_new').reply(({data})=>{
    data = JSON.parse(data)
    let {protocol_id , form_id , upd} = data
    let protocol = _.find(session.test_protocols,{id : protocol_id})
    if(protocol){
        let form = _.find(protocol.forms,{id : form_id})
        if(form){
            if(!form.fields){
                form.fields = []
            }
            let field = {id : form.fields.length}
            _.extend(field,upd)
            form.fields.push(field)
        }
    }
    return [200,{status : 'ok'}]
})

mock.onPost('test_protocols/field_delete').reply(({data})=>{
    data = JSON.parse(data)
    let {protocol_id , del} = data
    let protocol = _.find(session.test_protocols,{id : protocol_id})
    if(protocol){
        if(!protocol.fields){
            protocol.fields = []
        }
        protocol.fields = _.filter(protocol.fields,f=>{
            return f.id != del.id
        })
    }
    return [200,{status : 'ok'}]
})

mock.onPost('test_protocols/form_field_delete').reply(({data})=>{
    data = JSON.parse(data)
    let {protocol_id , form_id , del} = data
    let protocol = _.find(session.test_protocols,{id : protocol_id})
    if(protocol){
        let form = _.find(protocol.forms,{id : form_id})
        if(form){
            if(!form.fields){
                form.fields = []
            }
            form.fields = _.filter(form.fields,f=>{
                return f.id != del.id
            })
        }
    }
    return [200,{status : 'ok'}]
})

// ========================= report_templates ==========================================

mock.onGet('report_templates').reply(200,session.report_templates)

mock.onPost('report_templates').reply(({data})=>{
    data = JSON.parse(data)
    let {name,report_type,source,html} = data
    session.report_templates.push({
        id : session.report_templates.length,
        name, report_type, source, html
    })
    return [200,{status : 'ok'}]
})

// ========================= bsf_referrals ==========================================

mock.onGet('bsf/referrals').reply(data => {
    // return[200,data]
    // data = JSON.parse(data)
    return [200,_.filter(session.referrals,r=>{
        return r.request_by.facility_cd == data.facility_cd
    })]
})

// ========================= dashboard ==========================================

mock.onGet('dashboard').reply(data=>{
    if(data.facility_cd == 'RITM'){
        let a = 0, b = 0, c = 0, d = 0

        session.referrals.forEach(r=>{
            if(r.cryobox){
                c++
            }else if(r.reject_reason.length){
                d++
            }else if(r.received_by){
                b++
            }else{
                a++
            }
        })

        return [200,{
            pieData : [a,b,c,d]
        }]
    }else{
        return [200,null]
    }
})


// ========================= reject_reasons ==========================================

mock.onGet('/reject_reasons').reply(200,session.reject_reasons)

mock.onPost('/reject_reasons').reply(({data})=>{
    data = JSON.parse(data)
    session.geenius_hiv_interpretation.push({
        id : session.reject_reasons.length,
        name : data.name
    })
    return [200,data]
})

mock.onPut('/reject_reasons').reply(({data})=>{
    data = JSON.parse(data)
    let option = _.find(session.reject_reasons,{id : data.id})
    _.extend(option,data)
    return [200,data]
})

mock.onDelete('/reject_reasons').reply(({data})=>{
    data = JSON.parse(data)
    session.reject_reasons = _.filter(session.reject_reasons,k=>{
        return k.id != data.id
    })
    return [200,data]
})

mock.onGet('/referrals/unstored').reply(data=>{
    let refs = _.filter(session.referrals,r=>{
        if(r.cryobox == undefined && ((r.received_dt != null || r.received_dt != undefined) && r.reject_reason == undefined)){
            return r
        }
    })

    if(!refs){
        return [200,[]]
    }

    return [200,refs]
})

export {mock}

