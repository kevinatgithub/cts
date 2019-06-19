const machines = {
    state: {
        machines: [],
    },
    getters: {
        machines(state) {
            return state.machines
        }
    },
    mutations: {
        initMachines(state, payload) {
            state.machines = payload
        },
        addMachine(state, payload) {
            state.machines.push(payload)
        },
        updateMachine(state, payload) {
            let machine = _.find(state.machines, { id: payload.id })
            _.extend(machine, payload)
        },
        deleteMachine(state, payload) {
            state.machines = _.filter(state.machines, c => {
                return c.id != payload.id
            })
        }
    },
    actions: {
        fetchMachines(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(i => {
                    context.commit("initMachines", [
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
                    ])
                    resolve(true)
                }, 500)
            })
        },
        addMachine(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(i => {
                    let machine = {
                        id: context.getters.machines.length,
                        name: payload
                    }
                    context.commit("addMachine", machine)
                    resolve(true)
                }, 500)
            })
        },
        updateMachine(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(i => {
                    context.commit('updateMachine', payload)
                    resolve(true)
                }, 500)
            })
        },
        deleteMachine(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(i => {
                    context.commit('deleteMachine', payload)
                    resolve(true)
                }, 500)
            })
        }
    }
}

export { machines }