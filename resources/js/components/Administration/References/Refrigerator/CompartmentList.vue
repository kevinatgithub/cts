<template>
    <div>
        <b-breadcrumb :items="[{text : 'Refrigerators'},{text : 'Compartments'}]"></b-breadcrumb>
        <b-button variant="info" size="sm" class="mb-1" @click="back"><i class="fa fa-arrow-up"></i> Back to Refrigerators</b-button>
        <h6 class="text-info float-right">{{refrigerator.name}} <i class="fa fa-angle-double-right"></i> Refrigerator Compartments</h6>
        <b-table 
        selectable select-mode="single" 
        @row-selected="selectCompartment" 
        :fields="['compartment_name','options']" 
        :items="refrigerator.compartments" 
        bordered striped 
        head-variant="dark">
            <template slot="options" slot-scope="data">
                <b-button variant="dark" size="sm" @click="edit(data.item)"><i class="fa fa-pencil"></i></b-button>
                <b-button variant="danger" size="sm" @click="confirmDelete(data.item)"><i class="fa fa-remove"></i></b-button>
            </template>
        </b-table>
        <b-input-group class='mb-1'>
            <label class='input-group-text' slot='prepend'>
                <i class='fa fa-list'></i>&nbsp;
                Compartment Name:
            </label>
            <b-input placeholder='Enter name or label of the Compartment' v-model='compartment'></b-input>
            <b-button slot="append" variant="success" size="sm" @click="save">{{update ? "Update" : "Add"}} Compartment</b-button>
            <b-button slot="append" v-if="update" variant="dark" @click="cancel">Cancel</b-button>
        </b-input-group>

        <b-modal id="compartment" header-bg-variant="danger" header-text-variant="light" title="Delete Compartment" @ok="deleteCompartment">
            Are you sure you wan't to delete this compartment?
        </b-modal>
    </div>
</template>
<script>
export default {
    props : ['refrigerator'],
    data(){
        return {
            compartment : null,
            update : null,
            toDelete : null,
        }
    },
    methods : {
        back(){
            this.$emit('backPressed',true)
        },
        selectCompartment(items){
            this.$emit('compartmentSelected',items[0])
        },
        save(){
            if(this.update){
                this.update.compartment_name = this.compartment
                this.compartment = null
                this.update = null
                return
            }
            let compartment = {compartment_name : this.compartment, sections : [{rows:[]},{rows :[]}]}
            this.$emit("savePressed",compartment)
            this.compartment=null
        },
        edit(compartment){
            this.update = compartment
            this.compartment = compartment.compartment_name
        },
        cancel(){
            this.update = null
            this.compartment = null
        },
        confirmDelete(compartment){
            this.toDelete = compartment
            this.$bvModal.show("compartment")
        },
        deleteCompartment(){
            let toDelete = this.toDelete
            this.refrigerator.compartments = _.filter(this.refrigerator.compartments,function(c){
                return c.compartment_name != toDelete.compartment_name
            })
        }
    }
}
</script>
