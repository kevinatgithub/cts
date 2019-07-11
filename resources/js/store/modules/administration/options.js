let options = {
    actions : {
        options_get_categories(){
            return window.$http.get('options/categories')
        },
        options_get(context,payload){
            return window.$http.get('options',{category : payload.category})
        },
        options_new(context,payload){
            return window.$http.post('options/new',payload)
        },
        options_update(context,payload){
            return window.$http.post('options/update',payload)
        },
        options_delete(context,payload){
            return window.$http.delete('options',payload)
        }
    }
}

export {options}