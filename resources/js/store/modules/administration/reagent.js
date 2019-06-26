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
        async fetchReagents(context, payload) {
            let request = await window.$http.get('reagents')
            context.commit('initReagents',request.data)
        },
        addReagent(context, payload) {
            console.log(payload)
            return window.$http.post('/reagents/new',payload)
        },
        updateReagent(context, payload) {
            return window.$http.post('/reagents/update',payload)
        },
        deleteReagent(context, payload) {
            return window.$http.delete('/reagents',payload)
        }
    }
}

export { reagents }