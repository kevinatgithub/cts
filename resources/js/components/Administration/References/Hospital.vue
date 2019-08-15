<template>
    <div>
        <h5>Hospitals</h5>
        <hr>
        <b-button variant="success" v-b-modal.hospital-form @click="current=null"><i class="fa fa-plus"></i> New Hospital</b-button>
        <print-button-wrapper :printMode="printMode" @whenClicked="print" @callback="printMode = false" class="float-right" elementID="hospitals"></print-button-wrapper>

        <div id="hospitals">
            <b-table
            class="mt-3" 
            :items="hospitals"
            :fields="fields"
            head-variant="dark"
            striped
            small
            :per-page="perPage"
            :current-page="currentPage">
                <template slot="options" slot-scope="scope">
                    <b-button v-show="!printMode" variant="dark" size="sm" @click="current = scope.item; $bvModal.show('hospital-form')"><i class="fa fa-pencil"></i></b-button>
                    <b-button v-show="!printMode" variant="danger" size="sm"><i class="fa fa-remove"></i></b-button>
                </template>
            </b-table>
        </div>

        <b-pagination
            v-show="!printMode"
            v-model="currentPage"
            :per-page="perPage"
            :total-rows="hospitals.length"
            />

        <hospital-form :record="current" @saveClicked="saveHospital" @cancelPressed="record=null" />
        
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import HospitalForm from './Hospital/HospitalForm'
import PrintButtonWrapper from '../../App/PrintButtonWrapper'
export default {
    components : {HospitalForm,PrintButtonWrapper},
    data(){
        return {
            fields : [{key : 'name' , label : 'Hospital Name', sortable : true},'pathologist','options'],
            hospital : {},
            current : null,
            currentPage : 1,
            printMode : false,
        }
    },
    computed : {
        ...mapGetters(['hospitals']),
        perPage(){
            return this.printMode ? 100000 : 15
        }
    },
    methods : {
        saveHospital(hospital){

        },
        print(){
            this.printMode = true
        }
    }
}
</script>
