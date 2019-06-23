const donation = {
    state : {
        donations : [],
    },
    actions : {
        fetchDonation(context,payload){
            return window.$http.post("donation",payload)
        }
    },
}

export {donation}