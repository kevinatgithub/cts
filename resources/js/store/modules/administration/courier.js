const couriers = {
    state : {
        couriers : []
    },
    getters : {
        couriers : state => {return state.couriers}
    },
    mutations : {
        initCouriers(state,payload){
            state.couriers = payload
        },
        addCourier(state,payload){
            state.couriers.push(payload)
        },
        updateCourier(state,payload){
            let courier = _.find(state.couriers,{id:payload.id})
            _.extend(courier,payload)
        },
        deleteCourier(state,payload){
            state.couriers = _.filter(state.couriers,c=>{
                return c.id != payload.id
            })
        }
    },
    actions : {
        async fetchCouriers(context,payload){
            let request = await window.$http.get('couriers')
            context.commit('initCouriers',request.data)
        },
        addCourier(context,payload){
            return window.$http.post('couriers/new',payload)
        },
        updateCourier(context,payload){
            return window.$http.post('couriers/update',payload)
        },
        deleteCourier(context,payload){
            return window.$http.delete('couriers',payload)
        }
    }
}

export {couriers};