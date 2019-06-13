<template>
    <div>
        <b-breadcrumb :items="[{text:'Refrigerator'},{text:'Compartments'},{text:'Rows'},{text : 'Cryobox Slots'}]"></b-breadcrumb>
        <b-button variant="info" size="sm" class="mb-1" @click="back"><i class="fa fa-arrow-up"></i> Back to Rows</b-button>
        <h6 class="text-info float-right">{{currentRow.row_name}} <i class="fa fa-angle-double-right"></i> Cryobox Slots</h6>
        <b-table selectable select-mode="single" @row-selected="selectCryoboxSlot" :items="currentRow.cryoboxSlots" bordered striped head-variant="dark"></b-table>
        <b-input-group class='mb-1'>
            <label class='input-group-text' slot='prepend'>
                <i class='fa fa-cube'></i>&nbsp;
                Slot Name:
            </label>
            <b-input class="text-uppercase" placeholder='Enter slot name or label' v-model='slot'></b-input>
            <b-button slot="append" variant="success" size="sm" @click="save">{{update ? "Update":"Add"}} Slot</b-button>
            <b-button v-if="update" variant="danger" slot="append" v-b-modal.confirm>Delete</b-button>
        </b-input-group>
        <b-modal id="confirm" title="Delete Cryobox Slot" @ok="deleteSlot" header-bg-variant="danger" header-text-variant="light">
            Are you sure you wan't to delete this Cryobox slot?
        </b-modal>
    </div>
</template>

<script>
export default {
    props : ['currentRow'],
    data(){
        return {
            slot : null, update : false
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
            this.$emit('cryoboxSlotSelected',items[0])
            this.update = items[0]
            this.slot = items[0].name
        },
        save(){
            if(this.update){
                this.update.name = this.slot.toUpperCase()
                // this.$emit('savePressed',this.update)
                this.update = null
            }else{
                this.$emit('savePressed',{name : this.slot.toUpperCase()})
            }
            this.slot = null
        },
        deleteSlot(){
            let slot = this.update
            this.currentRow.cryoboxSlots = _.filter(this.currentRow.cryoboxSlots,s=>{
                return s.name != slot.name
            })
            this.update = null
            this.slot = null
        }
    }
}
</script>

