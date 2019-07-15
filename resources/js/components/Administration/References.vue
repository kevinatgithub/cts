<template>
    <div>
        <comp-url>Administration / References</comp-url>
        <h3 class="text-primary">References</h3>
        <hr>
        <b-breadcrumb :items="[
            {text : 'Administration', active : true},
            {text : 'Manage References', url : '/references'}
        ]"></b-breadcrumb>

        <b-row>
            <b-col xs="12" sm="12" md="3" lg="3">
                <b-list-group>
                    <b-list-group-item v-for="(link,i) in links" :key="i" :active="link.active">
                        <router-link :to="link.url">
                            {{link.text}} <i class="fa fa-caret-right" />
                        </router-link>
                    </b-list-group-item>
                </b-list-group>
            </b-col>
            <b-col>
                <div class="mt-3 d-sm-block d-md-none d-lg-none d-xl-none"></div>
                <router-view></router-view>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import router from './router'
export default {
    router,
    data(){
        return {
            links : [
                {text : "Hospitals" , url : "/references/hospital", active : false},
                {text : "Specimen" , url : "/references/specimen", active : false},
                {text : "Courier Services" , url : "/references/courier", active : false},
                // {text : "Interpretation Formula" , url : "/references/interpretation"},
                {text : "Cryoboxes" , url : "/references/cryobox", active : false},
                {text : "Refrigerators" , url : "/references/refrigerator", active : false},
                {text : "Kit Methods" , url : "/references/kitmethods", active : false},
                {text : "RITM Final Status Options" , url : "/references/resultoptions", active : false},
                // {text : "EIA Results" , url : "/references/eia_results", active : false},
                // {text : "Westernblot HIV Results" , url : "/references/westernblot_hiv", active : false},
                // {text : "PCR Results" , url : "/references/pcr_results", active : false},
                {text : "BSF Test Protocol References" , url : "/references/protocols/hiv/bsf", active : false},
                // {text : "Fujirebio References" , url : "/references/protocols/hiv/fujirebio", active : false},
                // {text : "Geenius HIV Interpretations" , url : "/references/geenius_hiv_interpretations", active : false},
                {text : "Options Registry" , url : "/references/options", active : false},
                {text : "Test Protocols" , url : "/references/test_protocols", active : false},
                {text : "Report Templates" , url : "/references/report_templates", active : false},
            ]
        }
    }
}
</script>
