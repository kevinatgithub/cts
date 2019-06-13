<template>
    <div>
        <b-breadcrumb :items="[{text : 'Refrigerator'}]"></b-breadcrumb>
        <b-table selectable select-mode="single" @row-selected="selectRef" :items="items" :fields="['name']" bordered striped head-variant="dark"></b-table>
        <b-input-group class='mb-1'>
            <label class='input-group-text' slot='prepend'>
                <i class='fa fa-columns'></i>&nbsp;
                Refrigerator Name:
            </label>
            <b-input placeholder='Enter the name or label of the Refrigerator' v-model='refrigerator'></b-input>
            <b-button variant="success" slot="append" @click="save">Add Refrigerator</b-button>
        </b-input-group>
    </div>
</template>
<script>
export default {
    props : ['items'],
    data(){
        return {
            refrigerator : null
        }
    },
    methods : {
        selectRef(items){
            let ref = items[0]
            this.$emit("refSelected",ref)
        },
        save(){
            this.$emit("savePressed",{name : this.refrigerator})
            this.refrigerator = null
        }
    }
}
</script>

