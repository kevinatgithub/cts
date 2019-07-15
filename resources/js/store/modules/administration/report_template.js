let report_template = {
    state : {
        report_templates : []
    },
    getters : {
        report_templates(state){
            return state.report_templates
        }
    },
    mutations : {
        initReportTemplates(state,payload){
            state.report_templates = payload
        },
    },
    actions : {
        async fetchReportTemplates(context,payload){
            let request = await window.$http.get("report_templates")
            context.commit("initReportTemplates",request.data)
        }
    },
}

export {report_template}