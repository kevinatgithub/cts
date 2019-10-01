import axios from 'axios'
let REMOTE_HOST = 'http://test.nbbnets.net/v2/public/api/cts'
const donation = {
    state : {
        donations : [],
    },
    actions : {
        fetchDonation(context,payload){
            return window.$http.get("donations/"+payload)
            // console.log(REMOTE_HOST+"/donation")
            // return axios.post(REMOTE_HOST+"/donation",payload)
        }
    },
}

export {donation}