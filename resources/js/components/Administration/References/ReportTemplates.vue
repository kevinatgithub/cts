<template>
    <div>
        <h5>Report Templates <router-link to="/references/report_templates/create"><b-button class="float-right" variant="dark" size="sm">Create Report</b-button></router-link></h5>
        
        <b-table
            class="mt-3" 
            :items="report_templates" 
            :busy="isBusy"
            :fields="['id','name','options']"
            striped
            small
            per-page="10"
            :current-page="currentPage">
            <template slot="table-busy">
                <b-img width="30" src="./img/loading.gif"></b-img> Please wait..
            </template>
            <template slot="options" slot-scope="data">
                <b-button variant="info" size="sm" @click="selected = data.item" v-b-modal.report-preview><i class="fa fa-search"></i></b-button>
                <b-button variant="danger" size="sm" @click="update = data.item" v-b-modal.confirm-delete><i class="fa fa-remove"></i></b-button>
            </template>
        </b-table>

        <b-pagination
            v-model="currentPage"
            :per-page="10"
            :total-rows="report_templates.length"
            >
        </b-pagination>

        <b-modal id="report-preview" title="Report Preview" header-bg-variant="dark" header-text-variant="white" size="lg" hide-footer>
            <div v-html="selected.html" class="report-preview-content" v-if="selected">
            </div>
        </b-modal>

    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    data(){
        return {
            isBusy : false,
            currentPage : 1,
            update : null,
            selected : null,
        }
    },
    computed : {
        ...mapGetters(['report_templates']),
    }
}
</script>
