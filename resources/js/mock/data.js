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

let specimens = [
    {id : 0, name :'Aliqouted Sample'},
    {id : 1, name :'Whole Blood'},
    {id : 2, name :'FFP'},
    {id : 3, name :'PC'},
    {id : 4, name :'PRBC'},
    {id : 5, name :'Cryosupernate'},
    {id : 6, name :'Cryoprecipitate'},
    {id : 7, name :'Blood Smear'},
    {id : 8, name :'Dried Blood Spot'},
    {id : 9, name :'Apheresis Unit'},
]

let couriers = [
    {id : 0, name : 'LBC'},
    {id : 1, name : 'GrabExpress'},
    {id : 2, name : '2GO Express'},
    {id : 3, name : 'Xend Business Solutions'},
    {id : 4, name : 'JRS Express'},
    {id : 5, name : 'DHL Express'},
    {id : 6, name : 'Ninja Van'},
    {id : 7, name : 'Lalamove'},
]

let machines = [
    { id: 0, name: "Abbott Architect i1000" },
    { id: 1, name: "Abbott Architect i2000SR" },
    { id: 2, name: "Abbott Architect ci4100" },
    { id: 3, name: "Abbott AxSYM" },
    { id: 4, name: "Semi-Automated" },
    { id: 5, name: "Bio-Rad Model 680 Microplate Reader" },
    { id: 6, name: "Bio-Rad CODA" },
    { id: 7, name: "Bio-Rad EVOLIS" },
    { id: 8, name: "bioMerieux VIDAS" },
    { id: 9, name: "bioMerieux mini VIDAS" },
    { id: 10, name: "DiaSorin ETI-Max 3000" },
    { id: 11, name: "Grifols Procleic Tigris System" },
    { id: 12, name: "Roche cobas s201" },
    { id: 13, name: "Ortho VITROS ECi" },
    { id: 14, name: "Ortho VITROS ECiQ" },
    { id: 15, name: "Ortho VITROS 3600" },
    { id: 16, name: "Ortho VITROS 5600" },
    { id: 17, name: "Roche cobas e411" },
    { id: 18, name: "Roche Elecsys 2010" },
    { id: 19, name: "Siemens ADVIA Centaur" },
    { id: 20, name: "Siemens ADVIA Centaur XP" },
    { id: 21, name: "Snibe Maglumi 600" },
    { id: 22, name: "Snibe Maglumi 800" },
    { id: 23, name: "Snibe Maglumi 1000" },
    { id: 24, name: "Snibe Maglumi 1000 Plus" },
    { id: 25, name: "Snibe Maglumi 2000" },
    { id: 26, name: "Snibe Maglumi 2000 Plus" },
    { id: 27, name: "Snibe Maglumi 4000" },
    { id: 28, name: "Snibe Maglumi 4000 Plus" },
    { id: 29, name: "Snibe Biolumi 8000" },
    { id: 30, name: "Sysmex HISCL-800" },
    { id: 31, name: "Sysmex HISCL-5000" }
]

let reagents = [
    { id: 0, name: "Abbott ARCHITECT Anti-HCV" },
    { id: 1, name: "Abbott ARCHITECT HBsAg Qualitative" },
    { id: 2, name: "Abbott ARCHITECT HIV Ag/Ab Combo" },
    { id: 3, name: "Abbott ARCHITECT Syphilis TP" },
    { id: 4, name: "Abbott AxSYM HIV Ag/Ab Combo" },
    { id: 5, name: "Alere Alere Determine™ HIV-1/2" },
    { id: 6, name: "bioMerieux Hepanostika® HBsAg ULTRA" },
    { id: 7, name: "bioMerieux Vidas HIV DUO Ultra" },
    { id: 8, name: "bioMerieux VIDAS® Anti-HCV (HCV)" },
    { id: 9, name: "bioMerieux VIDAS® HBsAg Ultra" },
    { id: 10, name: "bioMerieux Vironostika® HIV Ag/Ab" },
    { id: 11, name: "BIO-RAD Genscreen™ ULTRA HIV Ag-Ab" },
    { id: 12, name: "BIO-RAD Monolisa™ HBs Ag ULTRA" },
    { id: 13, name: "BIO-RAD Monolisa™ HCV Ag-Ab ULTRA" },
    { id: 14, name: "BIO-RAD Microlisa Malaria" },
    { id: 15, name: "Cellabs Pan Malaria Antibody CELISA" },
    { id: 16, name: "DiaSorin Murex anti-HCV Version 4.0" },
    { id: 17, name: "DiaSorin Murex HBsAg Version 3" },
    { id: 18, name: "DiaSorin Murex HCV Ag/Ab Combination" },
    { id: 19, name: "DiaSorin Murex HIV Ag/Ab Combination" },
    { id: 20, name: "Grifols Procleix® Ultrio Plus® Assay" },
    { id: 21, name: "Intec Advanced® Anti-HCV ELISA" },
    { id: 22, name: "Intec Advanced® HBsAg ELISA" },
    { id: 23, name: "Intec Advanced® HIV (1&2) ELISA" },
    { id: 24, name: "Malaria Pf/Pan Rapid Test Device" },
    { id: 25, name: "Ortho Vitros Anti-HCV" },
    { id: 26, name: "Ortho VITROS Anti-HIV 1+2" },
    { id: 27, name: "Ortho Vitros HBsAg" },
    { id: 28, name: "Phoenix Bio-Tech TREP-SURE™ EIA" },
    { id: 29, name: "Roche Anti-HCV II" },
    { id: 30, name: "Roche cobas® TaqScreen MPX Test, version 2.0" },
    { id: 31, name: "Roche HBsAg II" },
    { id: 32, name: "Roche HIV combi PT" },
    { id: 33, name: "Siemens ADVIA Centaur Anti-HCV IgG" },
    { id: 34, name: "Siemens ADVIA Centaur HBsAg" },
    { id: 35, name: "Siemens ADVIA Centaur HIV 1/O/2 Enhanced (EHIV)" },
    { id: 36, name: "Siemens ADVIA Centaur HIV Ag/Ab Combo (CHIV)" },
    { id: 37, name: "SNIBE MAGLUMI HIV Ab/Ag Combi (CLIA)" },
    { id: 38, name: "Standard Diagnostics SD Bioline HIV 1/2" },
    { id: 39, name: "Sysmex HISCL® Anti-HCV Assay Kit" },
    { id: 40, name: "Sysmex HISCL® HBsAg Assay Kit" },
    { id: 41, name: "Sysmex HISCL® HIV Ag+Ab Assay Kit" },
    { id: 42, name: "Parahit Total Device" },
    { id: 43, name: "Parascreen Device for Malaria" }
]

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

let particle_agglutination = [
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

let serodia_hiv_interpretation = [
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

let eia_results = [
    {id : 0, name : "Non-Reactive"},
    {id : 1, name : "Reactive"},
    {id : 2, name : "Non-Reactive Grayzone"},
    {id : 3, name : "Reactive Grayzone"},
]

let westernblot_hiv = [
    {id:0,name:"POSITIVE (HIV-1)"},
    {id:1,name:"POSITIVE (HIV-1) with cross-reaction to (HIV-2)"},
    {id:2,name:"INDETERMINATE (gp120, p24)"},
    {id:3,name:"INDETERMINATE (gp160, p24)"},
    {id:4,name:"INDETERMINATE (gp160, p17)"},
    {id:5,name:"INDETERMINATE (gp160, p24, p17)"},
    {id:6,name:"INDETERMINATE (gp160, p66, p24)"},
    {id:7,name:"INDETERMINATE (gp160)"},
    {id:8,name:"INDETERMINATE (p51)"},
    {id:9,name:"INDETERMINATE (p66, p51)"},
    {id:10,name:"INDETERMINATE (p66)"},
    {id:11,name:"INDETERMINATE (p24)"},
    {id:12,name:"INDETERMINATE (p55)"},
    {id:13,name:"INDETERMINATE (p17)"},
    {id:14,name:"NEGATIVE"}
]

let pcr_results = [
    {id:0,name:"HIV-RNA DETECTED"},
    {id:1,name:"HBV-DNA DETECTED"},
    {id:2,name:"HCV-RNA DETECTED"},
    {id:3,name:"HIV-RNA HBV-RNA HCV-RNA DETECTED"},
    {id:4,name:"HIV-RNA HBV-RNA DETECTED"},
    {id:5,name:"HIV-RNA HCV-RNA DETECTED"},
    {id:6,name:"HBV-DNA HCV-RNA DETECTED"},
    {id:7,name:"HIV-RNA NOT DETECTED"},
    {id:8,name:"HBV-DNA NOT DETECTED"},
    {id:9,name:"HCV-RNA NOT DETECTED"},
]

let geenius_hiv_interpretation = [
    {id : 0, name : 'POSITIVE (HIV-1)'},
    {id : 1, name : 'NEGATIVE'},
]

let options_registry = [
    {id : 0, category : 'PCR RESULTS' , name:"HIV-RNA DETECTED"},
    {id : 1, category : 'PCR RESULTS' , name:"HBV-DNA DETECTED"},
    {id : 2, category : 'PCR RESULTS' , name:"HCV-RNA DETECTED"},
    {id : 3, category : 'PCR RESULTS' , name:"HIV-RNA HBV-RNA HCV-RNA DETECTED"},
    {id : 4, category : 'PCR RESULTS' , name:"HIV-RNA HBV-RNA DETECTED"},
    {id : 5, category : 'PCR RESULTS' , name:"HIV-RNA HCV-RNA DETECTED"},
    {id : 6, category : 'PCR RESULTS' , name:"HBV-DNA HCV-RNA DETECTED"},
    {id : 7, category : 'PCR RESULTS' , name:"HIV-RNA NOT DETECTED"},
    {id : 8, category : 'PCR RESULTS' , name:"HBV-DNA NOT DETECTED"},
    {id : 9, category : 'PCR RESULTS' , name:"HCV-RNA NOT DETECTED"},
    {id : 0, category : 'GEENIUS HIV INTERPRETATION', name : 'POSITIVE (HIV-1)'},
    {id : 1, category : 'GEENIUS HIV INTERPRETATION', name : 'NEGATIVE'},
    {id : 0, category : 'WESTERNBLOT HIV', name:"POSITIVE (HIV-1)"},
    {id : 1, category : 'WESTERNBLOT HIV', name:"POSITIVE (HIV-1) with cross-reaction to (HIV-2)"},
    {id : 2, category : 'WESTERNBLOT HIV', name:"INDETERMINATE (gp120, p24)"},
    {id : 3, category : 'WESTERNBLOT HIV', name:"INDETERMINATE (gp160, p24)"},
    {id : 4, category : 'WESTERNBLOT HIV', name:"INDETERMINATE (gp160, p17)"},
    {id : 5, category : 'WESTERNBLOT HIV', name:"INDETERMINATE (gp160, p24, p17)"},
    {id : 6, category : 'WESTERNBLOT HIV', name:"INDETERMINATE (gp160, p66, p24)"},
    {id : 7, category : 'WESTERNBLOT HIV', name:"INDETERMINATE (gp160)"},
    {id : 8, category : 'WESTERNBLOT HIV', name:"INDETERMINATE (p51)"},
    {id : 9, category : 'WESTERNBLOT HIV', name:"INDETERMINATE (p66, p51)"},
    {id : 10, category : 'WESTERNBLOT HIV', name:"INDETERMINATE (p66)"},
    {id : 11, category : 'WESTERNBLOT HIV', name:"INDETERMINATE (p24)"},
    {id : 12, category : 'WESTERNBLOT HIV', name:"INDETERMINATE (p55)"},
    {id : 13, category : 'WESTERNBLOT HIV', name:"INDETERMINATE (p17)"},
    {id : 14, category : 'WESTERNBLOT HIV', name:"NEGATIVE"},
    {id : 0, category : 'EIA RESULTS', name : "Non-Reactive"},
    {id : 1, category : 'EIA RESULTS', name : "Reactive"},
    {id : 2, category : 'EIA RESULTS', name : "Non-Reactive Grayzone"},
    {id : 3, category : 'EIA RESULTS', name : "Reactive Grayzone"},
    { id: 0, category : 'SERODIA HIV INTERPRETATION', name: "Non-Reactive" },
    { id: 1, category : 'SERODIA HIV INTERPRETATION', name: "Non-Reactive (after Absorption)" },
    { id: 2, category : 'SERODIA HIV INTERPRETATION', name: "Inconclusive (HIV-1)" },
    { id: 3, category : 'SERODIA HIV INTERPRETATION', name: "Inconclusive (HIV-2)" },
    { id: 4, category : 'SERODIA HIV INTERPRETATION', name: "Inconclusive (HIV-1 and HIV-2)" },
    { id: 5, category : 'SERODIA HIV INTERPRETATION', name: "Inconclusive (HIV-1) after Absorption" },
    { id: 6, category : 'SERODIA HIV INTERPRETATION', name: "Inconclusive (HIV-2) after Absorption" },
    { id: 7, category : 'SERODIA HIV INTERPRETATION', name: "Inconclusive (HIV-1 and HIV-2) after Absorption" },
    { id: 8, category : 'SERODIA HIV INTERPRETATION', name: "Inconclusive (HIV-1) and Reactive (HIV-2)" },
    { id: 9, category : 'SERODIA HIV INTERPRETATION', name: "Reactive (HIV-1)" },
    { id: 10, category : 'SERODIA HIV INTERPRETATION', name: "Reactive (HIV-2)" },
    { id: 11, category : 'SERODIA HIV INTERPRETATION', name: "Reactive (HIV-1 and HIV-2)" },
    { id: 12, category : 'SERODIA HIV INTERPRETATION', name: "Reactive (HIV-1) and Inconclusive (HIV-2)" },
    { id: 13, category : 'SERODIA HIV INTERPRETATION', name: "Reactive (HIV-1) after Absorption" },
    { id: 14, category : 'SERODIA HIV INTERPRETATION', name: "Reactive (HIV-2) after Absorption" },
    { id: 15, category : 'SERODIA HIV INTERPRETATION', name: "Reactive (HIV-1 and HIV-2) after Absorption" },
    { id: 0, category : 'PARTICLE AGGLUTINATION' , name: "Non-Reactive" },
    { id: 1, category : 'PARTICLE AGGLUTINATION' , name: "Inconclusive" },
    { id: 2, category : 'PARTICLE AGGLUTINATION' , name: "+" },
    { id: 3, category : 'PARTICLE AGGLUTINATION' , name: "++" },
    { id: 4, category : 'PARTICLE AGGLUTINATION' , name: "+++" },
    { id: 5, category : 'PARTICLE AGGLUTINATION' , name: "++++" },
    { id: 6, category : 'PARTICLE AGGLUTINATION' , name: "Non-Reactive (after Absorption)" },
    { id: 7, category : 'PARTICLE AGGLUTINATION' , name: "Inconclusive (after Absorption)" },
    { id: 8, category : 'PARTICLE AGGLUTINATION' , name: "+ (after Absorption)" },
    { id: 9, category : 'PARTICLE AGGLUTINATION' , name: "++ (after Absorption)" },
    { id: 10, category : 'PARTICLE AGGLUTINATION' ,name: "+++ (after Absorption)" },
    { id: 11, category : 'PARTICLE AGGLUTINATION' ,name: "++++ (after Absorption)" },
]

let test_protocols = [
    {
        tti : 'HIV', name : 'FUJIREBIO DIAGNOSTICS, INC. SERODIA HIV 1/2',
        fields : [
            {
                name : 'PA FINAL STATUS',
                type : 'select',
                source : 'SERODIA HIV INTERPRETATION',
            }
        ],
        forms : [
            {
                name : 'SERODIA HIV 1',
                fields : [
                    {
                        name : 'SERODIA HIV 1 - 1',
                        type : 'select',
                        source : 'PARTICLE AGGLUTINATION',
                    },
                    {
                        name : 'SERODIA HIV 1 - 2',
                        type : 'select',
                        source : 'PARTICLE AGGLUTINATION',
                    },
                    {
                        name : 'SERODIA HIV 1/2 INT 1',
                        type : 'select',
                        source : 'SERODIA HIV INTERPRETATION',
                    },
                    {
                        name : 'DATE TESTED 1',
                        type : 'date',
                    },
                    {
                        name : 'SERODIA HIV REMARKS 1',
                        type : 'text',
                    },
                ]
            },
            {
                name : 'SERODIA HIV 2',
                fields : [
                    {
                        name : 'SERODIA HIV 2 - 1',
                        type : 'select',
                        source : 'PARTICLE AGGLUTINATION',
                    },
                    {
                        name : 'SERODIA HIV 2 - 2',
                        type : 'select',
                        source : 'PARTICLE AGGLUTINATION',
                    },
                    {
                        name : 'SERODIA HIV 1/2 INT 2',
                        type : 'select',
                        source : 'SERODIA HIV INTERPRETATION',
                    },
                    {
                        name : 'DATE TESTED 2',
                        type : 'date',
                    },
                    {
                        name : 'SERODIA HIV REMARKS 2',
                        type : 'text',
                    },
                ]
            },
            {
                name : 'ABSORPTION',
                fields : [
                    {
                        name : 'SERODIA HIV 1 - ABS',
                        type : 'select',
                        source : 'PARTICLE AGGLUTINATION',
                    },
                    {
                        name : 'SERODIA HIV 2 - ABS',
                        type : 'select',
                        source : 'PARTICLE AGGLUTINATION',
                    },
                    {
                        name : 'SERODIA HIV 1/2 INT ABS',
                        type : 'select',
                        source : 'SERODIA HIV INTERPRETATION',
                    },
                    {
                        name : 'DATE TESTED ABS',
                        type : 'date',
                    },
                    {
                        name : 'SERODIA HIV REMARKS ABS',
                        type : 'text',
                    },
                ]
            },
        ]
    },
    {
        tti : 'HIV', name : 'DIASORIN MUREX HBSAG QUALI',
        forms : [
            {
                name : 'MUREX 1',
                fields : [
                    {type : 'text', name : 'OPTICAL DENSITY 1'},
                    {type : 'text', name : 'CUT-OFF VALUE 1'},
                    {type : 'select', name : 'INTERPRETATION 1', source : 'EIA RESULTS'},
                ]
            }
        ]
    }
]

export default { users, donations, referrals, specimens, couriers, machines, reagents, kit_methods, result_options, particle_agglutination, serodia_hiv_interpretation, eia_results, westernblot_hiv, pcr_results, geenius_hiv_interpretation, options_registry, test_protocols }