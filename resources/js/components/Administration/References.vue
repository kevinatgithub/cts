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
                {text : "Machines" , url : "/references/machine", active : false},
                {text : "Assay Reagents" , url : "/references/reagent", active : false},
                {text : "Kit Methods" , url : "/references/kitmethods", active : false},
                {text : "RITM Final Status Options" , url : "/references/resultoptions", active : false},
                {text : "Fujirebio References" , url : "/references/protocols/hiv/fujirebio", active : false},
            ]
        }
    }
}
</script>
