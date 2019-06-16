<template>
    <div>
        <b-breadcrumb :items="[{text : 'Refrigerators'}, {text : 'Compartments'} , {text : 'Rows'}]"></b-breadcrumb>
        <b-button variant="info" size="sm" class="mb-1" @click="back"><i class="fa fa-arrow-up"></i> Back to Compartments</b-button>
        <h6 class="text-info float-right">{{compartment.compartment_name}} <i class="fa fa-angle-double-right"></i> Compartment Rows</h6>
        <b-row>
            <b-col>
                <b-tabs class="mt-1">
                    <b-tab title="Front Section" @click="selectSection(0)">
                        <row-list 
                        :items="compartment.sections[0].rows" 
                        section="f" 
                        @rowSelected="selectRowFront" 
                        @savePressed="saveFront"
                        @deletePressed="deleteRowFront"
                        :busy="frontBusy" />
                    </b-tab>
                    <b-tab title="Back Section" @click="selectSection(1)">
                        <row-list 
                        :items="compartment.sections[1].rows" 
                        section="b" 
                        @rowSelected="selectRowBack" 
                        @savePressed="saveBack"
                        @deletePressed="deleteRowBack"
                        :busy="backBusy" />
                    </b-tab>
                </b-tabs>

            </b-col>
        </b-row>
    </div>
</template>
<script>
import RowList from './RowList/List'
export default {
    components : {RowList},
    props : ['refrigerator','compartment'],
    data(){
        return {
            frontBusy : false, backBusy : false, currentSection : 0,
        }  
    },
    methods : {
        back(){
            this.$emit('backPressed',true)
        },
        selectSection(section){
            this.currentSection = section
            this.$emit('sectionSelected',section)
        },
        selectRowFront(row){
            this.$emit('rowSelected',row)
        },
        selectRowBack(row){
            this.$emit('rowSelected',row)
        },
        saveFront(data){
            if(data.isNew){
                let payload = {
                    refrigerator : this.refrigerator,
                    compartment : this.compartment,
                    row_name : data.row_name,
                    section : this.currentSection,
                }
                this.frontBusy = true
                this.$store.dispatch('newRow',payload)
                .then(r=>{
                    this.frontBusy = false
                })
            }else{
                let payload = {
                    refrigerator : this.refrigerator,
                    compartment : this.compartment,
                    row : data.row,
                    section : this.currentSection,
                }
                this.frontBusy = true
                this.$store.dispatch('updateRow',payload)
                .then(r=>{
                    this.frontBusy = false
                })
            }
        },
        saveBack(data){            
            if(data.isNew){
                let payload = {
                    refrigerator : this.refrigerator,
                    compartment : this.compartment,
                    row_name : data.row_name,
                    section : 1,
                }
                this.backBusy = true
                this.$store.dispatch('newRow',payload)
                .then(r=>{
                    this.backBusy = false
                })
            }else{
                let payload = {
                    refrigerator : this.refrigerator,
                    compartment : this.compartment,
                    row : data.row,
                    section : 1,
                }
                this.backBusy = true
                this.$store.dispatch('updateRow',payload)
                .then(r=>{
                    this.backBusy = false
                })
            }
        },
        deleteRowFront(data){
            let payload = {
                refrigerator : this.refrigerator,
                compartment : this.compartment,
                row : data.row,
                section : 0,
            }
            this.frontBusy = true
            this.$store.dispatch('deleteRow',payload)
            .then(r=>{
                this.frontBusy = false
            })
        },
        deleteRowBack(data){
            let payload = {
                refrigerator : this.refrigerator,
                compartment : this.compartment,
                row : data,
                section : 1,
            }
            this.backBusy = true
            this.$store.dispatch('deleteRow',payload)
            .then(r=>{
                this.backBusy = false
            })
        },
    }
}
</script>

