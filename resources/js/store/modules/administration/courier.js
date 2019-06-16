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
        fetchCouriers(context,payload){
            return new Promise((resolve,reject) => {
                setTimeout(i=>{
                    context.commit("initCouriers",[
                        {id : 0, name : 'FedEx'},
                        {id : 1, name : 'LBC'},
                        {id : 2, name : 'Lalamove'},
                        {id : 3, name : 'GrabExpress'},
                    ])
                    resolve(true)
                },500)
            })
        },
        addCourier(context,payload){
            return new Promise((resolve,reject) => {
                setTimeout(i=>{
                    let courier = {
                        id : context.getters.couriers.length,
                        name : payload
                    }
                    context.commit("addCourier",courier)
                    resolve(true)
                },500)
            })
        },
        updateCourier(context,payload){
            return new Promise((resolve,reject) => {
                setTimeout(i=>{
                    context.commit('updateCourier',payload)
                    resolve(true)
                },500)
            })
        },
        deleteCourier(context,payload){
            return new Promise((resolve,reject) => {
                setTimeout(i=>{
                    context.commit('deleteCourier',payload)
                    resolve(true)
                },500)
            })
        }
    }
}

export {couriers};