<template>
    <div>
        <h5>Hospitals</h5>
        <hr>
        <b-button variant="success" v-b-modal.hospital-form @click="current=null"><i class="fa fa-plus"></i> New Hospital</b-button>
        <b-table
        class="mt-3" 
        :items="hospitals"
        :fields="fields"
        head-variant="dark"
        striped
        small
        per-page="10"
        :current-page="currentPage">
            <template slot="options" slot-scope="scope">
                <b-button variant="dark" size="sm" @click="current = scope.item; $bvModal.show('hospital-form')"><i class="fa fa-pencil"></i></b-button>
                <b-button variant="danger" size="sm"><i class="fa fa-remove"></i></b-button>
            </template>
        </b-table>

        <b-pagination
            v-model="currentPage"
            :per-page="20"
            :total-rows="hospitals.length"
            />

        <hospital-form :record="current" @saveClicked="saveHospital" @cancelPressed="record=null" />
        
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import HospitalForm from './Hospital/HospitalForm'
export default {
    components : {HospitalForm},
    data(){
        return {
            fields : [{key : 'name' , label : 'Hospital Name', sortable : true},'pathologist','options'],
            hospital : {},
            current : null,
            currentPage : 1,
        }
    },
    computed : {
        ...mapGetters(['hospitals']),
    },
    methods : {
        saveHospital(hospital){

        }
    }
}
</script>
