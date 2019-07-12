let test_protocol = {
    state : {
        test_protocols : [],
    },
    getters : {
        test_protocols(state){
            return state.test_protocols
        },
    },
    mutations : {
        initTestProtocols(state,payload){
            state.test_protocols = payload
        },
    },
    actions : {
        initTestProtocols(context,payload){
            context.commit("initTestProtocols",payload)
        },
        async fetchAllTestProtocols(context,payload){
            let request = await window.$http.get('test_protocols/all')
            context.commit("initTestProtocols",request.data)
        },
        test_protocols(context,payload){
            return window.$http.get('test_protocols',{tti : payload})
        },
        test_protocol_new(context,payload){
            return window.$http.post('test_protocols/new',payload)
        },
        test_protocol_update(context,payload){
            return window.$http.post('test_protocols/update',payload)
        },
        test_protocol_delete(context,payload){
            return window.$http.delete('test_protocols',payload)
        },
        test_protocol_form_new(context,payload){
            return window.$http.post('test_protocols/form_new',payload)
        },
        test_protocol_field_update(context,payload){
            return window.$http.post('test_protocols/field_update',payload)
        },
        test_protocol_form_field_update(context,payload){
            return window.$http.post('test_protocols/form_field_update',payload)
        },
        test_protocol_field_new(context,payload){
            return window.$http.post('test_protocols/field_new',payload)
        },
        test_protocol_form_field_new(context,payload){
            return window.$http.post('test_protocols/form_field_new',payload)
        },
        test_protocol_field_delete(context,payload){
            return window.$http.post('test_protocols/field_delete',payload)
        },
        test_protocol_form_field_delete(context,payload){
            return window.$http.post('test_protocols/form_field_delete',payload)
        },
    }
}

export {test_protocol}