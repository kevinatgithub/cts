<template>
    <div>
        <b-row class="mt-3">
            <b-col>
                <b-breadcrumb :items="[{text : 'Refrigerators'},{text : 'Compartments'}]"></b-breadcrumb>
                <b-button variant="info" size="sm" class="mb-1" @click="back"><i class="fa fa-arrow-up"></i> Back to Refrigerators</b-button>
                <h6 class="text-info float-right">{{refrigerator.name}} <i class="fa fa-angle-double-right"></i> Refrigerator Compartments</h6>
            </b-col>
        </b-row>
        
        <b-input-group class='mt-3'>
            <label class='input-group-text' slot='prepend'>
                <i class='fa fa-list'></i>&nbsp;
                Compartment Name:
            </label>
            <b-input placeholder='Enter name or label of the Compartment' v-model='compartment' @keypress.enter="save" style="min-width:200px;"></b-input>
            <b-button slot="append" variant="success" size="sm" @click="save">{{update ? "Update" : "Add"}} Compartment</b-button>
            <b-button slot="append" v-if="update" variant="dark" @click="cancel">Cancel</b-button>
        </b-input-group>

        <b-table
        class="mt-3" 
        small
        selectable select-mode="single" 
        @row-selected="selectCompartment" 
        :fields="['compartment_name','options']" 
        :items="refrigerator.compartments" 
        bordered striped 
        head-variant="dark"
        :busy="isBusy">
            <template slot="options" slot-scope="data">
                <b-button variant="dark" size="sm" @click="edit(data.item)"><i class="fa fa-pencil"></i></b-button>
                <b-button variant="danger" size="sm" @click="confirmDelete(data.item)"><i class="fa fa-remove"></i></b-button>
            </template>
            <template slot="table-busy">
                <b-img src="./img/loading.gif" width="30"></b-img> Please wait..
            </template>
        </b-table>

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
            isBusy : false,
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
                this.isBusy = true
                this.$store.dispatch('updateCompartment',{
                    refrigerator : this.refrigerator,
                    compartment : this.update
                }).then(r=>{
                    this.isBusy = false
                })
                this.compartment = null
                this.update = null
                return
            }
            this.isBusy = true
            this.$store.dispatch('newCompartment',{
                refrigerator : this.refrigerator,
                compartment_name : this.compartment
            }).then(r=>{
                this.isBusy = false
            })
            // this.$emit("savePressed",compartment)
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
            this.isBusy = true
            this.$store.dispatch('deleteCompartment',{
                refrigerator : this.refrigerator,
                compartment : toDelete
            }).then(r=>{
                this.isBusy = false
            })
            // this.refrigerator.compartments = _.filter(this.refrigerator.compartments,function(c){
            //     return c.compartment_name != toDelete.compartment_name
            // })
        }
    }
}
</script>
