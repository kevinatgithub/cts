<template>
    <div>
        <b-breadcrumb :items="[{text : 'Refrigerators'}, {text : 'Compartments'} , {text : 'Rows'}]"></b-breadcrumb>
        <b-button variant="info" size="sm" class="mb-1" @click="back"><i class="fa fa-arrow-up"></i> Back to Compartments</b-button>
        <h6 class="text-info float-right">{{compartment.compartment_name}} <i class="fa fa-angle-double-right"></i> Compartment Rows</h6>
        <b-row>
            <b-col>
                <b-tabs class="mt-1">
                    <b-tab title="Front Section">
                        <row-list 
                        :items="compartment.sections[0].rows" 
                        section="f" 
                        @rowSelected="selectRowFront" 
                        @savePressed="saveFront"
                        @deletePressed="deleteRowFront" />
                    </b-tab>
                    <b-tab title="Back Section">
                        <row-list 
                        :items="compartment.sections[1].rows" 
                        section="b" 
                        @rowSelected="selectRowBack" 
                        @savePressed="saveBack"
                        @deletePressed="deleteRowBack" />
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
    props : ['compartment'],
    data(){
        return {
        }  
    },
    methods : {
        back(){
            this.$emit('backPressed',true)
        },
        selectRowFront(row){
            this.$emit('rowSelected',row)
        },
        selectRowBack(row){
            this.$emit('rowSelected',row)
        },
        saveFront(row){
            this.$emit("savePressedFront",row)
        },
        saveBack(row){
            this.$emit("savePressedBack",row)
        },
        deleteRowFront(row){
            this.deleteRow(row,0)
        },
        deleteRowBack(row){
            this.deleteRow(row,1)
        },
        deleteRow(row,section){
            this.compartment.sections[section].rows = _.filter(this.compartment.sections[section].rows,function(r){
                return r.row_name != row.row_name
            })
        }
    }
}
</script>

