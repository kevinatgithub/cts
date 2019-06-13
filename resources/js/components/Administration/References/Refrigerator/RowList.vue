<template>
    <div>
        <b-breadcrumb :items="[{text : 'Refrigerator'}, {text : 'Compartments'} , {text : 'Rows'}]"></b-breadcrumb>
        <b-button variant="info" size="sm" class="mb-1" @click="back"><i class="fa fa-arrow-up"></i> Back to Compartments</b-button>
        <h6 class="text-info float-right">{{compartment.compartment_name}} <i class="fa fa-angle-double-right"></i> Sections</h6>
        <b-row>
            <b-col>
                <b-tabs class="mt-1">
                    <b-tab title="Front">
                        <b-table selectable @row-selected="selectRowFront" :fields="['row_name']" :items="compartment.sections[0].rows" bordered striped head-variant="dark"></b-table>
                        <b-input-group class='mb-1'>
                            <b-input placeholder='Enter Row Name' v-model='frow'></b-input>
                            <b-button variant="success" slot="append" @click="saveFront">{{updateF ? "Update":"Add"}} Row</b-button>
                            <b-button v-if="updateF" variant="dark" slot="append" @click="open(true)">Open</b-button>
                            <b-button v-if="updateF" variant="danger" slot="append" @click="deleteSlot(true)">Delete</b-button>
                        </b-input-group>
                    </b-tab>
                    <b-tab title="Back">
                        <b-table selectable select-mode="single" @row-selected="selectRowBack" :fields="['row_name']" :items="compartment.sections[1].rows" bordered striped head-variant="dark"></b-table>
                        <b-input-group class='mb-1'>
                            <b-input placeholder='Enter Row Name' v-model='brow'></b-input>
                            <b-button variant="success" slot="append" @click="saveBack">{{updateB ? "Update":"Add"}} Row</b-button>
                            <b-button v-if="updateB" variant="dark" slot="append" @click="open(false)">Open</b-button>
                            <b-button v-if="updateB" variant="danger" slot="append" @click="deleteSlot(false)">Delete</b-button>
                        </b-input-group>

                    </b-tab>
                </b-tabs>

            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
    props : ['compartment'],
    data(){
        return {
            frow : null,
            brow : null,
            updateF : null,
            updateB : null,
        }  
    },
    methods : {
        back(){
            this.$emit('backPressed',true)
        },
        selectRowFront(items){
            let row = items[0]
            if(row == undefined){
                return
            }
            this.updateF = row
            this.frow = row.row_name
            // this.$emit('rowSelected',row)
        },
        open(isFront){
            if(isFront){
                this.$emit('rowSelected',this.updateF)
            }else{
                this.$emit('rowSelected',this.updateB)
            }
        },
        deleteSlot(isFront){

        },
        selectRowBack(items){
            let row = items[0]
            if(row == undefined){
                return
            }
            this.updateB = row
            this.brow = row.row_name
            // this.$emit('rowSelected',row)
        },
        saveFront(){
            if(this.updateF){
                this.updateF.row_name = this.frow
                this.frow = null
                this.updateF = null
                return
            }
            let row = {
                row_name : this.frow
            }
            this.$emit("savePressedFront",row)
            this.frow = null
        },
        saveBack(){
            if(this.updateB){
                this.updateB.row_name = this.brow
                this.brow = null
                this.updateB = null
                return
            }
            let row = {
                row_name : this.brow
            }
            this.$emit("savePressedBack",row)
            this.brow = null
        }
    }
}
</script>

