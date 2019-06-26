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
        async fetchMachines(context, payload) {
            let request = await window.$http.get('machines')
            context.commit('initMachines',request.data)
        },
        addMachine(context, payload) {
            return window.$http.post('machines/new',payload)
        },
        updateMachine(context, payload) {
            return window.$http.post('machines/update',payload)
        },
        deleteMachine(context, payload) {
            return window.$http.delete('machines',payload)
        }
    }
}

export { machines }