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
            <b-col xs="12" sm="12" md="4" lg="4">
                <b-list-group>
                    <b-list-group-item v-for="(link,i) in links" :key="i">
                        <router-link :to="link.url">
                            {{link.text}} <i class="fa fa-angle-double-right" />
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
                {text : "Specimen" , url : "/references/specimen"},
                {text : "Courier Services" , url : "/references/courier"},
                // {text : "Interpretation Formula" , url : "/references/interpretation"},
                {text : "Cryoboxes" , url : "/references/cryobox"},
                {text : "Refrigerators" , url : "/references/refrigerator"},
            ]
        }
    }
}
</script>
