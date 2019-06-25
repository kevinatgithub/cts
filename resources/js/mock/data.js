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

let kit_methods = [
    { id: 0, name: 'Particle Agglutination' },
    { id: 1, name: 'Neutralization Test' },
    { id: 2, name: 'Polymerase Chain Reaction' },
    { id: 3, name: 'Enzyme Immunoassay' },
    { id: 4, name: 'Chemilluminescence' },
    { id: 5, name: 'Rapid Plasma Reagin' },
    { id: 6, name: 'Antigen Test' },
    { id: 7, name: 'Western Blot' },
    { id: 8, name: 'Immunochromatographic Assay (Supplemental)' }
]

let result_options = [
    { id: 0, name: "NEGATIVE" },
    { id: 1, name: "INDETERMINATE (gp120, p24)" },
    { id: 2, name: "INDETERMINATE (gp160, p24, p17)" },
    { id: 3, name: "INDETERMINATE (gp160, p66, p24)" },
    { id: 4, name: "INDETERMINATE (gp160)" },
    { id: 5, name: "INDETERMINATE (p66, p51)" },
    { id: 6, name: "INDETERMINATE (p66)" },
    { id: 7, name: "INDETERMINATE (p24)" },
    { id: 8, name: "INDETERMINATE (p17)" },
    { id: 9, name: "INDETERMINATE (p55)" },
    { id: 10, name: "p24 Ag REACTIVE / NEGATIVE for HIV Ab" },
    { id: 11, name: "POSITIVE" },
    { id: 12, name: "POSITIVE (HIV-1)" },
    { id: 13, name: "POSITIVE (HIV-1) with cross-reaction to (HIV-2)" },
    { id: 14, name: "GROSSLY HEMOLYZED" },
    { id: 15, name: "NO SAMPLE" },
    { id: 16, name: "DISCREPANT" },
    { id: 17, name: "UNSUITABLE FOR TESTING" },
    { id: 18, name: "LEAKED" },
    { id: 19, name: "SPILLED" },
    { id: 20, name: "QUANTITY NOT SUFFICIENT" },
    { id: 21, name: "NO MALARIA PARASITE SEEN" },
    { id: 22, name: "INDETERMINATE (NS3-1)" },
    { id: 23, name: "INDETERMINATE (NS3-2)" },
    { id: 24, name: "INDETERMINATE (CORE)" },
    { id: 25, name: "INDETERMINATE (NS4)" },
    { id: 26, name: "INDETERMINATE (NS5) " },
    { id: 27, name: "PENDING" },
    { id: 28, name: "ABOVE CUT-OFF" },
    { id: 29, name: "INDETERMINATE (CORE)" },
    { id: 30, name: "HIV-RNA DETECTED" },
    { id: 31, name: "HBV-DNA DETECTED" },
    { id: 32, name: "HBV-DNA DETECTED, ANTIBODY NON-REACTIVE" },
    { id: 33, name: "HCV-RNA DETECTED" },
    { id: 34, name: "HIV-RNA HBV-RNA HCV-RNA DETECTED" },
    { id: 35, name: "HIV-RNA HBV-RNA DETECTED" },
    { id: 36, name: "HIV-RNA HCV-RNA DETECTED" },
    { id: 37, name: "HBV-DNA HCV-RNA DETECTED" },
    { id: 38, name: "HIV-RNA NOT DETECTED" },
    { id: 39, name: "HBV-DNA NOT DETECTED" },
    { id: 40, name: "HCV-RNA NOT DETECTED-" },
    { id: 41, name: "NEGATIVE TO ALL PLASMODIUM SPP." },
    { id: 42, name: "REJECTED" },
]

let serodia_hiv = [
    { id: 0, name: "Non-Reactive" },
    { id: 1, name: "Inconclusive" },
    { id: 2, name: "+" },
    { id: 3, name: "++" },
    { id: 4, name: "+++" },
    { id: 5, name: "++++" },
    { id: 6, name: "Non-Reactive (after Absorption)" },
    { id: 7, name: "Inconclusive (after Absorption)" },
    { id: 8, name: "+ (after Absorption)" },
    { id: 9, name: "++ (after Absorption)" },
    { id: 10, name: "+++ (after Absorption)" },
    { id: 11, name: "++++ (after Absorption)" },
]

let serodia_hiv_final_status_results = [
    { id: 0, name: "Non-Reactive" },
    { id: 1, name: "Non-Reactive (after Absorption)" },
    { id: 2, name: "Inconclusive (HIV-1)" },
    { id: 3, name: "Inconclusive (HIV-2)" },
    { id: 4, name: "Inconclusive (HIV-1 and HIV-2)" },
    { id: 5, name: "Inconclusive (HIV-1) after Absorption" },
    { id: 6, name: "Inconclusive (HIV-2) after Absorption" },
    { id: 7, name: "Inconclusive (HIV-1 and HIV-2) after Absorption" },
    { id: 8, name: "Inconclusive (HIV-1) and Reactive (HIV-2)" },
    { id: 9, name: "Reactive (HIV-1)" },
    { id: 10, name: "Reactive (HIV-2)" },
    { id: 11, name: "Reactive (HIV-1 and HIV-2)" },
    { id: 12, name: "Reactive (HIV-1) and Inconclusive (HIV-2)" },
    { id: 13, name: "Reactive (HIV-1) after Absorption" },
    { id: 14, name: "Reactive (HIV-2) after Absorption" },
    { id: 15, name: "Reactive (HIV-1 and HIV-2) after Absorption" },
]

export default { users, donations, referrals, kit_methods, result_options, serodia_hiv, serodia_hiv_final_status_results }