<template>
    <div>
        <b-breadcrumb :items="[{text : 'Refrigerator'},{text : 'Compartments'}]"></b-breadcrumb>
        <b-button variant="info" size="sm" class="mb-1" @click="back"><i class="fa fa-arrow-up"></i> Back to Refrigerators</b-button>
        <h6 class="text-info float-right">{{refrigerator.name}} <i class="fa fa-angle-double-right"></i> Compartments</h6>
        <b-table selectable select-mode="single" @row-selected="selectCompartment" :fields="['compartment_name']" :items="refrigerator.compartments" bordered striped head-variant="dark"></b-table>
        <b-input-group class='mb-1'>
            <label class='input-group-text' slot='prepend'>
                <i class='fa fa-list'></i>&nbsp;
                Compartment Name:
            </label>
            <b-input placeholder='Enter name or label of the Compartment' v-model='compartment'></b-input>
            <b-button slot="append" variant="success" size="sm" @click="save">Add Compartment</b-button>
        </b-input-group>
    </div>
</template>
<script>
export default {
    props : ['refrigerator'],
    data(){
        return {
            compartment : null
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
            let compartment = {compartment_name : this.compartment, sections : [{rows:[]},{rows :[]}]}
            this.$emit("savePressed",compartment)
            this.compartment=null
        }
    }
}
</script>
