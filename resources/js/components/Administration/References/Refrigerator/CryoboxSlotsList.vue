<template>
    <div>
        <b-breadcrumb :items="[{text:'Refrigerators'},{text:'Compartments'},{text:'Rows'},{text : 'Cryobox Slots'}]"></b-breadcrumb>
        <b-button variant="info" size="sm" class="mb-1" @click="back"><i class="fa fa-arrow-up"></i> Back to Rows</b-button>
        <h6 class="text-info float-right">{{currentRow.row_name}} <i class="fa fa-angle-double-right"></i> Cryobox Slots</h6>
        
        <b-input-group class='mt-3'>
            <label class='input-group-text' slot='prepend'>
                <i class='fa fa-cube'></i>&nbsp;
                Slot Name:
            </label>
            <b-input class="text-uppercase" placeholder='Enter slot name or label' v-model='slot' @keypress.enter="save"></b-input>
            <b-button slot="append" variant="success" size="sm" @click="save">{{update ? "Update":"Add"}} Slot</b-button>
            <b-button v-if="update" variant="dark" slot="append">Cancel</b-button>
        </b-input-group>
        
        <b-table 
        class="mt-3" 
        small
        selectable 
        select-mode="single" 
        @row-selected="selectCryoboxSlot" 
        :items="currentRow.cryoboxSlots" 
        bordered striped head-variant="dark"
        :fields="['id','name','options']"
        :busy="isBusy">
            <template slot="table-busy">
                <b-img src="./img/loading.gif" width="30"></b-img> Please wait..
            </template>
            <template slot="options" slot-scope="data">
                <b-button variant="danger" size="sm" @click="confirmDelete(data.item)"><i class="fa fa-remove"></i></b-button>
            </template>
        </b-table>
        
        <b-modal id="confirm" title="Delete Cryobox Slot" @ok="deleteSlot" header-bg-variant="danger" header-text-variant="light">
            Are you sure you wan't to delete this Cryobox slot?
        </b-modal>

    </div>
</template>

<script>
export default {
    props : ['refrigerator','compartment','section','currentRow'],
    data(){
        return {
            slot : null, update : false, isBusy : false,
        }
    },
    methods : {
        back(){
            this.$emit('backPressed',true)
        },
        selectCryoboxSlot(items){
            if(items[0] == undefined){
                return
            }
            this.update = items[0]
            this.slot = items[0].name
        },
        save(){
            let {refrigerator, compartment, section, currentRow} = this
            let data = {
                refrigerator, compartment, section, row : currentRow
            }
            if(this.update){
                this.update.name = this.slot.toUpperCase()
                // this.$emit('savePressed',this.update)
                this.isBusy = true
                data.cryoboxSlot = this.update
                this.$store.dispatch('updateCryoboxSlot',data).then(r=>{
                    this.isBusy = false
                })
                this.update = null
            }else{
                data.slot = this.slot.toUpperCase()
                this.isBusy = true
                this.$store.dispatch('newCryoboxSlot',data).then(r=>{
                    this.isBusy = false
                })
                // this.$emit('savePressed',{name : this.slot.toUpperCase()})
            }
            this.slot = null
        },
        cancel(){
            this.update = null
            this.slot = null
        },
        confirmDelete(item){
            this.update = item
            this.slot = item.name
            this.$bvModal.show('confirm')
        },
        deleteSlot(){
            let {refrigerator, compartment, section, currentRow} = this
            let data = {
                refrigerator, compartment, section, row : currentRow, cryoboxSlot : this.update
            }
            this.isBusy = true
            this.$store.dispatch('deleteCryoboxSlot',data).then(r=>{
                this.isBusy = false
            })
            this.update = null
            this.slot = null
        }
    }
}
</script>

