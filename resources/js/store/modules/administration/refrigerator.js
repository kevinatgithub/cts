const refrigerator = {
    state : {
        refrigerators : [
            {
                "id":0,
                "name":"HIV",
                "compartments":[
                    {
                        "id":0,
                        "compartment_name":
                        "Top",
                        "sections":[
                            {
                                "rows":[
                                    {
                                        "id":0,
                                        "row_name":
                                        "Row 1",
                                        "cryoboxSlots":[
                                            {"id":0,"name":"Slot 1"},
                                            {"id":1,"name":"Slot 2"},
                                            {"id":2,"name":"Slot 3"},
                                            {"id":3,"name":"Slot 4"},
                                            {"id":4,"name":"Slot 5"}
                                        ]
                                    },
                                    {
                                        "id":1,
                                        "row_name":"Row 2",
                                        "cryoboxSlots":[
                                            {"id":0,"name":"Slot 1"},
                                            {"id":1,"name":"Slot 2"},
                                            {"id":2,"name":"Slot 3"},
                                            {"id":3,"name":"Slot 4"},
                                            {"id":4,"name":"Slot 5"}
                                        ]
                                    }
                                ]
                            },
                            {"rows":[{"id":0,"row_name":"Row 1","cryoboxSlots":[{"id":0,"name":"1"},{"id":1,"name":"2"},{"id":2,"name":"3"},{"id":3,"name":"4"},{"id":4,"name":"5"}]},{"id":1,"row_name":"Row 2","cryoboxSlots":[{"id":0,"name":"1"},{"id":1,"name":"2"},{"id":2,"name":"3"},{"id":3,"name":"4"},{"id":4,"name":"5"}]}]}]},{"id":1,"compartment_name":"Bottom","sections":[{"rows":[]},{"rows":[]}]}
                ]
            }
        ]
    },
    getters : {
        refrigerators(state){
            return state.refrigerators
        }
    },
    mutations : {
        newRefrigerator(state,payload){
            state.refrigerators.push(payload)
        },
        updateRefrigerator(state,payload){
            let ref = _.find(state.refrigerators,{id:payload.id})
            _.extend(ref,payload)
        },
        deleteRefrigerator(state,payload){
            state.refrigerators = _.filter(state.refrigerators,r=>{
                return r.id != payload.id
            })
        },

        newCompartment(state,payload){
            let ref = _.find(state.refrigerators,{id : payload.refrigerator.id})
            ref.compartments.push(payload.compartment)
        },
        updateCompartment(state,payload){
            let ref = _.find(state.refrigerators,{id : payload.refrigerator.id})
            let comp = _.find(ref.compartments,{id:payload.compartment.id})
            _.extend(comp,payload.compartment)
        },
        deleteCompartment(state,payload){
            let ref = _.find(state.refrigerators,{id : payload.refrigerator.id})
            ref.compartments = _.filter(ref.compartments,c=>{
                return c.id != payload.compartment.id
            })
        },

        newRow(state,payload){
            let ref = _.find(state.refrigerators,{id : payload.refrigerator.id})
            let compartment = _.find(ref.compartments,{id : payload.compartment.id})
            compartment.sections[payload.section].rows.push(payload.row)
        },
        updateRow(state,payload){
            let ref = _.find(state.refrigerators,{id : payload.refrigerator.id})
            let comp = _.find(ref.compartments,{id:payload.compartment.id})
            let row = _.find(comp.sections[payload.section].rows,{id : payload.row.id})
            _.extend(row,payload.row)
        },
        deleteRow(state,payload){
            let ref = _.find(state.refrigerators,{id : payload.refrigerator.id})
            let comp = _.find(ref.compartments,{id:payload.compartment.id})
            comp.sections[payload.section].rows = _.filter(comp.sections[payload.section].rows,r=>{
                return r.id != payload.row.id
            })
        },

        newCryoboxSlot(state,payload){
            let ref = _.find(state.refrigerators,{id : payload.refrigerator.id})
            let compartment = _.find(ref.compartments,{id : payload.compartment.id})
            let section = compartment.sections[payload.section]
            let row = _.find(section.rows,{id:payload.row.id})
            row.cryoboxSlots.push(payload.cryoboxSlot)
        },
        updateCryoboxSlot(state,payload){
            let ref = _.find(state.refrigerators,{id : payload.refrigerator.id})
            let compartment = _.find(ref.compartments,{id:payload.compartment.id})
            let section = compartment.sections[payload.section]
            let row = _.find(section.rows,{id : payload.row.id})
            let cryoboxSlot = _.find(row.cryoboxSlots,{id : payload.cryoboxSlot.id})
            _.extend(cryoboxSlot,payload.cryoboxSlot)
        },
        deleteCryoboxSlot(state,payload){
            let ref = _.find(state.refrigerators,{id : payload.refrigerator.id})
            let compartment = _.find(ref.compartments,{id:payload.compartment.id})
            let section = compartment.sections[payload.section]
            let row = _.find(section.rows,{id : payload.row.id})
            row.cryoboxSlots = _.filter(row.cryoboxSlots,c=>{
                return c.id != payload.cryoboxSlot.id
            })
        },
    },
    actions : {
        newRefrigerator(context,payload){
            return new Promise((resolve,reject) => {
                setTimeout(i=>{
                    let ref = {
                        id : context.getters.refrigerators.length,
                        name : payload,
                        compartments : []
                    }
                    context.commit("newRefrigerator",ref)
                    resolve(true)
                },500)
            })
        },
        updateRefrigerator(context,payload){
            return new Promise((resolve,reject) => {
                setTimeout(i=>{
                    context.commit('updateRefrigerator',payload)
                    resolve(true)
                },500)
            })
        },
        deleteRefrigerator(context,payload){
            return new Promise((resolve,reject) => {
                setTimeout(i=>{
                    context.commit('deleteRefrigerator',payload)
                    resolve(true)
                },500)
            })
        },

        newCompartment(context,payload){
            return new Promise((resolve,reject) => {
                setTimeout(i=>{
                    let compartment = {
                        id : payload.refrigerator.compartments.length,
                        compartment_name : payload.compartment_name, 
                        sections : [{rows:[]},{rows :[]}]
                    }
                    payload.compartment = compartment
                    context.commit('newCompartment',payload)
                    resolve(true)
                },500)
            })
        },
        updateCompartment(context,payload){
            return new Promise((resolve,reject) => {
                setTimeout(i=>{
                    context.commit('updateCompartment',payload)
                    resolve(true)
                },500)
            })
        },
        deleteCompartment(context,payload){
            return new Promise((resolve,reject) => {
                setTimeout(i=>{
                    context.commit('deleteCompartment',payload)
                    resolve(true)
                },500)
            })
        },

        newRow(context,payload){
            return new Promise((resolve,reject) => {
                setTimeout(i=>{
                    let row = {
                        id : payload.compartment.sections[payload.section].rows.length,
                        row_name : payload.row_name,
                        cryoboxSlots : [],
                    }
                    payload.row = row
                    context.commit('newRow',payload)
                    resolve(true)
                },500)
            })
        },
        updateRow(context,payload){
            return new Promise((resolve,reject) => {
                setTimeout(i=>{
                    context.commit('updateRow',payload)
                    resolve(true)
                },500)
            })
        },
        deleteRow(context,payload){
            return new Promise((resolve,reject) => {
                setTimeout(i=>{
                    context.commit('deleteRow',payload)
                    resolve(true)
                },500)
            })
        },

        newCryoboxSlot(context,payload){
            return new Promise((resolve,reject) => {
                setTimeout(i=>{
                    let slot = {
                        id : payload.row.cryoboxSlots.length,
                        name : payload.slot,
                    }
                    payload.cryoboxSlot = slot
                    context.commit('newCryoboxSlot',payload)
                    resolve(true)
                },500)
            })
        },
        updateCryoboxSlot(context,payload){
            return new Promise((resolve,reject) => {
                setTimeout(i=>{
                    context.commit('updateCryoboxSlot',payload)
                    resolve(true)
                },500)
            })
        },
        deleteCryoboxSlot(context,payload){
            return new Promise((resolve,reject) => {
                setTimeout(i=>{
                    context.commit('deleteCryoboxSlot',payload)
                    resolve(true)
                },500)
            })
        },
    }
}

export {refrigerator}