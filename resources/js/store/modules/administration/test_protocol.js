let test_protocol = {
    actions : {
        test_protocols(context,payload){
            return window.$http.get('test_protocols',{tti : payload})
        }
    }
}

export {test_protocol}