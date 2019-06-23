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

export {mock}

