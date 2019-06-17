<template>
    <div>
        <comp-url>Administration / References / Specimen</comp-url>
        <h5>Specimen</h5>
        <hr>
        <b-form-group>
            <b-input-group class='mb-3'>
                <label class='input-group-text' slot='prepend'>
                    <i class='fa fa-tint'></i>&nbsp;
                    {{update ? "Update":"New"}} Specimen:
                </label>
                <b-input placeholder='Specimen Name' v-model='specimen' class="text-uppercase" @keypress.enter="doSave"></b-input>
                <b-button slot="append" variant="success" @click="doSave"><i class="fa fa-check"></i></b-button>
                <b-button slot="append" v-if="specimen" @click="update = null; specimen = null;" variant="dark"><i class="fa fa-remove"></i></b-button>
            </b-input-group>
        </b-form-group>
        <b-button variant="danger" v-if="update" size="sm" v-b-modal.confirm>Delete Selected Specimen</b-button>
        <b-table 
        class="mt-3" 
        selectable 
        :items="specimens" 
        striped
        select-mode="single" 
        @row-selected="specimenSelected" 
        select-variant="success"
        :busy="busy">
            <template slot="table-busy">
                <b-img src="./img/loading.gif" width="30"></b-img>Please wait, loading..
            </template>
        </b-table>
        <b-modal id="confirm" title="Delete Specimen" @ok="deleteSelected" header-bg-variant="danger" header-text-variant="light">
            Are you sure you want to delete selected Specimen?
        </b-modal>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    data(){
        return {
            specimen : null, update : null, busy : false
        }
    },
    mounted(){

    },
    methods : {
        doSave(){
            if(this.update && this.specimen){
                this.update.name = this.specimen.toUpperCase()
                this.busy = true
                this.$store.dispatch('updateSpecimen',this.update).then(r=>{
                    this.busy = false
                })
                this.update = null
                this.specimen = null
            }
            if(this.specimen != null){
                this.busy = true
                this.$store.dispatch('addSpecimen',this.specimen.toUpperCase()).then(r=>{
                    this.busy = false
                })
                this.specimen = null
            }
        },
        specimenSelected(items){
            this.update = items[0]
            this.specimen = items[0].name
        },
        deleteSelected(){
            this.busy = true
            this.$store.dispatch('deleteSpecimen',this.update).then(r=>{
                this.busy = false
            })
            this.specimen = null
            this.update = null
        }
    },
    computed : mapGetters(['specimens'])
}
</script>
