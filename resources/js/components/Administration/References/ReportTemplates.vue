<template>
    <div>
        <h5>Report Templates</h5>
        <b-button variant="dark" class="float-right" size="sm" v-b-modal.report-template-form>Create REport</b-button>
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
                <b-button variant="danger" size="sm" @click="update = data.item" v-b-modal.confirm-delete><i class="fa fa-remove"></i></b-button>
            </template>
        </b-table>

        <b-pagination
            v-model="currentPage"
            :per-page="10"
            :total-rows="report_templates.length"
            >
        </b-pagination>

        <b-modal id="report-template-form" size="xl" header-bg-variant="dark" header-text-variant="white" title="Create/Update Report">
            <report-template-form></report-template-form>
        </b-modal>

    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import ReportTemplateForm from './ReportTemplates/ReportTemplateForm'
export default {
    components : {ReportTemplateForm},
    data(){
        return {
            isBusy : false,
            currentPage : 1,
            update : null,
        }
    },
    computed : {
        ...mapGetters(['report_templates']),
    }
}
</script>
