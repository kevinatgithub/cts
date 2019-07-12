let options = {
    state : {
        option_categories : [],
    },
    getters : {
        option_categories(state){
            return state.option_categories
        },
    },
    mutations : {
        initOptionsCategories(state,payload){
            state.option_categories = payload
        },
    },
    actions : {
        async options_fetch_categories(context,payload){
            let request = await window.$http.get('options/categories')
            context.commit('initOptionsCategories',request.data)
        },
        options_get_categories(context,payload){
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