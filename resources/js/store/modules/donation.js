const donation = {
    state : {
        donations : [
            {
                donation_id : 'NVBSP20190000111',
                blood_type : 'A POS',
                donation_dt : '2018-11-05',
                reactiveResults : [
                    'HIV',
                ],
                facility : {
                    facility_name : 'Philippine Blood Center',
                }
            },
            {
                donation_id : 'NVBSP20190000112',
                blood_type : 'O POS',
                donation_dt : '2019-01-23',
                reactiveResults : [
                    'MALA',
                ],
                facility : {
                    facility_name : 'Philippine Blood Center',
                }
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