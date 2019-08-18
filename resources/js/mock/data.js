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

let cryoboxes = [
	{
		cryobox_no : 'ABC123',
		columns : 9,
		rows : 9,
	},
	{
		cryobox_no : 'ABC124',
		columns : 9,
		rows : 9,
	}
]

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
        donation_id: 'N3',
        blood_type: 'O POS',
        donation_dt: '2019-01-23',
        reactiveResults: [
            'MALA',
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
        donation_id: 'N4',
        blood_type: 'O POS',
        donation_dt: '2019-01-23',
        reactiveResults: [
            'MALA',
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
        donation_id: 'N5',
        blood_type: 'O POS',
        donation_dt: '2019-01-23',
        reactiveResults: [
            'MALA',
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
        donation_id: 'N6',
        blood_type: 'O POS',
        donation_dt: '2019-01-23',
        reactiveResults: [
            'MALA',
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
];

let referrals = []

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
	{
		"id": 0,
		"category": "PCR RESULTS",
		"name": "HIV-RNA DETECTED"
	},
	{
		"id": 1,
		"category": "PCR RESULTS",
		"name": "HBV-DNA DETECTED"
	},
	{
		"id": 2,
		"category": "PCR RESULTS",
		"name": "HCV-RNA DETECTED"
	},
	{
		"id": 3,
		"category": "PCR RESULTS",
		"name": "HIV-RNA HBV-RNA HCV-RNA DETECTED"
	},
	{
		"id": 4,
		"category": "PCR RESULTS",
		"name": "HIV-RNA HBV-RNA DETECTED"
	},
	{
		"id": 5,
		"category": "PCR RESULTS",
		"name": "HIV-RNA HCV-RNA DETECTED"
	},
	{
		"id": 6,
		"category": "PCR RESULTS",
		"name": "HBV-DNA HCV-RNA DETECTED"
	},
	{
		"id": 7,
		"category": "PCR RESULTS",
		"name": "HIV-RNA NOT DETECTED"
	},
	{
		"id": 8,
		"category": "PCR RESULTS",
		"name": "HBV-DNA NOT DETECTED"
	},
	{
		"id": 9,
		"category": "PCR RESULTS",
		"name": "HCV-RNA NOT DETECTED"
	},
	{
		"id": 10,
		"category": "GEENIUS HIV INTERPRETATION",
		"name": "POSITIVE (HIV-1)"
	},
	{
		"id": 11,
		"category": "GEENIUS HIV INTERPRETATION",
		"name": "NEGATIVE"
	},
	{
		"id": 12,
		"category": "WESTERNBLOT HIV",
		"name": "POSITIVE (HIV-1)"
	},
	{
		"id": 13,
		"category": "WESTERNBLOT HIV",
		"name": "POSITIVE (HIV-1) with cross-reaction to (HIV-2)"
	},
	{
		"id": 14,
		"category": "WESTERNBLOT HIV",
		"name": "INDETERMINATE (gp120, p24)"
	},
	{
		"id": 15,
		"category": "WESTERNBLOT HIV",
		"name": "INDETERMINATE (gp160, p24)"
	},
	{
		"id": 16,
		"category": "WESTERNBLOT HIV",
		"name": "INDETERMINATE (gp160, p17)"
	},
	{
		"id": 17,
		"category": "WESTERNBLOT HIV",
		"name": "INDETERMINATE (gp160, p24, p17)"
	},
	{
		"id": 18,
		"category": "WESTERNBLOT HIV",
		"name": "INDETERMINATE (gp160, p66, p24)"
	},
	{
		"id": 19,
		"category": "WESTERNBLOT HIV",
		"name": "INDETERMINATE (gp160)"
	},
	{
		"id": 20,
		"category": "WESTERNBLOT HIV",
		"name": "INDETERMINATE (p51)"
	},
	{
		"id": 21,
		"category": "WESTERNBLOT HIV",
		"name": "INDETERMINATE (p66, p51)"
	},
	{
		"id": 22,
		"category": "WESTERNBLOT HIV",
		"name": "INDETERMINATE (p66)"
	},
	{
		"id": 23,
		"category": "WESTERNBLOT HIV",
		"name": "INDETERMINATE (p24)"
	},
	{
		"id": 24,
		"category": "WESTERNBLOT HIV",
		"name": "INDETERMINATE (p55)"
	},
	{
		"id": 25,
		"category": "WESTERNBLOT HIV",
		"name": "INDETERMINATE (p17)"
	},
	{
		"id": 26,
		"category": "WESTERNBLOT HIV",
		"name": "NEGATIVE"
	},
	{
		"id": 27,
		"category": "EIA RESULTS",
		"name": "Non-Reactive"
	},
	{
		"id": 28,
		"category": "EIA RESULTS",
		"name": "Reactive"
	},
	{
		"id": 29,
		"category": "EIA RESULTS",
		"name": "Non-Reactive Grayzone"
	},
	{
		"id": 30,
		"category": "EIA RESULTS",
		"name": "Reactive Grayzone"
	},
	{
		"id": 31,
		"category": "SERODIA HIV INTERPRETATION",
		"name": "Non-Reactive"
	},
	{
		"id": 32,
		"category": "SERODIA HIV INTERPRETATION",
		"name": "Non-Reactive (after Absorption)"
	},
	{
		"id": 33,
		"category": "SERODIA HIV INTERPRETATION",
		"name": "Inconclusive (HIV-1)"
	},
	{
		"id": 34,
		"category": "SERODIA HIV INTERPRETATION",
		"name": "Inconclusive (HIV-2)"
	},
	{
		"id": 35,
		"category": "SERODIA HIV INTERPRETATION",
		"name": "Inconclusive (HIV-1 and HIV-2)"
	},
	{
		"id": 36,
		"category": "SERODIA HIV INTERPRETATION",
		"name": "Inconclusive (HIV-1) after Absorption"
	},
	{
		"id": 37,
		"category": "SERODIA HIV INTERPRETATION",
		"name": "Inconclusive (HIV-2) after Absorption"
	},
	{
		"id": 38,
		"category": "SERODIA HIV INTERPRETATION",
		"name": "Inconclusive (HIV-1 and HIV-2) after Absorption"
	},
	{
		"id": 39,
		"category": "SERODIA HIV INTERPRETATION",
		"name": "Inconclusive (HIV-1) and Reactive (HIV-2)"
	},
	{
		"id": 40,
		"category": "SERODIA HIV INTERPRETATION",
		"name": "Reactive (HIV-1)"
	},
	{
		"id": 41,
		"category": "SERODIA HIV INTERPRETATION",
		"name": "Reactive (HIV-2)"
	},
	{
		"id": 42,
		"category": "SERODIA HIV INTERPRETATION",
		"name": "Reactive (HIV-1 and HIV-2)"
	},
	{
		"id": 43,
		"category": "SERODIA HIV INTERPRETATION",
		"name": "Reactive (HIV-1) and Inconclusive (HIV-2)"
	},
	{
		"id": 44,
		"category": "SERODIA HIV INTERPRETATION",
		"name": "Reactive (HIV-1) after Absorption"
	},
	{
		"id": 45,
		"category": "SERODIA HIV INTERPRETATION",
		"name": "Reactive (HIV-2) after Absorption"
	},
	{
		"id": 46,
		"category": "SERODIA HIV INTERPRETATION",
		"name": "Reactive (HIV-1 and HIV-2) after Absorption"
	},
	{
		"id": 47,
		"category": "PARTICLE AGGLUTINATION",
		"name": "Non-Reactive"
	},
	{
		"id": 48,
		"category": "PARTICLE AGGLUTINATION",
		"name": "Inconclusive"
	},
	{
		"id": 49,
		"category": "PARTICLE AGGLUTINATION",
		"name": "+"
	},
	{
		"id": 50,
		"category": "PARTICLE AGGLUTINATION",
		"name": "++"
	},
	{
		"id": 51,
		"category": "PARTICLE AGGLUTINATION",
		"name": "+++"
	},
	{
		"id": 52,
		"category": "PARTICLE AGGLUTINATION",
		"name": "++++"
	},
	{
		"id": 53,
		"category": "PARTICLE AGGLUTINATION",
		"name": "Non-Reactive (after Absorption)"
	},
	{
		"id": 54,
		"category": "PARTICLE AGGLUTINATION",
		"name": "Inconclusive (after Absorption)"
	},
	{
		"id": 55,
		"category": "PARTICLE AGGLUTINATION",
		"name": "+ (after Absorption)"
	},
	{
		"id": 56,
		"category": "PARTICLE AGGLUTINATION",
		"name": "++ (after Absorption)"
	},
	{
		"id": 57,
		"category": "PARTICLE AGGLUTINATION",
		"name": "+++ (after Absorption)"
	},
	{
		"id": 58,
		"category": "PARTICLE AGGLUTINATION",
		"name": "++++ (after Absorption)"
	},
	{
		"id": 59,
		"category": "EIA NT RESULTS",
		"name": "To Be Diluted"
	},
	{
		"id": 60,
		"category": "EIA NT RESULTS",
		"name": "Negative"
	},
	{
		"id": 61,
		"category": "EIA NT RESULTS",
		"name": "Positive"
	},
	{
		"id": 62,
		"category": "HCV BLOT INTERPRETATIONS",
		"name": "Positive"
	},
	{
		"id": 63,
		"category": "HCV BLOT INTERPRETATIONS",
		"name": "INDETERMINATE (NS3-1)"
	},
	{
		"id": 64,
		"category": "HCV BLOT INTERPRETATIONS",
		"name": "INDETERMINATE (NS3-2)"
	},
	{
		"id": 65,
		"category": "HCV BLOT INTERPRETATIONS",
		"name": "INDETERMINATE (NS4)"
	},
	{
		"id": 66,
		"category": "HCV BLOT INTERPRETATIONS",
		"name": "INDETERMINATE (NS5)"
	},
	{
		"id": 67,
		"category": "HCV BLOT INTERPRETATIONS",
		"name": "INDETERMINATE (GST)"
	},
	{
		"id": 68,
		"category": "HCV BLOT INTERPRETATIONS",
		"name": "INDETERMINATE (CORE)"
	},
	{
		"id": 69,
		"category": "MALARIA RESULTS",
		"name": "NO MALARIAL PARASITE SEEN"
	},
	{
		"id": 70,
		"category": "MALARIA RESULTS",
		"name": "Positive (P. falciparum)"
	},
	{
		"id": 71,
		"category": "MALARIA RESULTS",
		"name": "Positive (Plasmodium sp.)"
	},
	{
		"id": 72,
		"category": "MALARIA RESULTS",
		"name": "Positive (P. ovale)"
	},
	{
		"id": 73,
		"category": "MALARIA RESULTS",
		"name": "Positive (P. knowlesi)"
	},
	{
		"id": 74,
		"category": "MALARIA RESULTS",
		"name": "Positive (P. malariae)"
	},
	{
		"id": 75,
		"category": "MALARIA RESULTS",
		"name": "UNSUITABLE FOR TESTING"
	},
	{
		"id": 75,
		"category": "MALARIA RESULTS",
		"name": "Negative for all Plasmodium spp."
	},
	{
		"id": 76,
		"category": "STERLING RPR RESULTS",
		"name": "NON-REACTIVE"
	},
	{
		"id": 78,
		"category": "STERLING RPR RESULTS",
		"name": "INCONCLUSIVE"
	},
	{
		"id": 79,
		"category": "STERLING RPR RESULTS",
		"name": "+"
	},
	{
		"id": 80,
		"category": "STERLING RPR RESULTS",
		"name": "++"
	},
	{
		"id": 81,
		"category": "STERLING RPR RESULTS",
		"name": "+++"
	},
	{
		"id": 82,
		"category": "STERLING RPR RESULTS",
		"name": "++++"
	},
	{
		"id": 83,
		"category": "SYPHILIS RESULTS",
		"name": "NON-REACTIVE"
	},
	{
		"id": 84,
		"category": "SYPHILIS RESULTS",
		"name": "INCONCLUSIVE"
	},
	{
		"id": 85,
		"category": "SYPHILIS RESULTS",
		"name": "REACTIVE"
	}
]

let test_protocols = [
	{
		"id": 0,
		"tti": "HIV",
		"name": "FUJIREBIO DIAGNOSTICS, INC. SERODIA HIV 1/2",
		"fields": [
			{
				"id": 0,
				"name": "PA FINAL STATUS",
				"type": "select",
				"source": "SERODIA HIV INTERPRETATION"
			}
		],
		"forms": [
			{
				"id": 0,
				"name": "SERODIA HIV 1",
				"fields": [
					{
						"id": 0,
						"name": "SERODIA HIV 1 - 1",
						"type": "select",
						"source": "PARTICLE AGGLUTINATION"
					},
					{
						"id": 1,
						"name": "SERODIA HIV 1 - 2",
						"type": "select",
						"source": "PARTICLE AGGLUTINATION"
					},
					{
						"id": 2,
						"name": "SERODIA HIV 1/2 INT 1",
						"type": "select",
						"source": "SERODIA HIV INTERPRETATION"
					},
					{
						"id": 3,
						"name": "DATE TESTED 1",
						"type": "date"
					},
					{
						"id": 4,
						"name": "SERODIA HIV REMARKS 1",
						"type": "text"
					}
				]
			},
			{
				"id": 1,
				"name": "SERODIA HIV 2",
				"fields": [
					{
						"id": 0,
						"name": "SERODIA HIV 2 - 1",
						"type": "select",
						"source": "PARTICLE AGGLUTINATION"
					},
					{
						"id": 1,
						"name": "SERODIA HIV 2 - 2",
						"type": "select",
						"source": "PARTICLE AGGLUTINATION"
					},
					{
						"id": 2,
						"name": "SERODIA HIV 1/2 INT 2",
						"type": "select",
						"source": "SERODIA HIV INTERPRETATION"
					},
					{
						"id": 3,
						"name": "DATE TESTED 2",
						"type": "date"
					},
					{
						"id": 4,
						"name": "SERODIA HIV REMARKS 2",
						"type": "text"
					}
				]
			},
			{
				"id": 2,
				"name": "ABSORPTION",
				"fields": [
					{
						"id": 0,
						"name": "SERODIA HIV 1 - ABS",
						"type": "select",
						"source": "PARTICLE AGGLUTINATION"
					},
					{
						"id": 1,
						"name": "SERODIA HIV 2 - ABS",
						"type": "select",
						"source": "PARTICLE AGGLUTINATION"
					},
					{
						"id": 2,
						"name": "SERODIA HIV 1/2 INT ABS",
						"type": "select",
						"source": "SERODIA HIV INTERPRETATION"
					},
					{
						"id": 3,
						"name": "DATE TESTED ABS",
						"type": "date"
					},
					{
						"id": 4,
						"name": "SERODIA HIV REMARKS ABS",
						"type": "text"
					}
				]
			}
		]
	},
	{
		"id": 1,
		"tti": "HIV",
		"name": "ABBOTT ARCHITECT HIV Ag/Ab i2000 SR",
		"fields": [
			{
				"id": 0,
				"name": "ARCHITECT FINAL STATUS",
				"type": "select",
				"source": "EIA RESULTS"
			}
		],
		"forms": [
			{
				"id": 0,
				"name": "ARCHITECT 1",
				"fields": [
					{
						"id": 0,
						"name": "ARCHITECT S/CO 1",
						"type": "text"
					},
					{
						"id": 1,
						"name": "CUT-OFF VALUE 1",
						"type": "text"
					},
					{
						"id": 2,
						"name": "INTERPRETATION 1",
						"type": "select",
						"source": "EIA RESULTS"
					},
					{
						"id": 3,
						"name": "DATE TESTED 1",
						"type": "date"
					},
					{
						"id": 4,
						"name": "REMARKS 1",
						"type": "text"
					}
				]
			},
			{
				"id": 1,
				"name": "ARCHITECT 2",
				"fields": [
					{
						"id": 0,
						"name": "ARCHITECT S/CO 2",
						"type": "text"
					},
					{
						"id": 1,
						"name": "CUT-OFF VALUE 2",
						"type": "text"
					},
					{
						"id": 2,
						"name": "INTERPRETATION 2",
						"type": "select",
						"source": "EIA RESULTS"
					},
					{
						"id": 3,
						"name": "DATE TESTED 2",
						"type": "date"
					},
					{
						"id": 4,
						"name": "REMARKS 2",
						"type": "text"
					}
				]
			},
			{
				"id": 2,
				"name": "ARCHITECT 3",
				"fields": [
					{
						"id": 0,
						"name": "ARCHITECT S/CO 3",
						"type": "text"
					},
					{
						"id": 1,
						"name": "CUT-OFF VALUE 3",
						"type": "text"
					},
					{
						"id": 2,
						"name": "INTERPRETATION 3",
						"type": "select",
						"source": "EIA RESULTS"
					},
					{
						"id": 3,
						"name": "DATE TESTED 3",
						"type": "date"
					},
					{
						"id": 4,
						"name": "REMARKS 3",
						"type": "text"
					}
				]
			}
		]
	},
	{
		"id": 2,
		"tti": "HIV",
		"name": "BIORAD GENSCREEN ULTRA HIV Ag/Ab",
		"fields": [
			{
				"id": 0,
				"name": "GENSCREEN FINAL STATUS",
				"type": "select",
				"source": "EIA RESULTS"
			}
		],
		"forms": [
			{
				"id": 0,
				"name": "GENSCREEN 1",
				"fields": [
					{
						"id": 0,
						"name": "OPTICAL DENSITY 1",
						"type": "text"
					},
					{
						"id": 1,
						"name": "CUT-OFF VALUE 1",
						"type": "text"
					},
					{
						"id": 2,
						"name": "INTERPRETATION 1",
						"type": "select",
						"source": "EIA RESULTS"
					},
					{
						"id": 3,
						"name": "DATE TESTED 1",
						"type": "date"
					},
					{
						"id": 4,
						"name": "REMARKS 1",
						"type": "text"
					}
				]
			},
			{
				"id": 1,
				"name": "GENSCREEN 2",
				"fields": [
					{
						"id": 0,
						"name": "OPTICAL DENSITY 2",
						"type": "text"
					},
					{
						"id": 1,
						"name": "CUT-OFF VALUE 2",
						"type": "text"
					},
					{
						"id": 2,
						"name": "INTERPRETATION 2",
						"type": "select",
						"source": "EIA RESULTS"
					},
					{
						"id": 3,
						"name": "DATE TESTED 2",
						"type": "date"
					},
					{
						"id": 4,
						"name": "REMARKS 2",
						"type": "text"
					}
				]
			}
		]
	},
	{
		"id": 3,
		"tti": "HIV",
		"name": "BIORAD GEENIUS",
		"fields": [
			{
				"id": 0,
				"name": "INTERPRETATION",
				"type": "select",
				"source": "GEENIUS HIV INTERPRETATION"
			},
			{
				"id": 1,
				"name": "DATE TESTED",
				"type": "date"
			},
			{
				"id": 2,
				"name": "REMARKS",
				"type": "text"
			}
		]
	},
	{
		"id": 4,
		"tti": "HIV",
		"name": "ROCHE TAQSCREEN",
		"fields": [
			{
				"id": 0,
				"name": "INTERPRETATION",
				"type": "select",
				"source": "PCR RESULTS"
			},
			{
				"id": 1,
				"name": "DATE TESTED",
				"type": "date"
			},
			{
				"id": 2,
				"name": "REMARKS",
				"type": "text"
			}
		]
	},
	{
		"id": 5,
		"tti": "HIV",
		"name": "MP BLOT HIV 2.0",
		"fields": [
			{
				"id": 0,
				"name": "INTERPRETATION",
				"type": "select",
				"source": "WESTERNBLOT HIV"
			},
			{
				"id": 1,
				"name": "DATE TESTED",
				"type": "date"
			},
			{
				"id": 2,
				"name": "REMARKS",
				"type": "text"
			}
		]
	},
	{
		"id": 6,
		"tti": "HIV",
		"name": "QIAGEN ARTUS HIV-1",
		"fields": [
			{
				"id": 0,
				"name": "INTERPRETATION",
				"type": "select",
				"source": "PCR RESULTS"
			},
			{
				"id": 1,
				"name": "DATE TESTED",
				"type": "date"
			},
			{
				"id": 2,
				"name": "REMARKS",
				"type": "text"
			}
		]
	},
	{
		"id": 7,
		"tti": "HBV",
		"name": "BIORAD MONOLISA HBSAG QUALI",
		"fields": [
			{
				"id": 0,
				"name": "MONOLISA FINAL INTERPRETATION",
				"type": "select",
				"source": "EIA RESULTS"
			}
		],
		"forms": [
			{
				"id": 0,
				"name": "MONOLISA 1",
				"fields": [
					{
						"id": 0,
						"name": "OPTICAL DENSITY 1",
						"type": "text",
						"source": null
					},
					{
						"id": 1,
						"name": "CUT-OFF VALUE 1",
						"type": "text",
						"source": null
					},
					{
						"id": 2,
						"name": "INTERPRETATION 1",
						"type": "select",
						"source": "EIA RESULTS"
					},
					{
						"id": 3,
						"name": "DATE TESTED 1",
						"type": "date",
						"source": null
					}
				]
			},
			{
				"id": 1,
				"name": "MONOLISA 2",
				"fields": [
					{
						"id": 0,
						"name": "OPTICAL DENSITY 2",
						"type": "text",
						"source": null
					},
					{
						"id": 1,
						"name": "CUT-OFF VALUE 2",
						"type": "text",
						"source": null
					},
					{
						"id": 2,
						"name": "INTERPRETATION 2",
						"type": "select",
						"source": "EIA RESULTS"
					},
					{
						"id": 3,
						"name": "DATE TESTED 2",
						"type": "date",
						"source": null
					}
				]
			},
			{
				"id": 2,
				"name": "MONOLISA 3",
				"fields": [
					{
						"id": 0,
						"name": "OPTICAL DENSITY 3",
						"type": "text",
						"source": null
					},
					{
						"id": 1,
						"name": "CUT-OFF VALUE 3",
						"type": "text",
						"source": null
					},
					{
						"id": 2,
						"name": "INTERPRETATION 3",
						"type": "select",
						"source": "EIA RESULTS"
					},
					{
						"id": 3,
						"name": "DATE TESTED 3",
						"type": "date",
						"source": null
					}
				]
			}
		],
		"_showDetails": false
	},
	{
		"id": 8,
		"tti": "HBV",
		"name": "DIASORIN MUREX HBSAG QUALI",
		"fields": [
			{
				"id": 0,
				"name": "MUREX FINAL INTERPRETATION",
				"type": "select",
				"source": "EIA RESULTS"
			}
		],
		"forms": [
			{
				"id": 0,
				"name": "MUREX 1",
				"fields": [
					{
						"id": 0,
						"name": "OPTICAL DENSITY 1",
						"type": "text",
						"source": null
					},
					{
						"id": 1,
						"name": "CUT-OFF VALUE 1",
						"type": "text",
						"source": null
					},
					{
						"id": 2,
						"name": "INTERPRETATION 1",
						"type": "select",
						"source": "EIA RESULTS"
					},
					{
						"id": 3,
						"name": "DATE TESTED 1",
						"type": "date",
						"source": null
					}
				]
			},
			{
				"id": 1,
				"name": "MUREX 2",
				"fields": [
					{
						"id": 0,
						"name": "OPTICAL DENSITY 2",
						"type": "text",
						"source": null
					},
					{
						"id": 1,
						"name": "CUT-OFF VALUE 2",
						"type": "text",
						"source": null
					},
					{
						"id": 2,
						"name": "INTERPRETATION 2",
						"type": "select",
						"source": "EIA RESULTS"
					},
					{
						"id": 3,
						"name": "DATE TESTED 2",
						"type": "date",
						"source": null
					}
				]
			},
			{
				"id": 2,
				"name": "MUREX 3",
				"fields": [
					{
						"id": 0,
						"name": "OPTICAL DENSITY 3",
						"type": "text",
						"source": null
					},
					{
						"id": 1,
						"name": "CUT-OFF VALUE 3",
						"type": "text",
						"source": null
					},
					{
						"id": 2,
						"name": "INTERPRETATION 3",
						"type": "select",
						"source": "EIA RESULTS"
					},
					{
						"id": 3,
						"name": "DATE TESTED 3",
						"type": "date",
						"source": null
					}
				]
			}
		],
		"_showDetails": false
	},
	{
		"id": 9,
		"tti": "HBV",
		"name": "ABBOTT ARCHITECT HBSAG QUALI",
		"fields": [
			{
				"id": 0,
				"name": "ARCHITECT FINAL INTERPRETATION",
				"type": "select",
				"source": "EIA RESULTS"
			}
		],
		"forms": [
			{
				"id": 0,
				"name": "ARCHITECT 1",
				"fields": [
					{
						"id": 0,
						"name": "S/CO 1",
						"type": "text",
						"source": null
					},
					{
						"id": 1,
						"name": "INTERPRETATION 1",
						"type": "select",
						"source": "EIA RESULTS"
					},
					{
						"id": 2,
						"name": "DATE TESTED 1",
						"type": "date",
						"source": null
					},
					{
						"id": 3,
						"name": "REMARKS 1",
						"type": "text",
						"source": null
					}
				]
			},
			{
				"id": 1,
				"name": "ARCHITECT 2",
				"fields": [
					{
						"id": 0,
						"name": "S/CO 2",
						"type": "text",
						"source": null
					},
					{
						"id": 1,
						"name": "INTERPRETATION 2",
						"type": "select",
						"source": "EIA RESULTS"
					},
					{
						"id": 2,
						"name": "DATE TESTED 2",
						"type": "date",
						"source": null
					},
					{
						"id": 3,
						"name": "REMARKS 2",
						"type": "text",
						"source": null
					}
				]
			},
			{
				"id": 2,
				"name": "ARCHITECT 3",
				"fields": [
					{
						"id": 0,
						"name": "S/CO 3",
						"type": "text",
						"source": null
					},
					{
						"id": 1,
						"name": "INTERPRETATION 3",
						"type": "select",
						"source": "EIA RESULTS"
					},
					{
						"id": 2,
						"name": "DATE TESTED 3",
						"type": "date",
						"source": null
					},
					{
						"id": 3,
						"name": "REMARKS 3",
						"type": "text",
						"source": null
					}
				]
			}
		],
		"_showDetails": false
	},
	{
		"id": 10,
		"tti": "HBV",
		"name": "ROCHE TAQSCREEN",
		"fields": [
			{
				"id": 0,
				"name": "INTERPRETATION",
				"type": "select",
				"source": "PCR RESULTS"
			},
			{
				"id": 1,
				"name": "DATE TESTED",
				"type": "date",
				"source": null
			},
			{
				"id": 2,
				"name": "REMARKS",
				"type": "text",
				"source": null
			}
		],
		"forms": [],
		"_showDetails": false
	},
	{
		"id": 11,
		"tti": "HBV",
		"name": "QIAGEN ARTUS HBV",
		"fields": [
			{
				"id": 0,
				"name": "INTERPRETATION",
				"type": "select",
				"source": "PCR RESULTS"
			},
			{
				"id": 1,
				"name": "DATE TESTED",
				"type": "date",
				"source": null
			},
			{
				"id": 2,
				"name": "REMARKS",
				"type": "text",
				"source": null
			}
		],
		"forms": [],
		"_showDetails": false
	},
	{
		"id": 12,
		"tti": "HBV",
		"name": "BIORAD MONOLISA HBSAG NT",
		"fields": [
			{
				"id": 0,
				"name": "UNDILUTED",
				"type": "select",
				"source": "EIA NT RESULTS"
			},
			{
				"id": 1,
				"name": "DATE TESTED",
				"type": "date",
				"source": null
			},
			{
				"id": 2,
				"name": "1:10",
				"type": "select",
				"source": "EIA NT RESULTS"
			},
			{
				"id": 3,
				"name": "1:10 DATE TESTED",
				"type": "date",
				"source": null
			},
			{
				"id": 4,
				"name": "1:100",
				"type": "select",
				"source": "EIA NT RESULTS"
			},
			{
				"id": 5,
				"name": "1:100 DATE TESTED",
				"type": "date",
				"source": null
			},
			{
				"id": 6,
				"name": "1:1000",
				"type": "select",
				"source": "EIA NT RESULTS"
			},
			{
				"id": 7,
				"name": "1:1000 DATE TESTED",
				"type": "date",
				"source": null
			},
			{
				"id": 8,
				"name": "1:10000",
				"type": "select",
				"source": "EIA NT RESULTS"
			},
			{
				"id": 9,
				"name": "1:10000 DATE TESTED",
				"type": "date",
				"source": null
			},
			{
				"id": 10,
				"name": "MONO NT FINAL STATUS",
				"type": "select",
				"source": "EIA NT RESULTS"
			}
		],
		"forms": []
	},
	{
		"id": 13,
		"tti": "HCV",
		"name": "ABBOTT ARCHITECT ANTI-HCV",
		"fields": [
			{
				"id": 0,
				"name": "FINAL INTERPRETATION",
				"type": "select",
				"source": "EIA RESULTS"
			},
			{
				"id": 1,
				"name": "REMARKS",
				"type": "text",
				"source": null
			}
		],
		"forms": [
			{
				"id": 0,
				"name": "ARCHITECT 1",
				"fields": [
					{
						"id": 0,
						"name": "RESULT 1",
						"type": "text",
						"source": null
					},
					{
						"id": 1,
						"name": "INTERPRETATION 1",
						"type": "select",
						"source": "EIA RESULTS"
					},
					{
						"id": 2,
						"name": "DATE TESTED 1",
						"type": "date",
						"source": null
					}
				]
			},
			{
				"id": 1,
				"name": "ARCHITECT 2",
				"fields": [
					{
						"id": 0,
						"name": "RESULT 2",
						"type": "text",
						"source": null
					},
					{
						"id": 1,
						"name": "INTERPRETATION 2",
						"type": "select",
						"source": "EIA RESULTS"
					},
					{
						"id": 2,
						"name": "DATE TESTED 2",
						"type": "date",
						"source": null
					}
				]
			},
			{
				"id": 2,
				"name": "ARCHITECT 3",
				"fields": [
					{
						"id": 0,
						"name": "RESULT 3",
						"type": "text",
						"source": null
					},
					{
						"id": 1,
						"name": "INTERPRETATION 3",
						"type": "select",
						"source": "EIA RESULTS"
					},
					{
						"id": 2,
						"name": "DATE TESTED 3",
						"type": "date",
						"source": null
					}
				]
			}
		],
		"_showDetails": false
	},
	{
		"id": 14,
		"tti": "HCV",
		"name": "BIO-RAD MONOLISA HCV ULTRA",
		"fields": [
			{
				"id": 0,
				"name": "FINAL INTERPRETATION",
				"type": "select",
				"source": "EIA RESULTS"
			},
			{
				"id": 1,
				"name": "REMARKS",
				"type": "text",
				"source": null
			}
		],
		"forms": [
			{
				"id": 0,
				"name": "MONOLISA 1",
				"fields": [
					{
						"id": 0,
						"name": "OPTICAL DENSITY 1",
						"type": "text",
						"source": null
					},
					{
						"id": 1,
						"name": "CUT-OFF VALUE 1",
						"type": "text",
						"source": null
					},
					{
						"id": 2,
						"name": "INTERPRETATION 1",
						"type": "select",
						"source": "EIA RESULTS"
					},
					{
						"id": 3,
						"name": "DATE TESTED 1",
						"type": "date",
						"source": null
					}
				]
			},
			{
				"id": 1,
				"name": "MONOLISA 2",
				"fields": [
					{
						"id": 0,
						"name": "OPTICAL DENSITY 2",
						"type": "text",
						"source": null
					},
					{
						"id": 1,
						"name": "CUT-OFF VALUE 2",
						"type": "text",
						"source": null
					},
					{
						"id": 2,
						"name": "INTERPRETATION 2",
						"type": "select",
						"source": "EIA RESULTS"
					},
					{
						"id": 3,
						"name": "DATE TESTED 2",
						"type": "date",
						"source": null
					}
				]
			},
			{
				"id": 2,
				"name": "MONOLISA 3",
				"fields": [
					{
						"id": 0,
						"name": "OPTICAL DENSITY 3",
						"type": "text",
						"source": null
					},
					{
						"id": 1,
						"name": "CUT-OFF VALUE 3",
						"type": "text",
						"source": null
					},
					{
						"id": 2,
						"name": "INTERPRETATION 3",
						"type": "select",
						"source": "EIA RESULTS"
					},
					{
						"id": 3,
						"name": "REMARKS 3",
						"type": "text",
						"source": null
					}
				]
			}
		]
	},
	{
		"id": 15,
		"tti": "HCV",
		"name": "MP BIOMEDICALS HCV BLOT 3.0",
		"fields": [
			{
				"id": 0,
				"name": "INTERPRETATION",
				"type": "select",
				"source": "HCV BLOT INTERPRETATIONS"
			},
			{
				"id": 1,
				"name": "REMARKS",
				"type": "text",
				"source": null
			},
			{
				"id": 2,
				"name": "DATE TESTED",
				"type": "date",
				"source": null
			}
		],
		"forms": [],
		"_showDetails": false
	},
	{
		"id": 16,
		"tti": "HCV",
		"name": "ROCHE TAQSCREEN",
		"fields": [
			{
				"id": 0,
				"name": "INTERPRETATION",
				"type": "select",
				"source": "PCR RESULTS"
			},
			{
				"id": 1,
				"name": "DATE TESTED",
				"type": "date",
				"source": null
			},
			{
				"id": 2,
				"name": "REMARKS",
				"type": "text",
				"source": null
			}
		],
		"forms": [],
		"_showDetails": false
	},
	{
		"id": 17,
		"tti": "HCV",
		"name": "QIAGEN ARTUS HCV",
		"fields": [
			{
				"id": 0,
				"name": "INTERPRETATION",
				"type": "select",
				"source": "PCR RESULTS"
			},
			{
				"id": 1,
				"name": "DATE TESTED",
				"type": "date",
				"source": null
			},
			{
				"id": 2,
				"name": "REMARKS",
				"type": "text",
				"source": null
			}
		],
		"forms": [],
		"_showDetails": false
	},
	{
		"id": 18,
		"tti": "MAL",
		"name": "MALARIA MICROSCOPY RESULT",
		"fields": [
			{
				"id": 0,
				"name": "RESULT",
				"type": "select",
				"source": "MALARIA RESULTS"
			},
			{
				"id": 1,
				"name": "DATE REPORTED",
				"type": "date",
				"source": null
			}
		],
		"forms": [],
		"_showDetails": false
	},
	{
		"id": 19,
		"tti": "MAL",
		"name": "MALARIA PCR RESULT",
		"fields": [
			{
				"id": 0,
				"name": "RESULT",
				"type": "select",
				"source": "MALARIA RESULTS"
			},
			{
				"id": 1,
				"name": "DATE REPORTED",
				"type": "date",
				"source": null
			}
		],
		"forms": [],
		"_showDetails": true
	},
	{
		"id": 20,
		"tti": "SYP",
		"name": "STERLING DIAGNOSTICS INC. RPR CARD TEST",
		"fields": [
			{
				"id": 0,
				"name": "FINAL INTERPRETATION",
				"type": "select",
				"source": "SYPHILIS RESULTS"
			},
			{
				"id": 1,
				"name": "REMARKS",
				"type": "text",
				"source": null
			}
		],
		"forms": [
			{
				"id": 0,
				"name": "RESULT 1",
				"fields": [
					{
						"id": 0,
						"name": "RESULT 1",
						"type": "select",
						"source": "STERLING RPR RESULTS"
					},
					{
						"id": 1,
						"name": "INTERPRETATION 1",
						"type": "select",
						"source": "SYPHILIS RESULTS"
					},
					{
						"id": 2,
						"name": "DATE TESTED 1",
						"type": "date",
						"source": null
					}
				]
			},
			{
				"id": 1,
				"name": "RESULT 2",
				"fields": [
					{
						"id": 0,
						"name": "RESULT 2",
						"type": "select",
						"source": "STERLING RPR RESULTS"
					},
					{
						"id": 1,
						"name": "INTERPRETATION 2",
						"type": "select",
						"source": "SYPHILIS RESULTS"
					},
					{
						"id": 2,
						"name": "DATE TESTED 2",
						"type": "date",
						"source": null
					}
				]
			},
			{
				"id": 2,
				"name": "RESULT 3",
				"fields": [
					{
						"id": 0,
						"name": "RESULT 3",
						"type": "select",
						"source": "STERLING RPR RESULTS"
					},
					{
						"id": 1,
						"name": "INTERPRETATION 3",
						"type": "select",
						"source": "SYPHILIS RESULTS"
					},
					{
						"id": 2,
						"name": "DATE TESTED 3",
						"type": "date",
						"source": null
					}
				]
			}
		],
		"_showDetails": false
	},
	{
		"id": 21,
		"tti": "SYP",
		"name": "PHOENIX BIOTECH TREP-SURE",
		"fields": [
			{
				"id": 0,
				"name": "FINAL EIA INTERPRETATION",
				"type": "select",
				"source": "SYPHILIS RESULT"
			},
			{
				"id": 1,
				"name": "REMARKS",
				"type": "text",
				"source": null
			}
		],
		"forms": [
			{
				"id": 0,
				"name": "EIA 1",
				"fields": [
					{
						"id": 0,
						"name": "CUT-OFF VALUE 1",
						"type": "text",
						"source": null
					},
					{
						"id": 1,
						"name": "OPTICAL DENSITY 1",
						"type": "text",
						"source": null
					},
					{
						"id": 2,
						"name": "INTERPRETATION 1",
						"type": "select",
						"source": "EIA RESULTS"
					},
					{
						"id": 3,
						"name": "DATE TESTED 1",
						"type": "date",
						"source": null
					}
				]
			},
			{
				"id": 1,
				"name": "EIA 2",
				"fields": [
					{
						"id": 0,
						"name": "OPTICAL DENSITY 2",
						"type": "text",
						"source": null
					},
					{
						"id": 1,
						"name": "CUT-OFF VALUE 2",
						"type": "text",
						"source": null
					},
					{
						"id": 2,
						"name": "INTERPRETATION 2",
						"type": "select",
						"source": "EIA RESULTS"
					},
					{
						"id": 3,
						"name": "DATE TESTED 2",
						"type": "date",
						"source": null
					}
				]
			},
			{
				"id": 2,
				"name": "EIA 3",
				"fields": [
					{
						"id": 0,
						"name": "OPTICAL DENSITY 3",
						"type": "text",
						"source": null
					},
					{
						"id": 1,
						"name": "CUT-OFF VALUE 3",
						"type": "text",
						"source": null
					},
					{
						"id": 2,
						"name": "INTERPERTATION 3",
						"type": "select",
						"source": "EIA RESULTS"
					},
					{
						"id": 3,
						"name": "DATE TESTED 3",
						"type": "date",
						"source": null
					}
				]
			}
		],
		"_showDetails": false
	},
	{
		"id": 22,
		"tti": "SYP",
		"name": "ABBOTT ARCHITECT SYPHILIS TP",
		"fields": [
			{
				"id": 0,
				"name": "FINAL SYPHILIS TP INTERPRETATION",
				"type": "select",
				"source": "EIA RESULTS"
			},
			{
				"id": 1,
				"name": "SYPHILIS TP REMARKS",
				"type": "text",
				"source": null
			}
		],
		"forms": [
			{
				"id": 0,
				"name": "SYPHILIS TP 1",
				"fields": [
					{
						"id": 0,
						"name": "S/CO 1",
						"type": "text",
						"source": null
					},
					{
						"id": 1,
						"name": "INTERPRETATION 1",
						"type": "select",
						"source": "EIA RESULTS"
					},
					{
						"id": 2,
						"name": "DATE TESTED 1",
						"type": "date",
						"source": null
					}
				]
			},
			{
				"id": 1,
				"name": "SYPHILIS TP 2",
				"fields": [
					{
						"id": 0,
						"name": "S/CO 2",
						"type": "text",
						"source": null
					},
					{
						"id": 1,
						"name": "INTERPRETATION 2",
						"type": "select",
						"source": "EIA RESULTS"
					},
					{
						"id": 2,
						"name": "DATE TESTED 2",
						"type": "date",
						"source": null
					}
				]
			},
			{
				"id": 2,
				"name": "SYPHILIS TP 3",
				"fields": [
					{
						"id": 0,
						"name": "S/CO 3",
						"type": "text",
						"source": null
					},
					{
						"id": 1,
						"name": "INTERPRETATION 3",
						"type": "select",
						"source": "EIA RESULTS"
					},
					{
						"id": 2,
						"name": "DATE TESTED 3",
						"type": "date",
						"source": null
					}
				]
			}
		],
		"_showDetails": false
	}
]

let report_templates = []

let reject_reasons = [
	{id:0,name:"Sample Reject 1"},
	{id:1,name:"Sample Reject 2"},
	{id:2,name:"Sample Reject 3"},
]

export default { cryoboxes, users, donations, referrals, specimens, couriers, machines, reagents, kit_methods, result_options, particle_agglutination, serodia_hiv_interpretation, eia_results, westernblot_hiv, pcr_results, geenius_hiv_interpretation, options_registry, test_protocols, report_templates, reject_reasons }