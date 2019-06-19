const reagents = {
    state: {
        reagents: [],
    },
    getters: {
        reagents(state) {
            return state.reagents
        }
    },
    mutations: {
        initReagents(state, payload) {
            state.reagents = payload
        },
        addReagent(state, payload) {
            state.reagents.push(payload)
        },
        updateReagent(state, payload) {
            let reagent = _.find(state.reagents, { id: payload.id })
            _.extend(reagent, payload)
        },
        deleteReagent(state, payload) {
            state.reagents = _.filter(state.reagents, c => {
                return c.id != payload.id
            })
        }
    },
    actions: {
        fetchReagents(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(i => {
                    context.commit("initReagents", [
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
                    ])
                    resolve(true)
                }, 500)
            })
        },
        addReagent(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(i => {
                    let reagent = {
                        id: context.getters.reagents.length,
                        name: payload
                    }
                    context.commit("addReagent", reagent)
                    resolve(true)
                }, 500)
            })
        },
        updateReagent(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(i => {
                    context.commit('updateReagent', payload)
                    resolve(true)
                }, 500)
            })
        },
        deleteReagent(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(i => {
                    context.commit('deleteReagent', payload)
                    resolve(true)
                }, 500)
            })
        }
    }
}

export { reagents }