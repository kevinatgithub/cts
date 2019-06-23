let users = [
    {
        username: 'ritm', facility_cd: 'RITM',
        name: 'Juan Karlos', position: 'RMT',
        password: '1'
    },
    {
        username: 'r2', facility_cd: 'RITM',
        name: 'Lucifer Morning Star', position: 'RMT',
        password: '1'
    },
    {
        username: 'bsf', facility_cd: 'BSF',
        name: 'Rico Blanko', position: 'RMT',
        password: '1'
    },
];

let donations = [
    {
        donation_id: 'N1',
        blood_type: 'A POS',
        donation_dt: '2018-11-05',
        reactiveResults: [
            'HIV',
        ],
        facility: {
            facility_name: 'Philippine Blood Center',
            address: 'PBC Building, Lungcenter Comp, Quezon Ave. Q.C.',
            facilty_cd: '13006',
            region: '13',
            pathologist: 'Andress Bonifacio',
        },
        donor: {
            initials: 'R.A.T.',
            dob: "1989-03-17",
            nationality: 'Filipino',
            civil_status: 'Single',
            occupation: 'I.T/Software Development',
            home_address: 'Bulacan',
            frequency: 'Repeat',
            prev_donation: '2018-01-30',
        },
        donation_type: 'Voluntary'
    },
    {
        donation_id: 'N2',
        blood_type: 'O POS',
        donation_dt: '2019-01-23',
        reactiveResults: [
            'MALA',
        ],
        facility: null,
        donor: null,
        donation_type: 'Voluntary'
    },
    {
        donation_id: 'N3',
        blood_type: 'O POS',
        donation_dt: '2019-01-23',
        reactiveResults: [
            'MALA',
        ],
        facility: null,
        donor: {
            initials: 'R.A.T.',
            dob: "1989-03-17",
            nationality: 'Filipino',
            civil_status: 'Single',
            occupation: 'I.T/Software Development',
            home_address: 'Bulacan',
            frequency: 'First Time',
        },
        donation_type: 'Voluntary'
    }
];

let referrals = [
    { "donation": { "donation_id": "N1", "blood_type": "A POS", "donation_dt": "2018-11-05", "reactiveResults": ["HIV"], "facility": { "facility_name": "Philippine Blood Center", "address": "PBC Building, Lungcenter Comp, Quezon Ave. Q.C.", "facilty_cd": "13006", "region": "13", "pathologist": "Andress Bonifacio" }, "donor": { "initials": "R.A.T.", "dob": "1989-03-17", "nationality": "Filipino", "civil_status": "Single", "occupation": "I.T/Software Development", "home_address": "Bulacan", "frequency": "Repeat", "prev_donation": "2018-01-30" }, "donation_type": "Voluntary" }, "courier": { "fname": null, "mname": null, "lname": null, "contact_no": null, "provider": 0, "reference_no": "123" }, "courierMode": "Courier", "donation_id": "N1", "specimen": [0], "request_by": { "username": "bsf", "facility_cd": "BSF", "name": "Rico Blanko", "position": "RMT", "password": "1" }, "created_dt": 1561269281732, "shipped_dt": "2019-06-16", "confirmatory_reference_number": "C1", "contested": false, "remarks": null, "reject_reason": null, "received_by": { "username": "r2", "facility_cd": "RITM", "name": "Lucifer Morning Star", "position": "RMT", "password": "1" }, "received_dt": "Sun Jun 23 2019", "cryobox": { "box_no": "123", "slot": { "x": 0, "y": 0 }, "refrigerator": 0, "compartment": 0, "row": [0, 0], "cryobox_slot": 0, "stored_by": { "username": "r2", "facility_cd": "RITM", "name": "Lucifer Morning Star", "position": "RMT", "password": "1" }, "stored_dt": 1561270287436 } }
];
export default { users, donations, referrals }