const dashboard = {
    actions : {
        fetchDashboardData(context,payload){
            return window.$http.get("dashboard",payload)
        }
    },
}

export {dashboard}