const donation = {
    state : {
        donations : [
            {
                donation_id : '1',
                blood_type : 'A POS',
                donation_dt : '2018-11-05',
                reactiveResults : [
                    'HIV',
                ],
                facility : {
                    facility_name : 'Philippine Blood Center',
                    address : 'PBC Building, Lungcenter Comp, Quezon Ave. Q.C.',
                    facilty_cd : '13006',
                    region : '13',
                    pathologist : 'Andress Bonifacio',
                },
                donor : {
                    initials : 'R.A.T.',
                    dob : "1989-03-17",
                    nationality : 'Filipino',
                    civil_status : 'Single',
                    occupation : 'I.T/Software Development',
                    home_address : 'Bulacan',
                    frequency : 'Repeat',
                    prev_donation : '2018-01-30',
                },
                donation_type : 'Voluntary'
            },
            {
                donation_id : 'NVBSP20190000113',
                blood_type : 'O POS',
                donation_dt : '2019-01-23',
                reactiveResults : [
                    'MALA',
                ],
                facility : null,
                donor : null,
                donation_type : 'Voluntary'
            },
            {
                donation_id : 'NVBSP20190000112',
                blood_type : 'O POS',
                donation_dt : '2019-01-23',
                reactiveResults : [
                    'MALA',
                ],
                facility : null,
                donor : {
                    initials : 'R.A.T.',
                    dob : "1989-03-17",
                    nationality : 'Filipino',
                    civil_status : 'Single',
                    occupation : 'I.T/Software Development',
                    home_address : 'Bulacan',
                    frequency : 'First Time',
                },
                donation_type : 'Voluntary'
            }
        ]
    },
    actions : {
        fetchDonation(context,payload){
            return new Promise((resolve,reject) => {
                setTimeout(i=>{
                    let donation = _.find(context.state.donations,{donation_id : payload.donation_id.toUpperCase()})
                    resolve(!donation ? null : donation)
                },500)
            })
        }
    },
}

export {donation}