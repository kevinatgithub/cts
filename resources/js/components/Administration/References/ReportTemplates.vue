<template>
    <div>
        <h5>Report Templates</h5>

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

        <report-template-form></report-template-form>
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
